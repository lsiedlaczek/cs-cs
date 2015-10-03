'use strict';
import angular from 'angular';

// we declare it as an constant because it will be reused
const videosUrl = '/videos';

/**
 * @ngdoc overview
 * @name csRouting
 * @description
 * # csRouting
 *
 * Submodule for the csApp.
 */
export default angular
  .module('csRouting', [
    'ui.router'
  ])
  .config(baseRoutingConfig)
  .config(videosRoutingConfig)
  .config(otherwiseRoutingConfig);

/**
 * Base routing for core structure
 *
 * @param {Object} $stateProvider
 */
function baseRoutingConfig($stateProvider) {
  $stateProvider.state('cs', {
    url: '',
    template: '<div ui-view></div>',
    abstract: true
  });
}

baseRoutingConfig.$inject = ['$stateProvider'];

function videosRoutingConfig($stateProvider) {
  $stateProvider.state('cs.videos', {
    url: videosUrl,
    template: '<div ui-view></div>',
    abstract: true
  });
}

videosRoutingConfig.$inject = ['$stateProvider'];

function otherwiseRoutingConfig($stateProvider, $urlRouterProvider) {
/*  $stateProvider.state('otherwise', {
    url: videosUrl,
    template: '<div ui-view></div>',
    abstract: true
  });
  $urlRouterProvider.otherwise(videosUrl);*/
}

otherwiseRoutingConfig.$inject = ['$stateProvider', '$urlRouterProvider'];