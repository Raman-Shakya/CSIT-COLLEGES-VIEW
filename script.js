API_KEY = 'AIzaSyDXzkH6P7VPsi9MuI747nnuqIzzwcCsqJ4'


// Initialize and add the map
function initMap() {
    // The location of Uluru
    const home = { lat: 27.653888, lng: 85.358542 };
    infowindow = new google.maps.InfoWindow();
    console.log(infowindow)
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: home,
      styles: [
        {
            featureType: 'all',
            elementType: 'labels',
            stylers: [{ 
                visibility: 'off' 
             }]
         }
    ]
    });
    const markers = [];
    console.log(colleges)
    for (i in colleges) {
        markers.push(new google.maps.Marker({
            position: {lat: colleges[i][0], lng: colleges[i][1]},
            map: map,
            label: {
                text: i,
                color: "black",
                fontSize: "15px",
                fontWeight: "bold",
            },
        }))
    }
    // The marker, positioned at Uluru
    // const marker = new google.maps.Marker({
    //   position: uluru,
    //   map: map,
    // });
}

window.initMap = initMap;


// function getCoordinates(address){
// fetch("https://maps.googleapis.com/maps/api/geocode/json?address="+address+'&key='+API_KEY)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//     const latitude = data.results.geometry.location.lat;
//     const longitude = data.results.geometry.location.lng;
//     console.log({latitude, longitude})
//     })
// }

// console.log(getCoordinates('St. Xaviers College'))