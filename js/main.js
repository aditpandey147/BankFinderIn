document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const navLinks = document.getElementById("navLinks");

  mobileMenuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Sample bank data (in a real app, you would fetch this from an API)
  const banks = [
    {
      name: "State Bank of India",
      branch: "Main Branch",
      address: "123 Main Street, Mumbai",
      ifsc: "SBIN0001234",
      phone: "022-12345678",
      hours: {
        mon_fri: "9:00 AM - 4:00 PM",
        sat: "9:00 AM - 1:00 PM",
        sun: "Closed",
      },
      coordinates: [19.076, 72.8777], // Mumbai
      services: ["ATM", "Loans", "Deposit"],
    },
    {
      name: "HDFC Bank",
      branch: "Andheri Branch",
      address: "456 Andheri Road, Mumbai",
      ifsc: "HDFC0005678",
      phone: "022-87654321",
      hours: {
        mon_fri: "8:30 AM - 5:30 PM",
        sat: "8:30 AM - 2:00 PM",
        sun: "Closed",
      },
      coordinates: [19.1197, 72.8468], // Andheri
      services: ["ATM", "Credit Cards", "Net Banking"],
    },
    {
      name: "ICICI Bank",
      branch: "Borivali Branch",
      address: "789 Borivali Street, Mumbai",
      ifsc: "ICIC0009012",
      phone: "022-23456789",
      hours: {
        mon_fri: "9:30 AM - 4:30 PM",
        sat: "9:30 AM - 1:30 PM",
        sun: "Closed",
      },
      coordinates: [19.2307, 72.8567], // Borivali
      services: ["ATM", "Mobile Banking", "Investments"],
    },
    {
      name: "Axis Bank",
      branch: "Thane Branch",
      address: "321 Thane Road, Thane",
      ifsc: "AXIS0003456",
      phone: "022-34567890",
      hours: {
        mon_fri: "8:00 AM - 6:00 PM",
        sat: "8:00 AM - 3:00 PM",
        sun: "10:00 AM - 2:00 PM",
      },
      coordinates: [19.2183, 72.9781], // Thane
      services: ["ATM", "Forex", "Insurance"],
    },
    {
      name: "Bank of Baroda",
      branch: "Pune Branch",
      address: "654 Pune Street, Pune",
      ifsc: "BARB0007890",
      phone: "020-45678901",
      hours: {
        mon_fri: "10:00 AM - 5:00 PM",
        sat: "10:00 AM - 1:00 PM",
        sun: "Closed",
      },
      coordinates: [18.5204, 73.8567], // Pune
      services: ["ATM", "Personal Loans", "Fixed Deposits"],
    },
  ];

  let map;
  let userPosition = null;
  let markers = [];

  // Initialize the map
  function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 19.076, lng: 72.8777 }, // Default to Mumbai
      zoom: 12,
      styles: [
        {
          featureType: "poi.business",
          stylers: [{ visibility: "on" }],
        },
      ],
    });
  }

  // Place bank markers on the map
  function placeBankMarkers(banksToShow) {
    // Clear existing markers
    markers.forEach((marker) => marker.setMap(null));
    markers = [];

    // Add new markers
    banksToShow.forEach((bank) => {
      const marker = new google.maps.Marker({
        position: { lat: bank.coordinates[0], lng: bank.coordinates[1] },
        map: map,
        title: bank.name + " - " + bank.branch,
        icon: {
          url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png",
        },
      });

      // Add info window
      const infoWindow = new google.maps.InfoWindow({
        content: `<div>
                            <h3>${bank.name}</h3>
                            <p><strong>Branch:</strong> ${bank.branch}</p>
                            <p><strong>Address:</strong> ${bank.address}</p>
                            <p><strong>IFSC:</strong> ${bank.ifsc}</p>
                        </div>`,
      });

      marker.addListener("click", () => {
        infoWindow.open(map, marker);
      });

      markers.push(marker);
    });

    // Center map to show all markers if we have multiple
    if (banksToShow.length > 0) {
      const bounds = new google.maps.LatLngBounds();
      banksToShow.forEach((bank) => {
        bounds.extend(
          new google.maps.LatLng(bank.coordinates[0], bank.coordinates[1])
        );
      });
      map.fitBounds(bounds);
    }
  }

  // Display bank cards in the results
  function displayBankCards(banksToShow) {
    const resultsContainer = document.getElementById("resultsContainer");

    if (banksToShow.length === 0) {
      resultsContainer.innerHTML = `
                        <div class="no-results">
                            <p>No banks found matching your search. Try a different location or search term.</p>
                        </div>
                    `;
      return;
    }

    let html = "";

    banksToShow.forEach((bank) => {
      const isOpen = checkIfBankIsOpen(bank.hours);

      html += `
                        <div class="bank-card">
                            <h3>${bank.name}</h3>
                            <div class="bank-info">
                                <p><strong>Branch:</strong> ${bank.branch}</p>
                                <p><strong>Address:</strong> ${bank.address}</p>
                                <p><strong>IFSC Code:</strong> ${bank.ifsc}</p>
                                <p><strong>Phone:</strong> ${bank.phone}</p>
                                <p><strong>Status:</strong> <span class="${
                                  isOpen ? "status-open" : "status-closed"
                                }">${
        isOpen ? "OPEN NOW" : "CLOSED NOW"
      }</span></p>
                                ${
                                  userPosition
                                    ? `<span class="distance">${calculateDistance(
                                        userPosition.lat,
                                        userPosition.lng,
                                        bank.coordinates[0],
                                        bank.coordinates[1]
                                      )} km away</span>`
                                    : ""
                                }
                            </div>
                            <div class="working-hours">
                                <h4>Working Hours</h4>
                                <p><strong>Mon-Fri:</strong> ${
                                  bank.hours.mon_fri
                                }</p>
                                <p><strong>Saturday:</strong> ${
                                  bank.hours.sat
                                }</p>
                                <p><strong>Sunday:</strong> ${
                                  bank.hours.sun
                                }</p>
                            </div>
                        </div>
                    `;
    });

    resultsContainer.innerHTML = html;
  }

  // Check if bank is currently open
  function checkIfBankIsOpen(hours) {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const day = now.getDay(); // 0 = Sunday, 1 = Monday, etc.

    let hoursString;

    if (day === 0) {
      hoursString = hours.sun;
    } else if (day === 6) {
      hoursString = hours.sat;
    } else {
      hoursString = hours.mon_fri;
    }

    if (hoursString === "Closed") return false;

    // Extract hours
    const [openStr, closeStr] = hoursString.split(" - ");
    const [openHour, openMinute] = parseTime(openStr);
    const [closeHour, closeMinute] = parseTime(closeStr);

    // Check if current time is within open hours
    if (currentHour > openHour && currentHour < closeHour) {
      return true;
    } else if (currentHour === openHour && currentMinute >= openMinute) {
      return true;
    } else if (currentHour === closeHour && currentMinute <= closeMinute) {
      return true;
    }

    return false;
  }

  // Helper function to parse time strings
  function parseTime(timeStr) {
    const [time, period] = timeStr.split(" ");
    let [hour, minute] = time.split(":").map(Number);

    if (period === "PM" && hour !== 12) {
      hour += 12;
    } else if (period === "AM" && hour === 12) {
      hour = 0;
    }

    return [hour, minute || 0];
  }

  // Calculate distance between two coordinates in km
  function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Earth's radius in km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance.toFixed(1);
  }

  function deg2rad(deg) {
    return deg * (Math.PI / 180);
  }

  // Get user location
  function getUserLocation() {
    document.getElementById("loader").style.display = "block";

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          userPosition = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          // Move map to user location
          map.setCenter(
            new google.maps.LatLng(userPosition.lat, userPosition.lng)
          );
          map.setZoom(14);

          // Add user marker
          const userMarker = new google.maps.Marker({
            position: userPosition,
            map: map,
            title: "Your Location",
            icon: {
              url: "https://maps.google.com/mapfiles/ms/icons/green-dot.png",
            },
          });
          markers.push(userMarker);

          // Find nearby banks
          findNearbyBanks();
        },
        (error) => {
          console.error("Error getting location:", error);
          document.getElementById("loader").style.display = "none";
          alert("Could not get your location. Using default location instead.");
          findNearbyBanks();
        }
      );
    } else {
      alert(
        "Geolocation is not supported by this browser. Using default location instead."
      );
      findNearbyBanks();
    }
  }

  // Find banks near user
  function findNearbyBanks() {
    // In a real app, you would fetch banks based on user location from an API
    // Here we're using our sample data
    if (userPosition) {
      // Sort banks by distance
      banks.sort((a, b) => {
        const distanceA = calculateDistance(
          userPosition.lat,
          userPosition.lng,
          a.coordinates[0],
          a.coordinates[1]
        );
        const distanceB = calculateDistance(
          userPosition.lat,
          userPosition.lng,
          b.coordinates[0],
          b.coordinates[1]
        );
        return distanceA - distanceB;
      });
    }

    placeBankMarkers(banks);
    displayBankCards(banks);
    document.getElementById("loader").style.display = "none";
  }

  // Search banks by name or IFSC
  function searchBanks(query) {
    query = query.toLowerCase().trim();
    if (!query) {
      displayBankCards(banks);
      placeBankMarkers(banks);
      return;
    }

    const results = banks.filter(
      (bank) =>
        bank.name.toLowerCase().includes(query) ||
        bank.ifsc.toLowerCase().includes(query)
    );

    displayBankCards(results);
    placeBankMarkers(results);
  }

  // Event listeners
  document
    .getElementById("locateBtn")
    .addEventListener("click", getUserLocation);
  document.getElementById("searchBtn").addEventListener("click", () => {
    const query = document.getElementById("searchInput").value;
    searchBanks(query);
  });

  document.getElementById("searchInput").addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      const query = document.getElementById("searchInput").value;
      searchBanks(query);
    }
  });

  // Load Google Maps
  window.initMap = initMap;
});

// Load Google Maps API
function loadGoogleMaps() {
  const script = document.createElement("script");
  script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyD2gGZgYVDfqYHRf4Z_pzC9Xk2dQxP3Dk8&callback=initMap`;
  script.defer = true;
  script.async = true;
  document.head.appendChild(script);
}

loadGoogleMaps();
