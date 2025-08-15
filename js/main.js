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
      name: "Canara Bank",
      branch: "Barrackpore",
      address: "Ward No.12, H.o, I Floor, 181(93, 4, Old Calcutta Rd, Barrackpore, West Bengal 700122",
      ifsc: "CNRB0003716",
      phone: "+913325453581",
      hours: { mon_fri: "10:00 AM - 4:00 PM", sat: "10:00 AM - 4:00 PM", sun: "Closed" },
      coordinates: [22.757706, 88.374283],
      services: ["ATM", "Loans", "Deposit"],
    },
    {
      name: "Bank of India",
      branch: "Adamas institute of technology campus",
      address: "Adamas institute of technology premises village barasat barrackpore road pin 700126",
      ifsc: "BKID0004156",
      phone: "+919836352749",
      hours: { mon_fri: "10:00 AM - 4:00 PM", sat: "10:00 AM - 4:00 PM", sun: "Closed" },
      coordinates: [22.738811214101485, 88.45752060414155],
      services: ["ATM", "Loans", "Deposit"],
    },
    // ... rest of your banks
  ];

  let map;
  let userPosition = null;
  let markers = [];

  function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 19.076, lng: 72.8777 },
      zoom: 12,
    });
  }

  function placeBankMarkers(banksToShow) {
    markers.forEach((marker) => marker.setMap(null));
    markers = [];

    banksToShow.forEach((bank) => {
      const marker = new google.maps.Marker({
        position: { lat: bank.coordinates[0], lng: bank.coordinates[1] },
        map: map,
        title: `${bank.name} - ${bank.branch}`,
        icon: { url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png" },
      });

      const infoWindow = new google.maps.InfoWindow({
        content: `<div>
                    <h3>${bank.name}</h3>
                    <p><strong>Branch:</strong> ${bank.branch}</p>
                    <p><strong>Address:</strong> ${bank.address}</p>
                    <p><strong>IFSC:</strong> ${bank.ifsc}</p>
                  </div>`,
      });

      marker.addListener("click", () => infoWindow.open(map, marker));
      markers.push(marker);
    });

    if (banksToShow.length > 0) {
      const bounds = new google.maps.LatLngBounds();
      banksToShow.forEach((bank) => bounds.extend(new google.maps.LatLng(bank.coordinates[0], bank.coordinates[1])));
      map.fitBounds(bounds);
    }
  }

  function displayBankCards(banksToShow) {
    const resultsContainer = document.getElementById("resultsContainer");

    if (banksToShow.length === 0) {
      resultsContainer.innerHTML = `<div class="no-results"><p>No banks found within 5 km.</p></div>`;
      return;
    }

    let html = "";
    banksToShow.forEach((bank) => {
      const isOpen = checkIfBankIsOpen(bank.hours);
      html += `<div class="bank-card">
                <h3>${bank.name}</h3>
                <p><strong>Branch:</strong> ${bank.branch}</p>
                <p><strong>Address:</strong> ${bank.address}</p>
                <p><strong>IFSC Code:</strong> ${bank.ifsc}</p>
                <p><strong>Phone:</strong> ${bank.phone}</p>
                <p><strong>Status:</strong> <span class="${isOpen ? "status-open" : "status-closed"}">${isOpen ? "OPEN NOW" : "CLOSED NOW"}</span></p>
                ${userPosition ? `<span class="distance">${calculateDistance(userPosition.lat, userPosition.lng, bank.coordinates[0], bank.coordinates[1])} km away</span>` : ""}
               </div>`;
    });

    resultsContainer.innerHTML = html;
  }

  function checkIfBankIsOpen(hours) {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const day = now.getDay();
    let hoursString;

    if (day === 0) hoursString = hours.sun;
    else if (day === 6) hoursString = hours.sat;
    else hoursString = hours.mon_fri;

    if (hoursString === "Closed") return false;

    const [openStr, closeStr] = hoursString.split(" - ");
    const [openHour, openMinute] = parseTime(openStr);
    const [closeHour, closeMinute] = parseTime(closeStr);

    if (currentHour > openHour && currentHour < closeHour) return true;
    if (currentHour === openHour && currentMinute >= openMinute) return true;
    if (currentHour === closeHour && currentMinute <= closeMinute) return true;
    return false;
  }

  function parseTime(timeStr) {
    const [time, period] = timeStr.split(" ");
    let [hour, minute] = time.split(":").map(Number);
    if (period === "PM" && hour !== 12) hour += 12;
    else if (period === "AM" && hour === 12) hour = 0;
    return [hour, minute || 0];
  }

  function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    return (R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))).toFixed(1);
  }

  function deg2rad(deg) {
    return deg * (Math.PI / 180);
  }

  function getUserLocation() {
    document.getElementById("loader").style.display = "block";
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          userPosition = { lat: position.coords.latitude, lng: position.coords.longitude };
          map.setCenter(new google.maps.LatLng(userPosition.lat, userPosition.lng));
          map.setZoom(14);

          const userMarker = new google.maps.Marker({
            position: userPosition,
            map: map,
            title: "Your Location",
            icon: { url: "https://maps.google.com/mapfiles/ms/icons/green-dot.png" },
          });
          markers.push(userMarker);

          findNearbyBanks();
        },
        (error) => {
          alert("Could not get your location. Using default location.");
          document.getElementById("loader").style.display = "none";
        }
      );
    } else {
      alert("Geolocation not supported.");
      document.getElementById("loader").style.display = "none";
    }
  }

  function findNearbyBanks() {
    let banksToShow = banks;
    if (userPosition) {
      banksToShow = banks.filter((bank) => {
        const distance = parseFloat(calculateDistance(userPosition.lat, userPosition.lng, bank.coordinates[0], bank.coordinates[1]));
        return distance <= 5; // only within 5 km
      }).sort((a, b) => {
        return calculateDistance(userPosition.lat, userPosition.lng, a.coordinates[0], a.coordinates[1]) -
               calculateDistance(userPosition.lat, userPosition.lng, b.coordinates[0], b.coordinates[1]);
      });
    }

    placeBankMarkers(banksToShow);
    displayBankCards(banksToShow);
    document.getElementById("loader").style.display = "none";
  }

  function searchBanks(query) {
    query = query.toLowerCase().trim();
    if (!query) {
      displayBankCards(banks);
      placeBankMarkers(banks);
      return;
    }
    const results = banks.filter((bank) => bank.name.toLowerCase().includes(query) || bank.ifsc.toLowerCase().includes(query));
    displayBankCards(results);
    placeBankMarkers(results);
  }

  document.getElementById("locateBtn").addEventListener("click", getUserLocation);
  document.getElementById("searchBtn").addEventListener("click", () => {
    searchBanks(document.getElementById("searchInput").value);
  });
  document.getElementById("searchInput").addEventListener("keyup", (e) => {
    if (e.key === "Enter") searchBanks(e.target.value);
  });

  window.initMap = initMap;
});

function loadGoogleMaps() {
  const script = document.createElement("script");
  script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
  script.defer = true;
  script.async = true;
  document.head.appendChild(script);
}
loadGoogleMaps();
