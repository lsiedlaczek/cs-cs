'use strict';

export default class CsVideosListPageService {

  constructor() {
    Object.assign(this, {});
  }

  helperAction(sth) {
    console.log('service', sth);
  }
}

CsVideosListPageService.$inject = ['csVideosApiService'];