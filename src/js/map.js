ymaps.ready(init);
var myMap;

function init(){
    myMap = new ymaps.Map ("map", {
        center: [55.731172, 37.685525],
        zoom: 17,
        controls: []
    });

    myMap.controls.remove('searchControl').remove('trafficControl').remove('geolocationControl');

      myMap.behaviors.disable(['drag', 'scrollZoom']);
    
    myMap.geoObjects
        .add(new ymaps.Placemark([55.731172, 37.685525], {
            balloonContent: '',
            iconCaption: ' Москва, Михайловский проезд д. 3с 80 '
        },{
            preset: 'islands#greenDotIconWithCaption'
        }));

}