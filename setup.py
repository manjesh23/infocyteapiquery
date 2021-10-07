#!/usr/bin/env python

"""The setup script."""

from setuptools import setup

with open('README.md') as readme_file:
    readme = readme_file.read()

with open('HISTORY.md') as history_file:
    history = history_file.read()

requirements = ["requests", "pandas", "tqdm", "paginateit"]

# setup_requirements = ['pytest-runner', ]

test_requirements = ['pytest>=3', ]

setup(
    author="Manjesh N",
    author_email='manjesh_n@hotmail.com',
    name='infocyteapiquery',
    python_requires='>=3.7',
    package_dir={'': '.'},
    classifiers=[
        'Development Status :: 5 - Production/Stable',
        'Intended Audience :: Developers',
        'Intended Audience :: End Users/Desktop',
        'Intended Audience :: Information Technology',
        'Intended Audience :: Customer Service',
        'License :: OSI Approved :: Apache Software License',
        'Natural Language :: English',
        'Programming Language :: Python :: 3.7',
        'Programming Language :: Python :: 3.8',
        'Programming Language :: Python :: 3.9',
    ],
    description="Used to get API data from Infocyte Cloud Instances into the pandas DataFrame",
    install_requires=requirements,
    license="Apache Software License 2.0",
    long_description=readme,
    long_description_content_type='text/markdown',
    include_package_data=True,
    keywords=['infocyteapiquery', 'infocyte'],
    packages=["infocyteapiquery"],
    # setup_requires=setup_requirements,
    test_suite='tests',
    tests_require=test_requirements,
    url='https://github.com/manjesh23/infocyteapiquery',
    version='1.1.16',
    zip_safe=False,
)
