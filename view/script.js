const searchList = document.getElementById('college-list');
const searchBar = document.getElementById('college-search-bar');

colleges = {
    ...colleges,
    ...correctedColleges
}

let selected = '';
let currentDOM = {};
let markerMap = {};

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

// put pointers
function putPointers(allPointers) {
    markerMap = {};

    for (let pointer of allPointers) {
        const latlng = [pointer.lat, pointer.lng];

        // Only create a custom icon for the selected marker
        const marker = L.marker(latlng)
            .addTo(map)
            .bindTooltip(pointer.name, { permanent: false, direction: 'right' });

        markerMap[pointer.name] = marker;
    }
}



// short forms
function shortForm(name) {
    return name.split(' ').map(a => a[0]===a[0].toUpperCase() ? a[0] : '').join('');
}

// fill search list
function fillSearchList() {
    searchList.innerHTML = '';
    const coordinateLists = [];

    for (let college in colleges) {
        coordinateLists.push({
            name: college,
            lng: colleges[college].lng,
            lat: colleges[college].lat,
        })
        const currentButton = document.createElement('button');
        // event listeners
        currentButton.addEventListener('click', (e) => {
            markerMap[college].openTooltip();
            if (selected) {
                markerMap[selected].closeTooltip();
            }
            map.setView([colleges[college].lat, colleges[college].lng], 15);
            selected = college;
        });
        currentButton.addEventListener('mouseover', (e) => {
            markerMap[college].openTooltip();
        });
        currentButton.addEventListener('mouseleave', (e) => {
            if (selected !== college) 
                markerMap[college].closeTooltip();
        });

        currentButton.innerHTML = college;

        currentDOM[college] = currentButton;
        searchList.appendChild(currentButton);
    }
    currentPointers = coordinateLists;

    // console.log(coordinateLists);
    putPointers(coordinateLists);
}

function filterSearchList(substr = '') {
    for (let college in currentDOM) {
        if (substr.length > 0) {
            if (!college.toLowerCase().includes(substr.toLowerCase())
                && !shortForm(college).toLowerCase().includes(substr.toLowerCase())
            ) {
                currentDOM[college].style.display = 'none';
                continue;
            }
        }
        currentDOM[college].style.display = 'block';
    }
}

fillSearchList();
searchBar.addEventListener('input', (e) => {
    filterSearchList(searchBar.value)
})