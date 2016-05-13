var headerSize = 65;

$(document).ready(function(){

  handler = Gmaps.build('Google');
  handler.buildMap({
      provider: {
        disableDefaultUI: true
        // pass in other Google Maps API options here
      },
      internal: {
        id: 'map'
      }
    },
    function(){
      markers = handler.addMarkers([
        {
          "lat": 37.7749,
          "lng": -122.4194,
          "picture": {
            "url": "http://people.mozilla.com/~faaborg/files/shiretoko/firefoxIcon/firefox-32.png",
            "width":  32,
            "height": 32
          },
          "infowindow": "hello!"
        }
      ]);
      handler.bounds.extendWith(markers);
      handler.fitMapToBounds();
    }
  );


  // sets Google Map height on load
  $("#map").css("height", $( window ).height() - headerSize);

});

// resets Google Map height on change of screen size
$(window).resize(function(){
  $("#map").css("height", $( window ).height() - headerSize);
});