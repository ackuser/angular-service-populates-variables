angular.module('appMock', ['ngMockE2E'])

.run(function($httpBackend, $injector) {
  /**
   * @url GET /brand/:id
   */
  $httpBackend.whenGET('/brand/1').respond(function() {
    return [200, {
      brand: {
        name: 'The Awesome Brand',
        title: 'Just another awesome brand!'
      }
    }];
  });

  $httpBackend.whenGET(/^\/brand\/\?title=.+/).respond(function() {
    return [200, {
      list: [{
        "name": "square",
        "title": "Square"
      }, {
        "name": "stripe",
        "title": "Stripe"
      }, {
        "name": "paypal",
        "title": "PayPal"
      }, {
        "name": "apple_pay",
        "title": "Apple Pay"
      }, {
        "name": "google_wallet",
        "title": "Google Wallet"
      }, {
        "name": "braintree",
        "title": "Braintree"
      }, {
        "name": "android_pay",
        "title": "Android Pay"
      }, {
        "name": "samsung_pay",
        "title": "Samsung Pay"
      }, {
        "name": "amazon_payments",
        "title": "Amazon Payments"
      }, {
        "name": "world_pay",
        "title": "World Pay"
      }, {
        "name": "authorize_net",
        "title": "Authorize Net"
      }, {
        "name": "venmo",
        "title": "Venmo"
      }, {
        "name": "xoom",
        "title": "Xoom"
      }, {
        "name": "paydiant",
        "title": "Paydiant"
      }]
    }];
  });

  /**
   * @url GET /brands/:id
   */
  $httpBackend.whenGET(/^\/brands/).respond(function() {
    return [200, {
      list: [{
        "name": "square",
        "title": "Square"
      }, {
        "name": "stripe",
        "title": "Stripe"
      }, {
        "name": "paypal",
        "title": "PayPal"
      }, {
        "name": "apple_pay",
        "title": "Apple Pay"
      }, {
        "name": "google_wallet",
        "title": "Google Wallet"
      }, {
        "name": "braintree",
        "title": "Braintree"
      }, {
        "name": "android_pay",
        "title": "Android Pay"
      }, {
        "name": "samsung_pay",
        "title": "Samsung Pay"
      }, {
        "name": "amazon_payments",
        "title": "Amazon Payments"
      }, {
        "name": "world_pay",
        "title": "World Pay"
      }, {
        "name": "authorize_net",
        "title": "Authorize Net"
      }, {
        "name": "venmo",
        "title": "Venmo"
      }, {
        "name": "xoom",
        "title": "Xoom"
      }, {
        "name": "paydiant",
        "title": "Paydiant"
      }]
    }];
  });


});