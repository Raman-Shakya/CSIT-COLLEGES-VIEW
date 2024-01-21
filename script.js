// initialize leaflet map
var map = L.map('map', {
    center: [27.6933777,85.3209263],
    zoom: 12.5
});

// add map
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 21,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// 
for (let college of Object.keys(colleges)) {
    L.marker(colleges[college]).addTo(map)
        .bindTooltip(college)
}