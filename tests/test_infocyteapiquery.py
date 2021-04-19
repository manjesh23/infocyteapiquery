#!/usr/bin/env python

"""Tests for `infocyteapiquery` package (Only for ic.query function)."""

import pytest

# Import required modules
from infocyteapiquery import infocyteapiquery as ic
import os
from paginateit import paginateit as pg

# Py_test start

apiquery = "AlertDetails"


def test_query():
    cname = os.getenv("cname")
    apikey = os.getenv("apikey")
    ic.query(cname, apikey, apiquery)
    assert ic.icd.status_code == 200
