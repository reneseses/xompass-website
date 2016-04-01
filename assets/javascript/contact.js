if (typeof google != 'undefined') {
    var mapStyle = [{
        "featureType": "landscape",
        "stylers": [{"saturation": -100}, {"lightness": 65}, {"visibility": "on"}]
    }, {
        "featureType": "poi",
        "stylers": [{"saturation": -100}, {"lightness": 51}, {"visibility": "simplified"}]
    }, {
        "featureType": "road.highway",
        "stylers": [{"saturation": -100}, {"visibility": "simplified"}]
    }, {
        "featureType": "road.arterial",
        "stylers": [{"saturation": -100}, {"lightness": 30}, {"visibility": "on"}]
    }, {
        "featureType": "road.local",
        "stylers": [{"saturation": -100}, {"lightness": 40}, {"visibility": "on"}]
    }, {
        "featureType": "transit",
        "stylers": [{"saturation": -100}, {"visibility": "simplified"}]
    }, {"featureType": "administrative.province", "stylers": [{"visibility": "off"}]}, {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [{"visibility": "on"}, {"lightness": -25}, {"saturation": -100}]
    }, {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [{"hue": "#ffff00"}, {"lightness": -25}, {"saturation": -97}]
    }];

    var map_latlng = new google.maps.LatLng(-33.0348835, -71.5950651);
    var map_options = {
        zoom: 2,
        center: map_latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        panControl: false,
        zoomControl: true,
        scaleControl: false,
        mapTypeControl: false,
        disableDefaultUI: true,
        scrollwheel: false,
        styles: mapStyle
    };

    var map_latlng2 = new google.maps.LatLng(37.44808400000001, -122.162533);
    var map_options2 = {
        zoom: 2,
        center: map_latlng2,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        panControl: false,
        zoomControl: true,
        scaleControl: false,
        mapTypeControl: false,
        disableDefaultUI: true,
        scrollwheel: false,
        styles: mapStyle
    };

    var markerIconDefault_image = new google.maps.MarkerImage("/assets/images/marker.png",
        // This marker is 44 pixels wide by 56 pixels tall.
        new google.maps.Size(44, 56),
        // The origin for this image is 0,0.
        new google.maps.Point(0, 0),
        // The anchor for this image is the base of the flagpole at 0,32.
        new google.maps.Point(22, 56));

    var markerIconDefault_shadow = new google.maps.MarkerImage("/assets/images/marker_shadow.png",
        // This marker is 44 pixels wide by 56 pixels tall.
        new google.maps.Size(37, 21),
        // The origin for this image is 0,0.
        new google.maps.Point(0, 0),
        // The anchor for this image is the base of the flagpole at 0,32.
        new google.maps.Point(20, 10));

    var markerIconDefault_shape = {
        coord: [1, 1, 1, 52, 42, 52, 42, 1],
        type: 'poly'
    };

}

function initializeMap1(el, options) {
    if (typeof google == 'undefined')
        return false;

    var map = new google.maps.Map(document.getElementById(el), options);
    var marker = new google.maps.Marker({
        position: map_latlng,
        shadow: markerIconDefault_shadow,
        icon: markerIconDefault_image,
        map: map
    });

}

function initializeMap2(el, options) {
    if (typeof google == 'undefined')
        return false;

    var map2 = new google.maps.Map(document.getElementById(el), options);
    var marker2 = new google.maps.Marker({
        position: map_latlng2,
        shadow: markerIconDefault_shadow,
        icon: markerIconDefault_image,
        map: map2
    });
}

$(function () {
    // Contact Page Google Maps
    if ($('#contact_gmap').size() > 0 && typeof google != 'undefined') {
        map_options.zoom = 12;
        map_options2.zoom = 11;
        initializeMap1('contact_gmap', map_options);
        initializeMap2('contact_gmap2', map_options2);
    }

});