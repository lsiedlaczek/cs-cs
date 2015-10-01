'use strict';
import angular from 'angular';
import csVideosApi from '../cs-videos-api/cs-videos-api-module.js';
import CsVideosListPageController from './cs-videos-list-page-controller.js';
import CsVideosListPageService from './cs-videos-list-page-service.js';

export default angular.module('csVideosListPage', [
  csVideosApi.name
])
.service('csVideosListPageService', CsVideosListPageService)
.controller('CsVideosListPageController', CsVideosListPageController);