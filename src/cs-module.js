'use strict';
import angular from 'angular';
import csRouting from './components/cs-routing/cs-routing-module.js';
import csVideos from './cs-videos/cs-videos-module.js';

export default angular.module('cs', [
  csVideos.name,
  csRouting.name,
]);