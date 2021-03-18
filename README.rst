==================
Infocyte API Query
==================

**Description:**
----------------
**Python module | Used to get API data from Infocyte Cloud Instances into the pandas DataFrame | Defaults to 90 days**


Required Modules (Installed as prerequisite)
--------------------------------------------

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



Features
--------

For ``apiquery``, create a list as below.

``apiquery = ['AlertDetails','ArtifactDetails','ModuleDetails','ProcessDetails']``

Above list can be iterated to export the date into excel file.

``with pd.ExcelWriter(cname + '.infocyte.xlsx') as writer:``
    ``alertpd.to_excel(writer, sheet_name='Alerts')``
    ``artifactpd.to_excel(writer, sheet_name='Artifacts')``
    ``processpd.to_excel(writer, sheet_name='Process')``
    ``modulepd.to_excel(writer, sheet_name='Module')``

License
-------

© 2021 Manjesh N

This repository is licensed under the Apache 2.0 license. See LICENSE for details.