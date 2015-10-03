'use strict';
import angular from 'angular';
import csVideosApi from '../cs-videos-api/cs-videos-api-module.js';
import CsVideosViewPageController from './cs-videos-view-page-controller.js';

export default angular.module('csVideosViewPage', [
  csVideosApi.name
])
.controller('CsVideosViewPageController', CsVideosViewPageController);