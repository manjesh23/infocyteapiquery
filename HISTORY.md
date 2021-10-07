# History

## 0.0.1(2021-01-15)

* Frustration and Confusion.

## 0.0.2(2021-01-20)

* Basic code and local test.

## 0.0.6(2021-01-24)

* Finalized module with dependencies | tested locally using wheel.

## 0.1.1(2021-02-18)

* Added all the dependencies | sdist & bdist ready.

## 1.0.1(2021-03-17)

* Integrated with Travis and updated the package to ship.

## 1.0.34(2021-03-18)

* First release on PyPI.

## 1.0.35(2021-03-18)

* Updated README file with export examples to xlsx and db file.
* Second release on PyPI.

## 1.0.36(2021-03-27)

* Added PowerShell data pull capabilities.

## 1.1.1(2021-03-31)

* tqdm module is requested, setup file is updated with version info and removed the setup_requirements.
* Now Query function shows the progress bar.
* Minor bug fixed in ps function (Omitted initial True --> Set-ICInstance (Output = True)).
* Added PowerShell (Encoded function), now it supports pipe and complex syntax.

## 1.1.2(2021-03-31)

* Query function PyTest is setup and ready to use with new keys.
* Pending PyTest for pscmd and psecmd.

## 1.1.6(2021-04-11)

* Converted all the .rst files to .md
* No code changes added to commit.

## 1.1.8(2021-04-12)

* Updated README file with loading bar support.
* Using infocyteapiquery for pytest support (ic global variable defaults).

## 1.1.9(2021-04-15)

* Restored datetime format to pandas default (This was an error while exporting data to excel and .db).

## 1.1.10(2021-04-16)

* Module can now handle error in better way (Detailed error displayed if failed).
* PowerShell bug fix.
* Updated pypi keyword to match more accurate while searching.

## 1.1.11(2021-04-19)
* Encoded PowerShell bug fix.

## 1.1.13(2021-04-20)
* Pytest added for ps function

## 1.1.14(2021-04-20)
* Exposing ps and pse variables for pytest purpose and to see subprocess raw output.

## 1.1.15(2021-04-20)
* Exposed few more ps and pse variables
* Pytest for both ps and pse functions
* Fixed minor bug with pse module

## 1.1.16(2021-10-04)
* Removed Python 3.6 support (Pandas 1.3.3)