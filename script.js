
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
    alert("Detecting your location...");
    // Geolocation API can be added later
  }