#Make sure you're working on a virtual environmant


venv:
	python3 -m venv ./env

# Initializes virtual environment with basic requirements.
prod:
	source ./env/bin/activate; \
	pip install -r requirements.txt
	pserve production.ini
	npm install --production

# Installs development requirements.
dev:
	source ./env/bin/activate; \
	pip3 install -r requirements.txt; \
	pip3 install --upgrade pip setuptools; \
	npm install
	python3 setup.py develop; \

# Runs development server.
# This step depends on `make dev`, however dependency is excluded to speed up dev server startup.
run:
	source ./env/bin/activate; \
	npm run dev & gunicorn --paste development.ini --reload


# Builds files for distribution which will be placed in /static/dist
build:
	npm run build

# Cleans up folder by removing virtual environment, node modules and generated files.
clean:
	rm -rf node_modules
	rm -rf pyramidVue/static/dist

# Run linter
# lint:
# 	@npm run lint --silent
