#!/usr/bin/env python

"""Tests for `infocyteapiquery` package."""

import pytest

# Import required modules
from infocyteapiquery import infocyteapiquery as ic
import os
from paginateit import paginateit as pg

# Py_test start

apiquery = "AlertDetails"
pscmd = "$psvariable = Get-ICAlert\n($psvariable).name\n"


def test_query():
    cname = os.getenv("cname")
    apikey = os.getenv("apikey")
    ic.query(cname, apikey, apiquery)
    assert ic.icd.status_code == 200


def test_ps():
    cname = os.getenv("cname")
    apikey = os.getenv("apikey")
    pstest = ic.ps(cname, apikey, pscmd)
    assert re.search('exe|dll', pstest)
