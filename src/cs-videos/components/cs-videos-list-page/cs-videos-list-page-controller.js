'use strict';

export default class CsVideosListPageController {

  constructor(api, service) {
    Object.assign(this, { api, service });
    this.starter = 'someblabla';
    console.log('bu');
  }

  save() {
    this.api.save().then(
      (result) => this.action(result),
      (error) => console.log(error)
    )
  }

  action(sth) {
    this.service.helperAction(sth);
  }
}

CsVideosListPageController.$inject = ['csVideosApiService', 'csVideosListPageService'];