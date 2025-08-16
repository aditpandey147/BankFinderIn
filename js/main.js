// Mobile menu toggle
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const navLinks = document.getElementById("navLinks");

mobileMenuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Sample bank data
const banks = [
  //barrackpore
  {
    name: "Canara Bank",
    branch: "Barrackpore",
    address:
      "Ward No.12, H.o, I Floor, 181(93, 4, Old Calcutta Rd, Barrackpore, West Bengal 700122",
    ifsc: "CNRB0003716",
    phone: "+913325453581",
    hours: {
      mon_fri: "10:00 AM - 4:00 PM",
      sat: "10:00 AM - 4:00 PM",
      sun: "Closed",
    },
    coordinates: [22.757706, 88.374283],
    services: ["ATM", "Loans", "Deposit"],
  },
  {
    name: "Canara Bank",
    branch: "Barrackpore II",
    address:
      "195, Barrackpore - Barasat Rd, P.O-N.C Pukur, Kolkata, Barrackpore, West Bengal 700122",
    ifsc: "CNRB0019774",
    phone: "18001030",
    hours: {
      mon_fri: "10:00 AM - 4:00 PM",
      sat: "10:00 AM - 4:00 PM",
      sun: "Closed",
    },
    coordinates: [22.766889912846608, 88.37226064056725],
    services: ["ATM", "Loans", "Deposit"],
  },
  {
    name: "Bank of India",
    branch: "Barrackpore",
    address:
      "199 Barasat Road Po Nona Chandanpurkurbarrackpore Dist North 24 Parganas",
    ifsc: "BKID0004378",
    phone: "25922470",
    hours: {
      mon_fri: "10:00 AM - 4:00 PM",
      sat: "10:00 AM - 4:00 PM",
      sun: "Closed",
    },
    coordinates: [22.76680927506247, 88.37111299215096],
    services: ["ATM", "Loans", "Deposit"],
  },
  {
    name: "Bank of India",
    branch: "Adamas institute of technology campus",
    address:
      "Adamas institute of technology premises village barasat barrackpore road pin 700126",
    ifsc: "BKID0004156",
    phone: "+919836352749",
    hours: {
      mon_fri: "10:00 AM - 4:00 PM",
      sat: "10:00 AM - 4:00 PM",
      sun: "Closed",
    },
    coordinates: [22.738811214101485, 88.45752060414155],
    services: ["ATM", "Loans", "Deposit"],
  },
  {
    name: "State bank of india",
    branch: "Barackpore railway station",
    address: "B.T.Rd, Chiriamore, Barrackpore, 24.Parganasnorth, W.Bengal",
    ifsc: "SBIN0003071",
    phone: "1800112211",
    hours: {
      mon_fri: "10:00 AM - 4:00 PM",
      sat: "10:00 AM - 4:00 PM",
      sun: "Closed",
    },
    coordinates: [22.76153277558813, 88.36713887764535],
    services: ["ATM", "Loans", "Deposit"],
  },
  {
    name: "State bank of india",
    branch: "New Barrackpore",
    address:
      "Station, Main Rd E, P O, Chandra Pally, New Barrakpur, West Bengal 700131",
    ifsc: "SBIN0006809",
    phone: "18001234",
    hours: {
      mon_fri: "10:00 AM - 4:00 PM",
      sat: "10:00 AM - 4:00 PM",
      sun: "Closed",
    },
    coordinates: [22.687809357758592, 88.45201706351202],
    services: ["ATM", "Loans", "Deposit"],
  },

  {
    name: "State bank of india",
    branch: "Colony More, Barasat",
    address:
      "Colony More Barasat 15 Sarojinipally Barrackpore Road Helabattala Nabapally, Barasat, West Bengal 700126",
    ifsc: "SBIN0010090",
    phone: "18001234",
    hours: {
      mon_fri: "10:00 AM - 4:00 PM",
      sat: "10:00 AM - 4:00 PM",
      sun: "Closed",
    },
    coordinates: [22.724917594505058, 88.47852667694336],
    services: ["ATM", "Loans", "Deposit"],
  },

  {
    name: "State bank of india",
    branch: "Nona Chandanpukur",
    address:
      "91, Barasat Road, 24 Paraganas, North, Nona Chandanpukur, P.O, West Bengal 700122",
    ifsc: "SBIN0014530",
    phone: "18001234",
    hours: {
      mon_fri: "10:00 AM - 4:00 PM",
      sat: "10:00 AM - 4:00 PM",
      sun: "Closed",
    },
    coordinates: [22.768101733405814, 88.37695346492615],
    services: ["ATM", "Loans", "Deposit"],
  },
  {
    name: "State bank of india",
    branch: "Talpukur",
    address:
      "7, K N Mukherjee Road Talpukur Barrackpore North 24 Parganas 24 Paraganas, West Bengal 700123",
    ifsc: "SBIN0016769",
    phone: "18001234",
    hours: {
      mon_fri: "10:00 AM - 4:00 PM",
      sat: "10:00 AM - 4:00 PM",
      sun: "Closed",
    },
    coordinates: [22.751799887725188, 88.37350274907085],
    services: ["ATM", "Loans", "Deposit"],
  },
  {
    name: "State bank of india",
    branch: "Lalkuthi",
    address:
      "67a, Ghoshpara Road, Lalkuthi Barrachpore, North 24 Paraganas 24 Paraganas, West Bengal 700120",
    ifsc: "SBIN0017371",
    phone: "18001234",
    hours: {
      mon_fri: "10:00 AM - 4:00 PM",
      sat: "10:00 AM - 4:00 PM",
      sun: "Closed",
    },
    coordinates: [22.77439592601768, 88.36996922913656],
    services: ["ATM", "Loans", "Deposit"],
  },
  {
    name: "State bank of india",
    branch: "Barrackpore Army Cantonment",
    address:
      "Bldg No T-6-1 To T-6-4 Shopping Complex, Barrackpore Cantonment, kolkata, West Bengal-700120",
    ifsc: "SBIN0061644",
    phone: "+919674058999",
    hours: {
      mon_fri: "10:00 AM - 4:00 PM",
      sat: "10:00 AM - 4:00 PM",
      sun: "Closed",
    },
    coordinates: [22.764224586478033, 88.35897729360077],
    services: ["ATM", "Loans", "Deposit"],
  },
  {
    name: "Axis Bank",
    branch: "Barrackpore",
    address:
      "Disha Eye Hospital & Research Centre 99/1, S.n. Banerjee Road, Barrackpore, West Bengal 700120",
    ifsc: "UTIB0000436",
    phone: "18605005555",
    hours: {
      mon_fri: "12:00 AM - 12:00 PM",
      sat: "12:00 AM - 12:00 PM",
      sun: "Closed",
    },
    coordinates: [22.763708511066657, 88.36970894722768],
    services: ["ATM", "Loans", "Deposit"],
  },
   {
    name: "Axis Bank",
    branch: "New Barrackpore",
    address:
      "Basudha Apartment, 33 & 35 A.P.C. Road, New Barrackpore, PS Ghola, Dist. North 24 Parganas, West Bengal, Pin 700131",
    ifsc: "UTIB0001656",
    phone: "18605005555",
    hours: {
      mon_fri: "09:30 AM - 3:30 PM",
      sat: "09:30 AM - 3:30 PM",
      sun: "Closed",
    },
    coordinates: [22.689194106162965, 88.4488496016247],
    services: ["ATM", "Loans", "Deposit"],
  },
   {
    name: "Axis Bank",
    branch: "New Barrackpore",
    address:
      "Ground Floor, 38/1/1, Barasat Rd, Nona Chandanpukur, Jaffarpukur, Barrackpore, West Bengal 700122",
    ifsc: "UTIB0002555",
    phone: "18605005555",
    hours: {
      mon_fri: "09:30 AM - 3:30 PM",
      sat: "09:30 AM - 3:30 PM",
      sun: "Closed",
    },
    coordinates: [22.768059729347527, 88.38255554372998],
    services: ["ATM", "Loans", "Deposit"],
  },
  {
    name: "Central Bank Of India",
    branch: "Barrackpore",
    address:
      "25 26 And 28 S.n.banerjee Road, Chiriarmore, Barrackpore, North.24 Paraganas, West Bengal 743101",
    ifsc: "CBIN0281090",
    phone: "03325920553",
    hours: {
      mon_fri: "10:00 AM - 4:00 PM",
      sat: "10:00 AM - 4:00 PM",
      sun: "Closed",
    },
    coordinates: [22.761842017206117, 88.3663577593758],
    services: ["ATM", "Loans", "Deposit"],
  },
  {
    name: "Hdfc Bank",
    branch: "Nona Chandanpukur",
    address:
      "No 37/2, Gr Floor, Biswanath Residency, Barasat Rd, Nona Chandanpukur, Jaffarpur More, Kolkata, Barrackpore, West Bengal 700122",
    ifsc: "HDFC0007229",
    phone: "9409767967",
    hours: {
      mon_fri: "09:30 AM - 3:30 PM",
      sat: "09:30 AM - 3:30 PM",
      sun: "Closed",
    },
    coordinates: [22.767189428763224, 88.382157599293],
    services: ["ATM", "Loans", "Deposit"],
  },
  {
    name: "Hdfc Bank",
    branch: "Barrackpore",
    address:
      "No 5, BT Road Barrackpore North 24 Parganas, West Bengal - 700120",
    ifsc: "	HDFC0007800",
    phone: "9409767967",
    hours: {
      mon_fri: "09:30 AM - 3:30 PM",
      sat: "09:30 AM - 3:30 PM",
      sun: "Closed",
    },
    coordinates: [22.686911929297114, 88.44841616749294],
    services: ["ATM", "Loans", "Deposit"],
  },
  {
    name: "Bank Of Baroda",
    branch: "Barrackpore",
    address:
      "1/A Middle Road Anandpuri Po:, Nona Chandanpukur, New, Barrackpore, West Bengal 700122",
    ifsc: "BARB0BARRAC",
    phone: "221800223344",
    hours: {
      mon_fri: "10:00 AM - 4:00 PM",
      sat: "10:00 AM - 4:00 PM",
      sun: "Closed",
    },
    coordinates: [22.767092000392672, 88.37427954842182],
    services: ["ATM", "Loans", "Deposit"],
  },
  {
    name: "Bank Of Baroda",
    branch: "Nona Chandanpukur",
    address:
      "Ward No.05, 37(79/1, Barasat Rd, Nona Chandanpukur, Barrackpore, West Bengal 700122",
    ifsc: "BARB0DBBPOR",
    phone: "221800223344",
    hours: {
      mon_fri: "10:00 AM - 4:00 PM",
      sat: "10:00 AM - 4:00 PM",
      sun: "Closed",
    },
    coordinates: [22.767318266363286, 88.37577200430972],
    services: ["ATM", "Loans", "Deposit"],
  },
  {
    name: "Bank Of Baroda",
    branch: "Jaffarpur",
    address:
      "37(79/1)barasat Road Jaffarpur More Ward No 5 Nona Chandanpukur Barrackpore 700122",
    ifsc: "BARB0VJBAPO",
    phone: "221800223344",
    hours: {
      mon_fri: "10:00 AM - 4:00 PM",
      sat: "10:00 AM - 4:00 PM",
      sun: "Closed",
    },
    coordinates: [22.76703012098724, 88.38167957361858],
    services: ["ATM", "Loans", "Deposit"],
  },
  {
    name: "Bank Of Baroda",
    branch: "Jaffarpur",
    address:
      "37(79/1)barasat Road Jaffarpur More Ward No 5 Nona Chandanpukur Barrackpore 700122",
    ifsc: "BARB0VJBAPO",
    phone: "221800223344",
    hours: {
      mon_fri: "10:00 AM - 4:00 PM",
      sat: "10:00 AM - 4:00 PM",
      sun: "Closed",
    },
    coordinates: [22.76703012098724, 88.38167957361858],
    services: ["ATM", "Loans", "Deposit"],
  },
  {
    name: "Icici Bank",
    branch: "Barrackpore Cantonment",
    address:
      "ICICI Bank Ltd., 4(2), S. N. Banerjee Road, Barrackpore, Kolkata,North 24 Parganas Dist, - 700120",
    ifsc: "ICIC0003306",
    phone: "18001080",
    hours: {
      mon_fri: "9:30 AM - 3:00 PM",
      sat: "9:30 AM - 3:00 PM",
      sun: "Closed",
    },
    coordinates: [22.761188707669856, 88.36753182349332],
    services: ["ATM", "Loans", "Deposit"],
  },
  {
    name: "Indusind Bank",
    branch: "Barrackpore Cantonment",
    address:
      "Ward No 24 Of, Nehru Memorial Techno Global Hospital, 6, Barasat Rd, Lalkuthi More, Barrackpore, West Bengal 700120",
    ifsc: "INDB0002092",
    phone: "18602677777",
    hours: {
      mon_fri: "9:30 AM - 5:00 PM",
      sat: "19:30 AM - 5:00 PM",
      sun: "Closed",
    },
    coordinates: [22.767228965436207, 88.36769032943766],
    services: ["ATM", "Loans", "Deposit"],
  },
];

