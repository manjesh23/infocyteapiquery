#!/usr/bin/env python

"""Tests for `infocyteapiquery` package."""

from passwords import cname, apikey, apiquery
import pytest

# Import required modules
import requests
import pandas as pd
import json
import subprocess
from tqdm import tqdm

# Set pandas to show full rows and columns
pd.set_option('display.max_rows', None)
pd.set_option('display.max_columns', None)
pd.set_option('display.width', None)
pd.set_option('display.max_colwidth', None)

'''
This is API Query Function
'''
# Main function


def query(cname="cname", apikey="apikey", apiquery="apiquery"):
    tqdm.pandas()
    global icpd, ic
    ic = requests.get("https://"+cname+".infocyte.com/api/" +
                      apiquery+"?access_token="+apikey + "&count=True")
    iccount = (str(ic.headers.get("X-Total-Count"))[:-3])
    if (len(iccount) == 0):
        loopic = ic
        for x in tqdm(range(1), desc="Loading " + apiquery, ncols=100, unit='Loop(s)', bar_format='{l_bar}{bar} | {n_fmt}/{total_fmt} {unit}', colour='GREEN'):
            icdata = json.loads(loopic.text)
            icdb = pd.DataFrame(icdata)
            icpd = icdb
    else:
        icdata = json.loads(ic.text)
        icdb = pd.DataFrame(icdata)
        icpd = icdb
        for x in (num+1 for num in tqdm(range(int(iccount)), desc="Loading " + apiquery, ncols=100, unit='Loop(s)', bar_format='{l_bar}{bar} | {n_fmt}/{total_fmt} {unit}', colour='GREEN')):
            if x > 9:
                loopic = requests.get("https://"+cname+".infocyte.com/api/"+apiquery +
                                      "?access_token=" + apikey+"&filter={\"skip\": "+str(x).ljust(5, '0')+"}")
                icdata = json.loads(loopic.text)
                icdb = pd.DataFrame(icdata)
                icpd = icpd.append(icdb, ignore_index=True)
            else:
                loopic = requests.get("https://"+cname+".infocyte.com/api/"+apiquery +
                                      "?access_token=" + apikey+"&filter={\"skip\": "+str(x).ljust(4, '0')+"}")
                icdata = json.loads(loopic.text)
                icdb = pd.DataFrame(icdata)
                icpd = icpd.append(icdb, ignore_index=True)
    mask = icpd.astype(str).apply(
        lambda x: x.str.match(r'(\d{2,4}-\d{2}-\d{2,4})+').all())
    icpd.loc[:, mask] = icpd.loc[:, mask].apply(pd.to_datetime)
    return icpd


'''
This is PowerShell Function
'''


def ps(cname="cname", apikey="apikey", pscmd="pscmd"):
    key = "Set-ICToken -Instance " + cname + " -Token " + \
        apikey + ";Set-ICBox -Global -Last 90;"
    pscmd = pscmd.replace('\n', ';')
    for line in tqdm(pscmd.splitlines(), desc="Loading ", ncols=100, unit='Line(s)', bar_format='{l_bar}{bar} | {n_fmt}/{total_fmt} {unit}', colour='BLUE'):
        raw = subprocess.run(
            ["powershell.exe", "-Command", key + line], capture_output=True)
        outcome = raw.stdout.decode("utf-8")[6:]
    return(outcome)


'''
This is PowerShell base64-Encoded Funcation
'''


def pse(cname="cname", apikey="apikey", psecmd="psecmd"):
    key = "Set-ICToken -Instance " + cname + " -Token " + \
        apikey + ";Set-ICBox -Global -Last 90;"
    psecmd = psecmd.replace('\n', ';')
    etext = ("$pt=\'" + key+psecmd +
             "\';$enc = [convert]::ToBase64String([System.Text.encoding]::Unicode.GetBytes($pt));$enc")
    for line in tqdm(etext.splitlines(), desc="Loading ", ncols=100, unit='Line(s)', bar_format='{l_bar}{bar} | {n_fmt}/{total_fmt} {unit}', colour='BLUE'):
        raw = subprocess.run(["powershell.exe", line], capture_output=True)
        eoutcome = raw.stdout.decode("utf-8")
        data = subprocess.run(
            ["powershell.exe", "-encoded", eoutcome], capture_output=True)
        output = data.stdout.decode("utf-8")[6:]
    return(output)

# Test start

from passwords import cname, apikey, apiquery

cname = cname
apikey = apikey
apiquery = apiquery


def test_query():
    query(cname, apikey, apiquery)
    assert ic.status_code == 200
