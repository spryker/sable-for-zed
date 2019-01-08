'use strict';

const oryx = require('@spryker/oryx');
const api = require('./lib');
const configurationPromise = api.getConfiguration(api.settings);

configurationPromise
    .then(configuration => oryx.build(configuration))
    .catch(error => console.error('An error occurred while creating configuration', error));
