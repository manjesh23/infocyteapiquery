#!/usr/bin/env python

"""Tests for `infocyteapiquery` package (For ps and ps encoded function)."""

import pytest

# Import required modules
from infocyteapiquery import infocyteapiquery as ic
import os


# Py_test start
# pscmd variable set same as README example
pscmd = '''
$psvariable = Get-ICAlert
($psvariable).name
'''
# psecmd variable set same as README example
psecmd = '$man = Get-ICAlert;($man).name|Sort-Object|Get-Unique'


'''
Below function is to test of the ic.ps and ic.pse function works as expected and returns 'True' while testing pytest for windows powershell
'''


def test_ps():
    cname = os.getenv("cname")
    apikey = os.getenv("apikey")
    ic.ps(cname, apikey, pscmd)
    assert True


def test_pse():
    cname = os.getenv("cname")
    apikey = os.getenv("apikey")
    ic.pse(cname, apikey, psecmd)
    assert True
