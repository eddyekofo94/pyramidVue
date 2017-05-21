Pyramid Webframework with Vue & Webpack
==================

Getting Started
---------------
### First clone
`git clone https://github.com/eddyekofo94/pyramidVue.git`

## First create a virtual environment, otherwise by default python instance available will be used.

`python3 -m venv env`
    or
`virtualenv -p python3 env` (if you have virtualenv installed)

### Development environment setup

These steps will install all required dependencies including development ones, and start dev server.

```bash
make venv # create a virtual environment
make dev # download all the required dependencies
make run # run your project
```

### Deployment
```bash
make build
```
