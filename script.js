// GPS location function
function gpsLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        // Log to console
        console.log("User Location:", lat, lon);

        // Optional: inject message in the form or below note
        const note = document.createElement("div");
        note.style.marginTop = "20px";
        note.style.padding = "10px";
        note.style.backgroundColor = "#d4edda";
        note.style.color = "#155724";
        note.style.borderLeft = "4px solid #28a745";
        note.textContent = `📍 Location Captured: Latitude ${lat}, Longitude ${lon}`;

        document.querySelector(".note").after(note);

        // Optional: send to server
        // fetch('/log-location', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify({ lat, lon })
        // });

      },
      function (error) {
        alert("⚠️ Please allow location permission to proceed.");
      }
    );
  } else {
    alert("❌ Geolocation not supported by your browser.");
  }
}
