function initMap() {
  var mapOptions = {
    center: {lat: 41.8781, lng: -87.6298},
    zoom: 10,
  };
  var map = new google.maps.Map(document.getElementById("map-container"), mapOptions);
}
window.onload = initMap;
