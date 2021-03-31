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
    global icpd
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
    global output, doutput
    key = "Set-ICToken -Instance " + cname + " -Token " + apikey
    raw = subprocess.Popen(
        ["powershell.exe", key + pscmd], stdout=subprocess.PIPE)
    doutput = raw.stdout.read()
    stdout, stderr = raw.communicate()
    output = doutput.decode("utf-8")
    return output[6:]


# EOF
