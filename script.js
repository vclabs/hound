function gpsLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function(position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        const locationText = `📍 Your Location: Latitude ${lat}, Longitude ${lon}`;
        appendMessage("System", BOT_IMG, "left", locationText);

        // Also log to console for debug
        console.log("Location captured:", locationText);
      },
      function(error) {
        appendMessage("System", BOT_IMG, "left", "⚠️ Please allow location permission to continue.");
        console.error("Geolocation error:", error);
      }
    );
  } else {
    appendMessage("System", BOT_IMG, "left", "❌ Geolocation is not supported by this browser.");
  }
}
