---
icon: note
date: 2023-11-26

tag:
    - python
    - conda
---

# mamba - faster solver for conda

`mamba` is a CLI tool for managing environments. Compared to conda's management of packages and environments, mamba enables parallel operations, and rewrites some of the components of conda in C++, which improves the running efficiency significantly, allows parallel downloads, and uses libsolv in the management tool to solve environment dependency problems faster.

<!--more-->

## Installation (fresh)

Refer to this [guide](https://mamba.readthedocs.io/en/latest/installation/mamba-installation.html).
