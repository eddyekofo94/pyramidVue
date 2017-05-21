Pyramid Webframework with Vuejs & Webpack
==================

## Features

1. [Pyramid Webframework](http://docs.pylonsproject.org/projects/pyramid/en/latest/index.html)
2. [Vue2](https://github.com/vuejs/vue)
3. [Node.js](https://github.com/nodejs/node)
4. [Webpack2](https://github.com/webpack/webpack)
5. [Babel](https://github.com/babel/babel.git)
6. [Yarn](https://github.com/yarnpkg/yarn)[packet manager]

Getting Started
---------------
### First clone
`git clone https://github.com/eddyekofo94/pyramidVue.git`

## First create a virtual environment, otherwise by default python instance available will be used.

make venv
    or
`virtualenv -p python3 ./env` (if you have virtualenv installed)

### Development environment setup

These steps will install all required dependencies, then run the server.

```bash

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
