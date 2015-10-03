'use strict';

export default class CsVideosViewPageController {
  constructor(api, video) {
    Object.assign(this, { api, video });
    console.log('view page', video);
    this.starter = 'view page shit';
  }
}

CsVideosViewPageController.$inject = ['csVideosApiService', 'video'];