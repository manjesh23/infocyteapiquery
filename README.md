# Infocyte API Query

[![made-with-python](https://img.shields.io/badge/Made%20with-Python-1f425f.svg)](https://www.python.org/) [![PyPI version](https://badge.fury.io/py/infocyteapiquery.svg)](https://badge.fury.io/py/infocyteapiquery)  [![PyPI pyversions](https://img.shields.io/pypi/pyversions/infocyteapiquery.svg)] [![PyPI license](https://img.shields.io/pypi/l/infocyteapiquery.svg)](https://pypi.python.org/pypi/infocyteapiquery/)  [![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/manjesh23/infocyteapiquery/graphs/commit-activity)  [![Python package pytest](https://github.com/manjesh23/infocyteapiquery/actions/workflows/main.yml/badge.svg)](https://github.com/manjesh23/infocyteapiquery/actions/workflows/main.yml)




## Description:
#### Python module | Used to get API data from Infocyte Cloud Instances into the pandas DataFrame | Defaults to 90 days


### Required Modules (Installed as prerequisite)


-   requests
-   pandas
-   json
-   subprocess
-   tqdm
-	paginateit

### Installation

    pip install --upgrade infocyteapiquery

### How to use API Query?

#### Takes 3 arguments:

 - cname --> Cloud Instance Name <cname.infocyte.com>
 - apikey --> APIKEY or the API Token
 - apiquery --> API GET Method

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
		Index(['flagId', 'flagColor', 'flagName', 'flagWeight', 'threatScore', 'threatWeight', 'threatName', 'avPositives', 'avTotal', 'hasAvScan', 'synapse', 'dynamicAnalysis', 'malicious', 'suspicious', 'staticAnalysis', 'whitelist', 'blacklist', 'localBlacklist', 'localWhitelist', 'unknown', 'notMalicious', 'targetId', 'size', 'extensionId', 'extensionVersionId', 'id', 'name', 'type', 'hostname', 'itemId', 'hostScanId', 'scanId', 'fileRepId', 'signed', 'managed', 'createdOn', 'archived'
		(dtype='object')

### How to use PowerShell Query?

#### Takes 3 arguments:

 - cname --> Cloud Instance Name <cname.infocyte.com>
 - apikey --> APIKEY or the API Token
 - pscmd --> PowerShell Script Commands

		>>> from infocyteapiquery import infocyteapiquery as ic
		>>> cname = "m...n"
		>>> apikey = "J8ARPa3iQR6...8HGUkElBBXra4mdEq"
		>>> 
		>>>pscmd = '''
		... $psvariable = Get-ICAlert
		... ($psvariable).name
		... '''
		>>> psdata = ic.ps(cname, apikey, pscmd)
		>>>
		>>> print(psdata)
		rdpwrap.dll
		calculator.exe
		rundll32.exe
		...
		...
		cmd.exe
		python.exe
		cmd.exe

### How to use Encoded PowerShell Query?

#### Takes 3 arguments:

 - cname --> Cloud Instance Name <cname.infocyte.com>
 - apikey --> APIKEY or the API Token
 - psecmd --> PowerShell Script Commands Support Pipe and Complex filters

	    >>> from infocyteapiquery import infocyteapiquery as ic
	    >>> cname = "m...n"
	    >>> apikey = "J8ARPa3iQR6...8HGUkElBBXra4mdEq"
	    >>> 
	    >>>psecmd = '$man = Get-ICAlert;($man).name|Sort-Object|Get-Unique'
	    >>> psedata = ic.pse(cname, apikey, psecmd)
	    >>>
	    >>> print(psedata)
	    BitComet_1.74_setup.exe
	    bitcomet_setup_EBTmD-1.exe
	    calc.exe
	    Calculator.exe
	    calculator.exe
	    Calculator.exe
	    ...
	    ...
	    cmd.exe
	    python.exe

### Query and PowerShell Tips & Tricks

Please refer Wiki Section of Github for details. [Wiki here](https://github.com/manjesh23/infocyteapiquery/wiki)

### License

© 2021 Manjesh N

This repository is licensed under the Apache 2.0 license. See LICENSE for details.
