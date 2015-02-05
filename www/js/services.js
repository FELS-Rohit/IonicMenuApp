angular.module('starter.services', [])
    .factory('Stalls', function() {
        var stalls = [{
                id: 0,
                name: 'BMW',
                sub: 'German Car Manufacturer',
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
                logo: 'img/1.png',
                ImageLogo:'img/BMW.jpg',
            }, {
                id: 1,
                name: 'Toyota',
                sub: 'Japanese Car Manufacturer',
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
                logo: 'img/2.png',
                ImageLogo: 'img/Toyota.jpg',
            }, {
                id: 2,
                name: 'VW',
                sub: 'German Car Manufacturer',
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
                logo: 'img/3.png',
                ImageLogo: 'img/VW.jpg',
            }, {
                id: 3,
                name: 'Ford',
                sub: 'American Car Manufacturer',
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
                logo: 'img/4.png',
                ImageLogo: 'img/Ford.jpg',
            }];
        return {
            all: function() {
                return stalls;
            },
            get: function(stallId) {
                //simple index lookup
                return stalls[stallId];
            }
        };
    });