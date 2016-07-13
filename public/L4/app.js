(function () {
    var app = angular.module('gemStore', []);

    app.controller('StoreController', function () {
        this.products = gems;
    });

    app.directive("productTabs", function () {
        return {
            restrict: 'E',
            templateUrl: 'product-tabs.html',
            controller: function () {
                this.tab = 1;

                this.isSet = function (checkTab) {
                    return this.tab === checkTab;
                };

                this.setTab = function (setTab) {
                    this.tab = setTab;
                };
            },
            controllerAs: 'tab'
        };
    });


    app.directive("productGallery", function () {
        return {
            restrict: 'E',
            templateUrl: 'product-gallery.html',
            controller: function () {
                this.current = 0;
                this.setCurrent = function (imageNumber) {
                    this.current = imageNumber || 0;
                };
            },
            controllerAs: 'gallery'
        };
    });

    app.controller("ReviewController", function () {

        this.review = {};

        this.addReview = function (product) {
            product.reviews.push(this.review);
            this.review = {};
        };

    });

    app.directive('productDescription', function () {
        return {
            restrict: 'E',//E for element
            templateUrl: 'product-description.html'//Url for the template
        };
    });

    app.directive("productSpecs", function () {
        return {
            restrict: 'A',
            templateUrl: 'product-specs.html'
        };
    });

    app.directive("productReviews", function () {
        return {
            restrict: 'E',
            templateUrl: 'product-reviews.html'
        }
    });

    var gems = [{
        name: 'Azurite',
        description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
        shine: 8,
        price: 110.50,
        rarity: 7,
        color: '#CCC',
        faces: 14,
        images: [
          "images/1.jpg",
          "images/2.jpg",
          "images/3.jpg"
        ],
        reviews: [{
            stars: 5,
            body: "I love this gem!",
            author: "joe@example.org"
        }, {
            stars: 1,
            body: "This gem sucks.",
            author: "tim@example.org"
        }]
    }, {
        name: 'Bloodstone',
        description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
        shine: 9,
        price: 22.90,
        rarity: 6,
        color: '#EEE',
        faces: 12,
        images: [
          "images/4.jpg",
          "images/5.jpg",
          "images/6.jpg"
        ],
        reviews: [{
            stars: 3,
            body: "I think this gem was just OK, could honestly use more shine, IMO.",
            author: "JimmyDean@example.org"
        }, {
            stars: 4,
            body: "Any gem with 12 faces is for me!",
            author: "gemsRock@example.org"
        }]
    }, {
        name: 'Zircon',
        description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
        shine: 70,
        price: 1100,
        rarity: 2,
        color: '#000',
        faces: 6,
        images: [
          "images/7.jpg",
          "images/8.jpg",
          "images/1.jpg"
        ],
        reviews: [{
            stars: 1,
            body: "This gem is WAY too expensive for its rarity value.",
            author: "turtleguyy@example.org"
        }, {
            stars: 1,
            body: "BBW: High Shine != High Quality.",
            author: "LouisW407@example.org"
        }, {
            stars: 1,
            body: "Don't waste your rubles!",
            author: "nat@example.org"
        }]
    }];

})();