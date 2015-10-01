'use strict';
export default function csVideosApiService($q) {
  let mockData = {
    mock: 'data'
  };

  return {
    save: save
  }

  function save() {
    return $q.resolve(mockData);
  }
}

csVideosApiService.$inject = ['$q']