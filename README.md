# Infocyte API Query

[![made-with-python](https://img.shields.io/badge/Made%20with-Python-1f425f.svg)](https://www.python.org/)
[![PyPI version](https://badge.fury.io/py/infocyteapiquery.svg)](https://badge.fury.io/py/infocyteapiquery)
[![PyPI pyversions](https://img.shields.io/pypi/pyversions/infocyteapiquery.svg)](https://pypi.org/project/infocyteapiquery/)
[![PyPI license](https://img.shields.io/pypi/l/infocyteapiquery.svg)](https://pypi.python.org/pypi/infocyteapiquery/)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/manjesh23/infocyteapiquery/graphs/commit-activity)
[![Python package pytest](https://github.com/manjesh23/infocyteapiquery/actions/workflows/pytest.yml/badge.svg)](https://github.com/manjesh23/infocyteapiquery/actions/workflows/pytest.yml)
[![Python package pytest on Windows](https://github.com/manjesh23/infocyteapiquery/actions/workflows/pytest_win.yml/badge.svg)](https://github.com/manjesh23/infocyteapiquery/actions/workflows/pytest_win.yml)
[![CodeQL](https://github.com/manjesh23/infocyteapiquery/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/manjesh23/infocyteapiquery/actions/workflows/codeql-analysis.yml)



## Description:
#### Python module | Used to get API data from Infocyte Cloud Instances into the pandas DataFrame | Defaults to 90 days


### Required Modules (Installed as prerequisite)


-   requests (Addition)
-   pandas (Addition)
-	paginateit (Addition)
-   tqdm (Addition)
-   json
-   subprocess
- 	re

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
		>>> apiquery = "ModuleDetails"
		>>>
		>>> icdata = ic.query(cname, apikey, apiquery)
		Loading ModuleDetails:  100%|█████████████████████████████████████████████████████████████ | 9/9 Loop(s)
		>>>
		>>> icdata.shape
		(9183, 37)
		>>>
		>>> icdata.columns
		Index(['size', 'signatureType', 'serialNumber', 'subjectName', 'issuerName', 'timestampIssuer', 'timestampSubject', 'id', 'fileRepId', 'staticAnalysis', 'dynamicAnalysis', 'localBlacklist', 'localWhitelist', 'blacklist', 'whitelist',
       'malicious', 'notMalicious', 'suspicious', 'unknown', 'threatScore', 'threatName', 'threatWeight', 'compromised', 'failed', 'hasAvScan', 'avPositives', 'avTotal', 'synapse', 'flagId', 'flagName', 'flagColor', 'flagWeight',
       'name', 'path', 'managed', 'signed', 'md5', 'sha1', 'sha256', 'ssdeep'],
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
		Loading : 100%|███████████████████████████████████████████████████████████████████████ | 1/1 Line(s)
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
		Loading : 100%|███████████████████████████████████████████████████████████████████████ | 1/1 Line(s)
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

### Note: PowerShell output is extracted in string format (Refer PowerShell "ConvertTo" feature for more details)

### Query and PowerShell Tips & Tricks

Please refer Wiki Section of Github for details. [Wiki here](https://github.com/manjesh23/infocyteapiquery/wiki)

### License

© 2021 Manjesh N

This repository is licensed under the Apache 2.0 license. See LICENSE for more details.
