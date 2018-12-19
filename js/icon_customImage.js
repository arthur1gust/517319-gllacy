ymaps.ready(init);

var placemarks = [
    {
        latitude: 59.940000,
        longitude: 30.322149,
        
    }
],
    geoObjects= [];

function init() {
    var map = new ymaps.Map('map', {
        center: [59.938870, 30.329463],
        zoom: 16,
        controls: ['zoomControl'],
        behaviors: ['drag']
    });

    for (var i = 0; i < placemarks.length; i++) {
            geoObjects[i] = new ymaps.Placemark([placemarks[i].latitude, placemarks[i].longitude],
            {
                
            },
            {
                iconLayout: 'default#image',
                iconImageHref: './img/pin.png',
                iconImageSize: [194, 141],
                iconImageOffset: [0, 0]
            });
    }

    var clusterer = new ymaps.Clusterer({
        clusterIcons: [
            {
                href: './img/L.png',
                size: [100, 100],
                offset: [0, 0]
            }
        ],
        clusterIconContentLayout: null
    });

    map.geoObjects.add(clusterer);
    clusterer.add(geoObjects);
}
