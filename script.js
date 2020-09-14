var cities = [
    { name: 'London', coordinates: [51.50, -0.12], content: 'The capital of Great Britain' },
    { name: 'Glazgo', coordinates: [55.855078, -4.25236], content: 'Another UK city with Metro' },
    { name: 'Stockholm', coordinates: [59.325000, 18.070897], content: 'The capital of Sweden' },
    { name: 'Saint Petersburg', coordinates: [59.939095, 30.315868], content: 'The cultural capital of Russia' },
    { name: 'Moscow', coordinates: [55.753215, 37.622504], content: 'The capital of Russian Empire' },
    { name: 'Kiev', coordinates: [50.450441, 30.523550], content: 'The capital of Ukraine' },
    { name: 'Minsk', coordinates: [53.902512, 27.561481], content: 'The capital of Belarus' },
    { name: 'Varshava', coordinates: [52.232090, 21.007139], content: 'The capital of Poland' },
    { name: 'Prague', coordinates: [50.080293, 14.428983], content: 'The capital of Czech Republic' },
    { name: 'Berlin', coordinates: [52.31, 13.24], content: 'The capital of Germany' }
];

ymaps.ready(init);

function init(){
    let myMap = new ymaps.Map("map", {
        center: [55.76, 37.64],
        zoom: 4
    });

    let previousCity = cities[cities.length - 1];
    cities.forEach(city => {
        const currentGeoObject = new ymaps.Placemark(city.coordinates, { hintContent: city.name, balloonContent: city.content });

        const newLine = new ymaps.GeoObject({
            geometry: {
                type: "LineString",
                coordinates: [previousCity.coordinates, city.coordinates]
            },
            properties: {
                hintContent: previousCity.name + ' - ' + city.name
            }
        }, { strokeWidth: 5, strokeColor: "#F008" });

        myMap.geoObjects.add(currentGeoObject);
        myMap.geoObjects.add(newLine);

        previousCity = city;
    });
}