let map;
let userPosition = null;
let markers = [];

// Initialize the map
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 19.076, lng: 72.8777 },
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
  markers.forEach((marker) => marker.setMap(null));
  markers = [];

  banksToShow.forEach((bank) => {
    const marker = new google.maps.Marker({
      position: { lat: bank.coordinates[0], lng: bank.coordinates[1] },
      map: map,
      title: `${bank.name} - ${bank.branch}`,
      icon: { url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png" },
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

    marker.addListener("click", () => infoWindow.open(map, marker));
    markers.push(marker);
  });

  // Center map to show all markers if we have multiple
  if (banksToShow.length > 0) {
    const bounds = new google.maps.LatLngBounds();
    banksToShow.forEach((bank) =>
      bounds.extend(
        new google.maps.LatLng(bank.coordinates[0], bank.coordinates[1])
      )
    );
    map.fitBounds(bounds);
  }
}

// Display bank cards in the results
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
              <p><strong>Status:</strong> <span class="${
                isOpen ? "status-open" : "status-closed"
              }">${isOpen ? "OPEN NOW" : "CLOSED NOW"}</span></p>
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
              <div class="working-hours">
                <h4>Working Hours</h4>
                <p><strong>Mon-Fri:</strong> ${bank.hours.mon_fri}</p>
                <p><strong>Saturday:</strong> ${bank.hours.sat}</p>
                <p><strong>Sunday:</strong> ${bank.hours.sun}</p>
              </div>
              </div>`;
  });

  resultsContainer.innerHTML = html;
}

// Check if bank is currently open
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

  // Extract hours
  const [openStr, closeStr] = hoursString.split(" - ");
  const [openHour, openMinute] = parseTime(openStr);
  const [closeHour, closeMinute] = parseTime(closeStr);

  // Check if current time is within open hours
  if (currentHour > openHour && currentHour < closeHour) return true;
  if (currentHour === openHour && currentMinute >= openMinute) return true;
  if (currentHour === closeHour && currentMinute <= closeMinute) return true;
  return false;
}

// Helper function to parse time strings
function parseTime(timeStr) {
  const [time, period] = timeStr.split(" ");
  let [hour, minute] = time.split(":").map(Number);
  if (period === "PM" && hour !== 12) hour += 12;
  else if (period === "AM" && hour === 12) hour = 0;
  return [hour, minute || 0];
}

// Calculate distance between two coordinates in km
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  return (R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))).toFixed(1);
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
      () => {
        alert("Could not get your location.");
        document.getElementById("loader").style.display = "none";
      }
    );
  } else {
    alert("Geolocation not supported.");
    document.getElementById("loader").style.display = "none";
  }
}

// Find banks near user
function findNearbyBanks() {
  let banksToShow = banks;
  if (userPosition) {
    banksToShow = banks
      .filter((bank) => {
        const distance = parseFloat(
          calculateDistance(
            userPosition.lat,
            userPosition.lng,
            bank.coordinates[0],
            bank.coordinates[1]
          )
        );
        return distance <= 5; // Only within 5 km
      })
      .sort((a, b) => {
        return (
          calculateDistance(
            userPosition.lat,
            userPosition.lng,
            a.coordinates[0],
            a.coordinates[1]
          ) -
          calculateDistance(
            userPosition.lat,
            userPosition.lng,
            b.coordinates[0],
            b.coordinates[1]
          )
        );
      });
  }

  placeBankMarkers(banksToShow);
  displayBankCards(banksToShow);
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
document.getElementById("locateBtn").addEventListener("click", getUserLocation);
document.getElementById("searchBtn").addEventListener("click", () => {
  searchBanks(document.getElementById("searchInput").value);
});
document.getElementById("searchInput").addEventListener("keyup", (e) => {
  if (e.key === "Enter") searchBanks(e.target.value);
});

// // Load Google Maps
// window.initMap = initMap;

// Load Google Maps API
function loadGoogleMaps() {
  const script = document.createElement("script");
  script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCdVE78ZlkUii3c0GlIst2fOr04_l-ccHE&callback=initMap";
  script.defer = true;
  script.async = true;
  document.head.appendChild(script);
}
loadGoogleMaps();
