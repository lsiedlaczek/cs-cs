'use strict';
export default function csVideosApiService($q) {
  let afterSave = {
    mock: 'data'
  };

  return {
    save: save,
    get: get
  }

  function save() {
    return $q.resolve(afterSave);
  }

  function get(id) {
    console.log(id);

    return $q.resolve({
      id: id,
      data: 'this is video # ' + id
    })
  }
}

csVideosApiService.$inject = ['$q']