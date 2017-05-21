Pyramid Webframework with Vuejs & Webpack
==================

Getting Started
---------------
### First clone
`git clone https://github.com/eddyekofo94/pyramidVue.git`

## First create a virtual environment, otherwise by default python instance available will be used.

`python3 -m venv ./env`
    or
`virtualenv -p python3 ./env` (if you have virtualenv installed)

### Development environment setup

These steps will install all required dependencies including development ones, and start dev server.

```bash
# create a virtual environment
make venv
# download all the required requirements for development
make dev
# test your project
make test
# run your project
make run
```

### Deployment
```bash
make build
```

External links
---------------
http://docs.pylonsproject.org/projects/pyramid/en/latest/index.html

https://vuejs.org

https://webpack.js.org
