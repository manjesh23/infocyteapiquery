#!/usr/bin/env python

"""Tests for `infocyteapiquery` package (For ps and ps encoded)."""

import pytest

# Import required modules
from infocyteapiquery import infocyteapiquery as ic
import os
import re


# Py_test start
pscmd = "$psvariable = Get-ICAlert\n($psvariable).name\n"


def test_ps():
    cname = os.getenv("cname")
    apikey = os.getenv("apikey")
    pstest = ic.ps(cname, apikey, pscmd)
    assert re.search('exe|dll', pstest)
