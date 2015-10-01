'use strict';
import angular from 'angular';
import csVideosApiService from './cs-videos-api-service.js';

export default angular.module('csVideosApi', [
])
.factory('csVideosApiService', csVideosApiService);