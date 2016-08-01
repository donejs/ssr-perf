# ssr perf

This project is used for testing perf if done-ssr in order to find ways to improve rendering speed.

## Run

First do a build:

```shell
npm install
donejs build
```

Then start the server:

```shell
NODE_ENV=production donejs start
```

And in an other terminal do loading testing (this uses [siege](https://www.joedog.org/siege-home/):

```shell
siege -c50 -d10 -t3M http://localhost:8080/
```