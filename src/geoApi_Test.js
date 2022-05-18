
// probando la obtencion de la posicion actual

function testGetCurrentPosition() {
    navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        // Show a map centered at latitude / longitude.
        var marker = L.marker([latitude, longitude]).addTo(map);
        map.setView([latitude,longitude],13);
    });    
}

// probando la obtencion de la posicion actual

const watchId = navigator.geolocation.watchPosition(position => {
    const { latitude, longitude } = position.coords;

    var marker = L.marker([latitude, longitude]).addTo(map);
    map.setView([latitude,longitude],13);
  });


// prueba del boton para detener el watch

function buttonClickHandler() {
    // Cancel the updates when the user clicks a button.
    console.log("se ha detenido el watch");
    navigator.geolocation.clearWatch(watchId);
}

document.getElementById("boton_stop").addEventListener("click",buttonClickHandler);





// prueba de manejo de errores

// Request repeated updates.
const watchId = navigator.geolocation.watchPosition(
    scrollMap, handleError
  );
  
  function scrollMap(position) {
    const { latitude, longitude } = position.coords;
    // Scroll map to latitude / longitude.
  }
  
  function handleError(error) {
    // Display error based on the error code.
    const { code } = error;
    switch (code) {
      case GeolocationPositionError.TIMEOUT:
        // Handle timeout.
        break;
      case GeolocationPositionError.PERMISSION_DENIED:
        // User denied the request.
        break;
      case GeolocationPositionError.POSITION_UNAVAILABLE:
        // Position not available.
        break;
    }
  }

// por defecto, la API siempre intenta retornar la posicion que esta en cache siempre que la haya adquirido previamente,
// en el siguiente ejemplo aceptamos un puesto cuya antigüedad no sea mayor a 10 minutos.
  navigator.geolocation.getCurrentPosition(
    successCallback,
    console.error,
    { maximumAge: 600_000 }
  );
  
  function successCallback(position) {
    // By using the 'maximumAge' member above, the position
    // object is guaranteed to be at most 10 minutes old.
  }

// Si necesita información de ubicación de manera sensible al tiempo, 
// puedes usar el tiempo de espera(timeout) de PositionOptions para limitar 
// la cantidad de tiempo que está dispuesto a esperar para adquirir una posición.


// solicita una posicion. We are only willing to wait 10
// seconds for it.
navigator.geolocation.getCurrentPosition(
  successCallback,
  errorCallback,
  { timeout: 10_000 }
);

function successCallback(position) {
  // Request finished in under 10 seconds...
}

function errorCallback(error) {
  switch (error.code) {
    case GeolocationPositionError.TIMEOUT:
      // We didn't get it in a timely fashion.
      doFallback();
      // Acquire a new position object,
      // as long as it takes.
      navigator.geolocation.getCurrentPosition(
        successCallback, errorCallback
      );
      break;
    case "...": // treat the other error cases.
  }
}

function doFallback() {}