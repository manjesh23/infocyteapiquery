#!/usr/bin/env python

"""Tests for `infocyteapiquery` package (For ps and ps encoded function)."""

import pytest

# Import required modules
from infocyteapiquery import infocyteapiquery as ic
import os
import re


# Py_test start

def test_ps():
    cname = os.getenv("cname")
    apikey = os.getenv("apikey")
    pscmd = "$psvariable = Get-ICAlert\n($psvariable).name\n"
    pstest = ic.ps(cname, apikey, pscmd)
    print(pstest)
    #assert re.search('exe|dll', pstest)
    assert bool(ic.pstest) == True
