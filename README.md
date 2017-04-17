# Clovus or Shark Chart

[![Build Status](https://travis-ci.org/GUSCRAWFORD/Clovus.svg?branch=develop)](https://travis-ci.org/GUSCRAWFORD/Clovus) [![Test Coverage](https://codeclimate.com/github/GUSCRAWFORD/Clovus/badges/coverage.svg?branch=develop)](https://codeclimate.com/github/GUSCRAWFORD/Clovus/coverage) [![Code Climate](https://codeclimate.com/github/GUSCRAWFORD/Clovus/badges/gpa.svg?branch=develop)](https://codeclimate.com/github/GUSCRAWFORD/Clovus)


A diagram engine

## Process Control
A project encapsulating the controller for a chart
- `process-control` Independent TypeScript class library implementing Chart control
- `process-control-models` Independent TypeScript class library defining Chart models
- `process-control-rest` an ExpressJs rest api handler

## SharkChart / ClovusUi
The angular UI project interfacing with the chart data, and managing the presentation layer
- `clovus-ui` Main angular bundle
- `shark-chart` ExpressJs front-end bootstrapping `clovus-ui`

# Develop
1. `npm run build-dev` Run the webpack watch cycle
2. `npm run test-watch` Development test config without coverage instrumentation

# Build
1. `npm run build`

# Test
1. `npm run test` CI Test config with coverage

# Docs
1. `npm run build-docs`
