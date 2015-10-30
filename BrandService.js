/**
 * Brand Service
 */
angular.module('app').service('BrandService', function($http) {
  /**
   * Get a brand by id
   * @param {String} id
   * @return {Promise}
   */
  function getBrand(id) {
    return $http.get('/brand/' + id).then(function(response) {
      return response.data.brand || null;
    }, function(response) {
      return {};
    });
  }

  /**
   * Get a list of brands matching a title
   * @param {String} title
   * @return {Promise}
   */
  function findByTitle(title) {
    var filter = $.param({
      title: title
    });

    return $http.get('/brand/?' + filter).then(function(response) {
      return response.data.list || [];
    });
  }

/**
   * Get a list of all the brands
   * @return {Promise}
   */
  function findAll() {
    
    return $http.get('/brands').then(function(response) {
      return response.data.list;
    });
  }

  return {
    getBrand: getBrand,
    findByTitle: findByTitle,
    findAll: findAll
  };
});