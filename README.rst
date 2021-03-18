==================
Infocyte API Query
==================

**Description:**
----------------
**Python module | Used to get API data from Infocyte Cloud Instances into the pandas DataFrame | Defaults to 90 days**


Required Modules
----------------

-   requests
-   pandas
-   json

Installation
------------

``pip install infocyteapiquery``

How to use it?
--------------

**Takes 3 arguments:**

- ``cname --> Cloud Instance Name <cname.infocyte.com>``
- ``apikey --> APIKEY or the API Token``
- ``apiquery --> API GET Method``

    >>> from infocyteapiquery import infocyteapiquery as ic
    >>> cname = "m...n"
    >>> apikey = "J8ARPa3iQR6...8HGUkElBBXra4mdEq"
    >>> apiquery = "AlertDetails"
    >>>
    >>> icdata = ic.query(cname=cname, apikey=apikey, apiquery=apiquery)
    Loading AlertDetails
    >>>
    >>> icdata.shape
    (183, 37)
    >>>
    >>> icdata.columns
    Index(['flagId', 'flagColor', 'flagName', 'flagWeight', 'threatScore', 'threatWeight', 'threatName', 'avPositives', 'avTotal', 'hasAvScan', 'synapse', 'dynamicAnalysis', 'malicious', 'suspicious', 'staticAnalysis', 'whitelist',
    'blacklist', 'localBlacklist', 'localWhitelist', 'unknown', 'notMalicious', 'targetId', 'size', 'extensionId', 'extensionVersionId', 'id', 'name', 'type', 'hostname', 'itemId', 'hostScanId', 'scanId', 'fileRepId', 'signed',
    'managed', 'createdOn', 'archived'],
    (dtype='object')


* Free software: Apache Software License 2.0
* Documentation: https://infocyteapiquery.readthedocs.io.


Features
--------

* TODO

Credits
-------