'use strict';

const oryx = require('@spryker/oryx');
const api = require('./lib');

// deprecated copyAssetsCallback for backward compatibility only
const copyAssetsCallback = require('./lib/copy');

api.getConfiguration(api.settings)
    .then(configuration => oryx.build(configuration, copyAssetsCallback))
    .catch(error => console.error('An error occurred while creating configuration', error));
