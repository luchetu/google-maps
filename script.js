function initialize() {
    var map = new google.maps.Map(document.getElementById("map"), {
        center: {lat: pathCoords[0].lat, lng: pathCoords[0].lng},
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    autoRefresh(map);
}
function moveMarker(map, marker, latlng) {
    marker.setPosition(latlng);
    map.panTo(latlng);
}
function autoRefresh(map) {
    var i, route, marker;

    route = new google.maps.Polyline({
        path: [],
        geodesic : true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2,
        editable: false,
        map:map,
    });
    marker=new google.maps.Marker({map:map,icon:"https://images.sendyit.com/web_platform/vendor_type/top/2.svg"});
    for (i = 0; i < pathCoords.length; i++) {
        setTimeout(function (coords)
        {
            var latlng = new google.maps.LatLng(coords.lat, coords.lng);
            route.getPath().push(latlng);
            moveMarker(map, marker, latlng);
        }, 5000 * i, pathCoords[i]);
    }
}
google.maps.event.addDomListener(window, 'load', initialize);
var pathCoords = [
    {
        "lat": -1.300355,
        "lng": 36.773850
    },
    {
        "lat":  -1.300184,
        "lng":  36.776811
    },
    {
        "lat":  -1.299840,
        "lng": 36.779386
    },
    {
        "lat": -1.298897,
        "lng": 36.779407
    },
    {
        "lat": -1.299004,
        "lng": 36.777841
    },
    {
        "lat": -1.298982,
        "lng":36.776811
    },
    {
        "lat":  -1.297459,
        "lng": 36.776747
    },
    {
        "lat": -1.296193,
        "lng":36.776726
    },
    {
        "lat": -1.296097,
        "lng": 36.779236
    },
    {
        "lat": -1.296151,
        "lng": 36.777637
    },
    {
        "lat": -1.296215,
        "lng":36.776693
    },
    {
        "lat":-1.294252,
        "lng":36.776586
    },
    {
        "lat": -1.294048,
        "lng": 36.776790
    },
    {
        "lat":-1.293973,
        "lng": 36.779118
    },
    {
        "lat": -1.292622,
        "lng": 36.779075
    },
    {
        "lat": -1.291844,
        "lng": 36.779049
    },
    {
        "lat":-1.291879,
        "lng":36.778389
    }
];