'use strict';
import angular from 'angular';
import csVideosApi from '../cs-videos-api/cs-videos-api-module.js';

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
    'ui.router',
    csVideosApi.name
  ])
  .constant('csVideos', {
    path: 'cs-videos/components'
  })
  .config(videosListRoutingConfig)
  .config(videosViewRoutingConfig)
  .config(videosEditRoutingConfig);

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
    url: '/:id',
    templateUrl: csVideos.path + '/cs-videos-view-page/cs-videos-view-page.html',
    controller: 'CsVideosViewPageController as videosCtrl',
    resolve: {
      video: resolveVideo
    }
  });

  function resolveVideo(api, $stateParams) {
    return api.get($stateParams.id);
  }

  resolveVideo.$inject = ['csVideosApiService', '$stateParams'];
}

videosViewRoutingConfig.$inject = ['$stateProvider', 'csVideos'];

/**
 *
 * @param $stateProvider
 */
function videosEditRoutingConfig($stateProvider, csVideos) {
  $stateProvider.state('cs.videos.edit', {
    url: '/edit',
    templateUrl: csVideos.path + '/cs-videos-list-page/cs-videos-list-page.html',
    controller: 'CsVideosListPageController as videosCtrl'
  });
}

videosEditRoutingConfig.$inject = ['$stateProvider', 'csVideos'];