'use strict';
import angular from 'angular';

/**
 * @ngdoc overview
 * @name csRouting
 * @description
 * # csRouting
 *
 * Submodule for the csApp.
 */
export default angular
  .module('csVideosRouting', [
    'ui.router'
  ])
  .constant('csVideos', {
    path: 'cs-videos/components'
  })
  .config(videosListRoutingConfig)
  .config(videosViewRoutingConfig);

/**
 *
 * @param $stateProvider
 */
function videosListRoutingConfig($stateProvider, csVideos) {
  $stateProvider.state('cs.videos.list', {
    url: '',
    templateUrl: csVideos.path + '/cs-videos-list-page/cs-videos-list-page.html',
    controller: 'CsVideosListPageController as videosCtrl',
    // we can do resolve in routing, then we get this as additional injection to controller
    // you got to remember to use import on modules you use here
    /*
    resolve: {
      videos: [() => console.log('here we go')]
    }*/
  });
}

videosListRoutingConfig.$inject = ['$stateProvider', 'csVideos'];

/**
 *
 * @param $stateProvider
 */
function videosViewRoutingConfig($stateProvider, csVideos) {
  $stateProvider.state('cs.videos.view', {
    url: '/view',
    templateUrl: csVideos.path + '/cs-videos-view-page/cs-videos-view-page.html',
    controller: 'CsVideosViewPageController as videosCtrl'
  });
}

videosViewRoutingConfig.$inject = ['$stateProvider', 'csVideos'];