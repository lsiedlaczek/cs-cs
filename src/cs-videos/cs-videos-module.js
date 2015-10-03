'use strict';
import angular from 'angular';
import csVideosRouting from './components/cs-videos-routing/cs-videos-routing-module.js';
import csVideosApi from './components/cs-videos-api/cs-videos-api-module.js';
import csVideosListPage from './components/cs-videos-list-page/cs-videos-list-page-module.js';
import csVideosViewPage from './components/cs-videos-view-page/cs-videos-view-page-module.js';

export default angular.module('csVideos', [
  csVideosRouting.name,
  csVideosApi.name,
  csVideosListPage.name,
  csVideosViewPage.name
]);