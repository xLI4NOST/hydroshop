'use strict';

/**
 * productsapi controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::productsapi.productsapi');
