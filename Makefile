clean:
	rm -rf dist coverage

build: clean
	yarn tsc

prepublish: clean build

lint:
	yarn tslint --project tsconfig.json 'src/**/*.ts' --fix
	yarn prettier --write './src/**/*.ts' --loglevel=error

test:
	yarn jest --verbose

coverage:
	yarn jest --coverage

.PHONY: test coverage
.SILENT: build
