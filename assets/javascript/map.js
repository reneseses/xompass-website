var map;
        var stylesArray = [
        {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [
                {
                    "hue": "#F1FF00"
                },
                {
                    "saturation": -27.4
                },
                {
                    "lightness": 9.4
                },
                {
                    "gamma": 1
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [
                {
                    "hue": "#0099FF"
                },
                {
                    "saturation": -20
                },
                {
                    "lightness": 36.4
                },
                {
                    "gamma": 1
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "all",
            "stylers": [
                {
                    "hue": "#00FF4F"
                },
                {
                    "saturation": 0
                },
                {
                    "lightness": 0
                },
                {
                    "gamma": 1
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "all",
            "stylers": [
                {
                    "hue": "#FFB300"
                },
                {
                    "saturation": -38
                },
                {
                    "lightness": 11.2
                },
                {
                    "gamma": 1
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
                {
                    "hue": "#00B6FF"
                },
                {
                    "saturation": 4.2
                },
                {
                    "lightness": -63.4
                },
                {
                    "gamma": 1
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [
                {
                    "hue": "#9FFF00"
                },
                {
                    "saturation": 0
                },
                {
                    "lightness": 0
                },
                {
                    "gamma": 1
                }
            ]
        }
    ]                         
    function initMap() {
        var image = 'assets/images/marker.png';
        var mapOptions = {
            zoom: 15,
            center: new google.maps.LatLng(37.7227516, -122.1629992),
            styles: stylesArray,
            disableDefaultUI: true,
            zoomControl: false,
            mapTypeControl: false,
            scaleControl: false,
            streetViewControl: false,
            rotateControl: false,
            scrollwheel: false,
        };
        
        map = new google.maps.Map(document.getElementById('map'), mapOptions);
        var marker = new google.maps.Marker({
            position: {lat: 37.7227516, lng: -122.1629992},
            map: map,
            icon: image
          });
    }