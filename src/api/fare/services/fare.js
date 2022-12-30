'use strict';

/**
 * fare service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::fare.fare');
