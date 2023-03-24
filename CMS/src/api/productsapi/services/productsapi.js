'use strict';

/**
 * productsapi service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::productsapi.productsapi');
