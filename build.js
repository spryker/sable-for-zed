'use strict';

const oryx = require('@spryker/oryx');
const api = require('./lib');

api.getConfiguration(api.settings)
    .then(configuration => oryx.build(configuration))
    .catch(error => console.error('An error occurred while creating configuration', error));
