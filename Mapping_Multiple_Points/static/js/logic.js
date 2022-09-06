// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
// let map = L.map('mapid').setView([40.7, -94.5], 4);

let map = L.map("mapid", {
    center: [
      40.7, -94.5
    ],
    zoom: 4,
  });

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// let marker = L.marker([34.0522, -118.2437]).addTo(map);

/* L.circle([34.0522, -118.2437], {
  radius: 100
}).addTo(map);
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map); */

/* L.circleMarker([34.0522, -118.2437], {
  radius: 300,
  color: "black",
  fillColor: "#ffffa1"
}).addTo(map);
 */

// L.marker([34.0522, -118.2437]).addTo(map);

/* {
  location: [40.7128, -74.0059],
  city: "New York City",
  state: "NY",
  population: 8398748
} */

let cityData = cities;

cityData.forEach(ct => {
    L.circleMarker(ct.location, {
        radius: ct.population/100000,
        color: "black",
        fillColor: "#ffffa1"
    })
    .bindPopup("<h2>" + ct.city + ", " + ct.state + "</h2> <hr> <h3>Population " + ct.population.toLocaleString() + "</h3>")
    .addTo(map)
})
streets.addTo(map);


