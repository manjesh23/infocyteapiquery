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
-   subprocess

Installation
------------

``pip install --upgrade infocyteapiquery``

How to use API Query?
--------------

**Takes 3 arguments:**

- ``cname --> Cloud Instance Name <cname.infocyte.com>``
- ``apikey --> APIKEY or the API Token``
- ``apiquery --> API GET Method``

.. code-block:: Python

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

How to use PowerShell Query?

**Takes 3 arguments:**

- ``cname --> Cloud Instance Name <cname.infocyte.com>``
- ``apikey --> APIKEY or the API Token``
- ``pscmd --> PowerShell Script Commands``

.. code-block:: Python

    >>> from infocyteapiquery import infocyteapiquery as ic
    >>> cname = "m...n"
    >>> apikey = "J8ARPa3iQR6...8HGUkElBBXra4mdEq"
    >>> ps1cmd = '''
    ... $man = Get-ICAlert
    ... ($man).name
    ... '''
    >>> psfull = ic.ps(cname, apikey, pscmd)
    >>> print(psfull)
    rdpwrap.dll
    calculator.exe
    rundll32.exe
    ...
    ...
    cmd.exe
    python.exe
    cmd.exe
'''

Features
--------

For ``apiquery``, create a list as below.

``apiquery = ['AlertDetails','ArtifactDetails','ModuleDetails','ProcessDetails']``

Loop:

.. code-block:: Python

    >>> for i in apiquery:
         icdata = ic.query(cname=cname, apikey=apikey, apiquery=i)
         print(icdata.head())
         # Export to .xlsx or .db file

Export date into excel file.

.. code-block:: Python

    with pd.ExcelWriter(cname + '.infocyte.xlsx') as writer:
        icdata.to_excel(writer, sheet_name='Alerts')

Export data into sqlite file.

.. code-block:: Python

    from sqlalchemy import create_engine
    alerttab = "Alerts"
    engine = create_engine('sqlite:///'+cname+'.infocyte.db', echo=False)
    sqlite_connection = engine.connect()
    icdata.to_sql(alerttab, sqlite_connection, if_exists='fail')
    sqlite_connection.close()

License
-------

See LICENSE file for more details.

© 2021 Manjesh N

This repository is licensed under the Apache 2.0 license. See LICENSE for details.