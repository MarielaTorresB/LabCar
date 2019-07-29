const logo=document.getElementById("logo"); //Guarda el logo de hamburguesa como "logo"
const dropdownMenu = document.getElementById("dropdownMenu"); //Guarda el menú desplegable como "dropdownMenu"

//Función showMenu = Al hacer click en el ícono de hamburguesa se muestra y oculta el menú desplegable
const showMenu = () =>{
dropdownMenu.classList.toggle("hidden");
}

//Agrega el addeventListener al logo.Al hacer click en el logo de hamburguesa se ejecuta showMenu
logo.addEventListener("click", showMenu);


//Sección para la geolocalización con la API google Geolocation
var map, infoWindow;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 6
        });
        infoWindow = new google.maps.InfoWindow;

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            infoWindow.open(map);
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }

