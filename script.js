
function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
}

function handleUpload() {
  // Replace this with modal or file upload functionality later
  alert("Upload prescription feature coming soon!");
}

function toggleLocationDropdown() {
  const dropdown = document.getElementById("location-dropdown");
  dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

function updatePincode(pincode) {
  document.getElementById("selected-pincode").textContent = pincode || "110002";
}

function detectLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        // Use a geocoding API like OpenCage, Nominatim, or Google Maps
        // Example with Nominatim (OpenStreetMap):
        fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`)
          .then(response => response.json())
          .then(data => {
            const pincode = data.address.postcode || "Unknown";
            document.getElementById("selected-pincode").textContent = pincode;
          })
          .catch(error => {
            console.error("Error fetching location data:", error);
            alert("Couldn't fetch pincode from location.");
          });
      },
      function(error) {
        console.error("Geolocation error:", error);
        alert("Permission denied or error getting location.");
      }
    );
  } else {
    alert("Geolocation not supported by your browser.");
  }
}

// Preloader functionality


window.addEventListener('load', function() {
    setTimeout(function() {
        document.querySelector('.preloader').classList.add('hidden');
    }, 1000);
});

