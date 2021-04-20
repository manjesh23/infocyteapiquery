#!/usr/bin/env python

"""Tests for `infocyteapiquery` package (For ps and ps encoded function)."""

import pytest

# Import required modules
from infocyteapiquery import infocyteapiquery as ic
import os
import re
dir(ic)


# Py_test start

pscmd = '''
$psvariable = Get-ICAlert
($psvariable).name
'''


def test_ps():
    cname = os.getenv("cname")
    apikey = os.getenv("apikey")
    pstest = ic.ps(cname, apikey, pscmd)
    bool(pstest)
    #assert re.search('exe|dll', ic.psout)
    #assert bool(ic.psoutput) == False
