#!/usr/bin/env python

"""Tests for `infocyteapiquery` package."""

import pytest

# Import required modules
from infocyteapiquery import infocyteapiquery as ic
import os
from dotenv import load_dotenv, find_dotenv
from paginateit import paginateit as pg

# Py_test start

#load_dotenv(find_dotenv())

#cname = os.environ.get("CNAME")
#apikey = os.environ.get("APIKEY")
apiquery = "AlertDetails"


def test_query():
    #load_dotenv(find_dotenv("manjesh.env"))
    #cname = os.getenv("cname")
    #apikey = os.getenv("apikey")
    ic.query(cname, apikey, apiquery)
    assert ic.icd.status_code == 200
