function gpsLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        const html = `
        <pre style="background:#000;color:#0f0;padding:15px;border-radius:8px;font-size:14px;overflow-x:auto">
-------------------------------
User Agent: ${navigator.userAgent}
Platform: ${navigator.platform}
Cookies Enabled: ${navigator.cookieEnabled}
Browser Language: ${navigator.language}
Screen Width: ${screen.width}
Screen Height: ${screen.height}
Local Time: ${new Date().toLocaleTimeString()}
-------------------------------
GPS Lat Long Information
Latitude: ${lat}
Longitude: ${lon}
Map Location: https://www.google.com/maps/place/${lat},${lon}
Google Earth: https://earth.google.com/web/search/${lat},${lon}
-------------------------------
</pre>
        `;

        document.body.insertAdjacentHTML("beforeend", html);
      },
      function () {
        alert("⚠️ Location access denied or unavailable.");
      }
    );
  } else {
    alert("❌ Geolocation is not supported by your browser.");
  }
}

