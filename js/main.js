document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const navLinks = document.getElementById("navLinks");
  mobileMenuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});
// Sample bank data
const banks = [
  // barrackpore
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
    ifsc: "HDFC0007800",
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
      sat: "9:30 AM - 5:00 PM",
      sun: "Closed",
    },
    coordinates: [22.767228965436207, 88.36769032943766],
    services: ["ATM", "Loans", "Deposit"],
  },
  {
    name: "Indian Overseas Bank",
    branch: "Nona Chandanpukur ATM",
    address: "No. 73, Barasat Road, Nona Chandanpukur, Barrackpore – 700122",
    ifsc: "IOBA0001459",
    phone: "28584896",
    hours: {
      mon_fri: "24 Hours",
      sat: "24 Hours",
      sun: "24 Hours",
    },
    coordinates: [22.7702, 88.3725], // approximate
    services: ["ATM"],
  },
  {
    name: "Ujjivan Small Finance Bank",
    branch: "Barrackpore",
    address: "No. 41/1, B.T. Road, Barrackpore, North 24 Parganas – 700123",
    ifsc: "UJVN0003315",
    phone: "+91 8040712166",
    hours: {
      mon_fri: "10:00 AM - 4:00 PM",
      sat: "10:00 AM - 4:00 PM (except 2nd & 4th Saturday)",
      sun: "Closed",
    },
    coordinates: [22.7595, 88.3595], // approximate
    services: ["Microfinance", "Loans", "Savings"],
  },

  //titagarh//

  {
    name: "UCO Bank",
    branch: "Titagarh",
    address:
      "13, B.T. Road, P.O. Titagarh, North 24 Parganas, West Bengal – 700119",
    ifsc: "UCBA0000221",
    phone: "033-25010602",
    hours: {
      mon_fri: "10:00 AM - 4:00 PM",
      sat: "10:00 AM - 4:00 PM",
      sun: "Closed",
    },
    coordinates: [22.7399, 88.3736],
    services: ["ATM", "Loans", "Deposit"],
  },
  {
    name: "State Bank of India",
    branch: "Titagarh",
    address: "13, B.T. Road, Titagarh, North 24 Parganas, West Bengal – 700119",
    ifsc: "SBIN0004727",
    phone: "033-25011851 / 25010381",
    hours: {
      mon_fri: "10:00 AM - 4:00 PM",
      sat: "10:00 AM - 4:00 PM",
      sun: "Closed",
    },
    coordinates: [22.704194273724866, 88.3743114022162],
    services: ["ATM", "Deposits", "Loans"],
  },
  {
    name: "Central Bank of India",
    branch: "Titagarh",
    address: "12, B.T. Road, Titagarh, Kolkata, West Bengal",
    ifsc: "CBIN0281349",
    phone: "022-2612008",
    hours: {
      mon_fri: "10:00 AM - 4:00 PM",
      sat: "10:00 AM - 4:00 PM",
      sun: "Closed",
    },
    coordinates: [22.7388, 88.375],
    services: ["ATM", "Deposits"],
  },
  {
    name: "Punjab National Bank",
    branch: "Titagarh",
    address:
      "2, Jalia Para, B.T. Road, Khardah (Titagarh), North 24 Parganas, West Bengal",
    ifsc: "PUNB0011920",
    phone: "03325010655",
    hours: {
      mon_fri: "10:00 AM - 4:00 PM",
      sat: "10:00 AM - 4:00 PM",
      sun: "Closed",
    },
    coordinates: [22.7278, 88.3785],
    services: ["ATM", "Deposits", "Loans"],
  },
  {
    name: "Axis Bank",
    branch: "Titagarh",
    address: "Ground Floor, House No. 8, B.T. Road, Titagarh, Kolkata – 700119",
    ifsc: "UTIB0004048",
    phone: "033-22825185",
    hours: {
      mon_fri: "10:00 AM - 4:00 PM",
      sat: "10:00 AM - 4:00 PM",
      sun: "Closed",
    },
    coordinates: [22.740814196401665, 88.37331540138887],
    services: ["ATM", "Loans", "Deposit"],
  },

  //khardah//
  {
    name: "State Bank of India",
    branch: "Khardah",
    address:
      "18 B T Road, Distt. 24 Parganas North, Khardah, West Bengal – 743155",
    ifsc: "SBIN0001899",
    phone: "1800-1234 / 1800-2100 (customer care)",
    hours: {
      mon_fri: "10:00 AM - 4:00 PM",
      sat: "10:00 AM - 4:00 PM",
      sun: "Closed",
    },
    coordinates: [22.72840583307232, 88.37306648433331], // approximate
    services: ["Deposits", "Loans", "Government Schemes"],
  },
  {
    name: "Indian Bank",
    branch: "Khardah",
    address: "B T Road, Khardah, North 24 Parganas, West Bengal – 743155",
    ifsc: "IDIB000K688",
    phone: "03325956762",
    hours: {
      mon_fri: "10:00 AM - 5:00 PM",
      sat: "10:00 AM - 5:00 PM",
      sun: "Closed",
    },
    coordinates: [22.697380647756276, 88.37408890893147], // approximate
    services: ["Deposits", "Loans", "RTGS/NEFT"],
  },
  {
    name: "ICICI Bank",
    branch: "Khardah",
    address: "24 By 18 B T Road, Khardah, Kolkata – 700116",
    ifsc: "ICIC0002481",
    phone: "+918527495156",
    hours: {
      mon_fri: "9:30 AM - 4:30 PM",
      sat: "9:30 AM - 4:30 PM",
      sun: "Closed",
    },
    coordinates: [22.703656201677475, 88.37454279465933], // approximate
    services: ["Accounts", "Loans", "Deposits"],
  },
  {
    name: "ICICI Bank",
    branch: "Khardah (Rahara)",
    address: "165/72 J. C. Road, P.O. Rahara, Khardah – 700118",
    ifsc: "ICIC0004236",
    phone: "+918981002559",
    hours: {
      mon_fri: "9:30 AM - 4:30 PM",
      sat: "9:30 AM - 4:30 PM",
      sun: "Closed",
    },
    coordinates: [22.523983864184377, 88.33997605661429], // approximate
    services: ["Accounts", "Loans"],
  },
  {
    name: "ICICI Bank",
    branch: "Khardah Cooperative Bank Ltd",
    address: "No. 74, P.K. Biswas Road, Khardah – 700117",
    ifsc: "ICIC00KDCBL",
    phone: "033-25637506",
    hours: {
      mon_fri: "10:00 AM - 4:00 PM",
      sat: "10:00 AM - 4:00 PM",
      sun: "Closed",
    },
    coordinates: [22.725914889407004, 88.3657249532209], // approximate
    services: ["Co-operative Banking", "Deposits", "Loans"],
  },
  {
    name: "Bank of Baroda",
    branch: "Khardah (Rahara)",
    address:
      "147/101A, Co-operative Colony, P.O. Rahara, P.S. Khardaha, West Bengal – 700118",
    ifsc: "BARB0KHARDA",
    phone: "1800-223-344",
    hours: {
      mon_fri: "10:00 AM - 4:00 PM",
      sat: "10:00 AM - 4:00 PM",
      sun: "Closed",
    },
    coordinates: [22.724865499775085, 88.38201780664791], // approximate
    services: ["Accounts", "Deposits", "Loans"],
  },
  {
    name: "West Bengal State Co-op Bank",
    branch: "Khardah",
    address: "Khardah, North 24 Parganas, West Bengal",
    ifsc: "WBSC0KUCB01",
    phone: null,
    hours: {
      mon_fri: "10:00 AM - 4:00 PM",
      sat: "10:00 AM - 4:00 PM",
      sun: "Closed",
    },
    coordinates: [22.7445, 88.3835], // approximate
    services: ["Co-operative Banking", "Deposits"],
  },
  {
    name: "West Bengal State Co-op Bank",
    branch: "Rahara",
    address: "Rahara, Khardah, North 24 Parganas, West Bengal",
    ifsc: "WBSC0KUCB02",
    phone: null,
    hours: {
      mon_fri: "10:00 AM - 4:00 PM",
      sat: "10:00 AM - 4:00 PM",
      sun: "Closed",
    },
    coordinates: [22.745, 88.384], // approximate
    services: ["Co-operative Banking", "Deposits"],
  },
  {
    name: "Allahabad Bank",
    branch: "Khardah",
    address: "B.T. Road, P.O. Khardah, North 24 Parganas, West Bengal",
    ifsc: "ALLA0210040",
    phone: "25533127",
    hours: {
      mon_fri: "10:00 AM - 4:00 PM (2nd & 4th Saturday closed)",
      sat: "Closed on 2nd & 4th Saturday",
      sun: "Closed",
    },
    coordinates: [22.724415464047482, 88.37389737301403], // approximate
    services: ["Deposits", "Loans"],
  },
  {
    name: "IDBI Bank",
    branch: "Khardah",
    address:
      "Purbasha Kalyan Nagar, Village Panshila, P.S. Khardah, North 24 Parganas, West Bengal",
    ifsc: "IBKL0000061",
    phone: "9830426138",
    hours: {
      mon_fri: "10:00 AM - 4:00 PM (2nd & 4th Saturday closed)",
      sat: "Closed on 2nd & 4th Saturday",
      sun: "Closed",
    },
    coordinates: [22.718520165338298, 88.3886308300374], // approximate
    services: ["Deposits", "Loans"],
  },
  {
    name: "HDFC Bank",
    branch: "Khardaha",
    address:
      "2 19, Old Calcutta Rd, Rahara Bazar P.O. Rahara, Khardaha, North 24 Parganas, West Bengal – 700118",
    ifsc: "HDFC0002667",
    phone: "9831073333",
    hours: {
      mon_fri: "10:00 AM - 4:00 PM",
      sat: "Closed on 2nd & 4th Saturday",
      sun: "Closed",
    },
    coordinates: [22.723848284683854, 88.38708268650703], // approximate
    services: ["Accounts", "Loans", "Deposits"],
  },

  //sodpur//
  {
    name: "State Bank of India",
    branch: "Sodepur",
    address:
      "Sodepur Station Road, Sodepur, North 24 Parganas, West Bengal – 700110",
    ifsc: "SBIN0001796",
    phone: "033-25532982",
    hours: {
      mon_fri: "10:00 AM - 4:00 PM",
      sat: "10:00 AM - 4:00 PM",
      sun: "Closed",
    },
    coordinates: [22.70088913482841, 88.37854290522975], // approximate
    services: ["Deposits", "Loans", "NEFT/RTGS"],
  },
  {
    name: "State Bank of India",
    branch: "H.B. Town Sodepur",
    address:
      "Barasat Road, P.O. Sodepur, Sodepur, North 24 Parganas, West Bengal – 700110",
    ifsc: "SBIN0007654",
    phone: "033-25657775",
    hours: {
      mon_fri: "10:00 AM - 4:00 PM",
      sat: "10:00 AM - 4:00 PM",
      sun: "Closed",
    },
    coordinates: [22.69664101118353, 88.39372391534269], // approximate
    services: ["Deposits", "Loans"],
  },
  {
    name: "HDFC Bank",
    branch: "Sodepur",
    address: "2, Burmashell, Barasat Road, Sodepur, Kolkata – 700110",
    ifsc: "HDFC0009120",
    phone: "+91 98310 73333",
    hours: {
      mon_fri: "10:00 AM - 4:00 PM",
      sat: "10:00 AM - 1:00 PM",
      sun: "Closed",
    },
    coordinates: [22.699032309970995, 88.38585867116431], // approximate
    services: ["Deposits", "Loans", "Accounts"],
  },
  {
    name: "Bank of India",
    branch: "Sodepur",
    address:
      "Mangaldeep 7 Indraloke, Sodepur, Barasat Road, North 24 Parganas, West Bengal",
    ifsc: "BKID0004148",
    phone: "1800220229",
    hours: {
      mon_fri: "10:00 AM - 4:00 PM",
      sat: "10:00 AM - 4:00 PM",
      sun: "Closed",
    },
    coordinates: [22.696513211363587, 88.39435307116433], // approximate
    services: ["Deposits", "Loans"],
  },
  {
    name: "Central Bank of India",
    branch: "Sodepur",
    address:
      "Station Road, Sodepur, P.O. Panihati, North 24 Parganas, West Bengal",
    ifsc: "CBIN0281409",
    phone: "033 2553 2555",
    hours: {
      mon_fri: "10:00 AM - 4:00 PM",
      sat: "10:00 AM - 4:00 PM",
      sun: "Closed",
    },
    coordinates: [22.701095511826644, 88.37981497301404], // approximate
    services: ["Deposits", "Loans"],
  },
  {
    name: "Bandhan Bank",
    branch: "Sodepur",
    address:
      "First Floor, A-55, Amrabati, Sodepur, North 24 Parganas, West Bengal – 700110",
    ifsc: "BDBL0001296",
    phone: "+919073912961",
    hours: {
      mon_fri: "9:30 AM - 4:30 PM",
      sat: "9:30 AM - 4:30 PM",
      sun: "Closed",
    },
    coordinates: [22.694075450297724, 88.37908933733326],
    services: ["Deposits", "Loans", "ATM (24 hrs)"],
  },
  {
    name: "HDFC Bank",
    branch: "Sodepur",
    address: "2, Burmashell, Barasat Road, Panihati, Sodepur, Kolkata – 700110",
    ifsc: "HDFC0009120",
    phone: "+919831073333",
    hours: {
      mon_fri: "9:30 AM – 3:30 PM",
      sat: "9:30 AM – 3:30 PM",
      sun: "Closed",
    },
    coordinates: [22.69898282081378, 88.38592304417836],
    services: ["Deposits", "Loans", "Accounts"],
  },
  {
    name: "Union Bank of India",
    branch: "Sodepur",
    address:
      "Manashi Plaza, Ground Floor, 175, R.N. Avenue, South Pansila, Sodepur, North 24 Parganas – 700118",
    ifsc: "UBIN0554383",
    phone: "08369454380",
    hours: {
      mon_fri: "10:00 - 4:00",
      sat: "10:00 - 4:00",
      sun: "Closed",
    },
    coordinates: [22.473129512228482, 88.33090516980981],
    services: ["Deposits", "Loans"],
  },
  //palta//
  {
    name: "State Bank of India",
    branch: "Sreepally Palta",
    address:
      "22/1 & 22/3, Sreepally, PO Bengal Enamel, Palta, North 24 Parganas – 743122",
    ifsc: "SBIN0010091",
    phone: "033-25450731",
    hours: {
      mon_fri: "10:00 AM - 4:00 PM",
      sat: "10:00 AM - 4:00 PM",
      sun: "Closed",
    },
    coordinates: [22.780859097409447, 88.3759286], // approximate
    services: ["Deposits", "Loans", "NEFT/RTGS"],
  },
  {
    name: "State Bank of India",
    branch: "Babanpur (Rural)",
    address:
      "Santinagar, Babanpur, PO Bengal Enamel, Palta, North 24 Parganas – 743122",
    ifsc: "SBIN0015957",
    phone: "033-23551483",
    hours: {
      mon_fri: "10:00 AM - 4:00 PM",
      sat: "10:00 AM - 4:00 PM (except 2nd & 4th Saturday)",
      sun: "Closed",
    },
    coordinates: [22.79351584641958, 88.38285315527666], // approximate
    services: ["Deposits", "Loans", "NEFT/RTGS"],
  },
  {
    name: "HDFC Bank",
    branch: "Palta Station Road ATM",
    address: "Ground Floor, Dr. B. R. Ambedkar Road, Palta – 743122",
    ifsc: null,
    phone: "+91-9409767967",
    hours: {
      mon_fri: "12:00 AM - 11:59 PM",
      sat: "12:00 AM - 11:59 PM",
      sun: "Open",
    },
    coordinates: [22.78153264014804, 88.3702839469795], // approximate
    services: ["ATM (24 Hours)"],
  },
];

let map;
let userPosition = null;
let markers = [];
let userMarker = null;
let radiusCircle = null;
const radiusInput = document.getElementById("radiusInput");
const radiusValue = document.getElementById("radiusValue");

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
  markers.forEach((m) => m.setMap(null));
  markers = [];

  banksToShow.forEach((bank) => {
    const marker = new google.maps.Marker({
      position: { lat: bank.coordinates[0], lng: bank.coordinates[1] },
      map,
      title: `${bank.name} - ${bank.branch}`,
      icon: { url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png" },
    });

    const infoWindow = new google.maps.InfoWindow({
      content: `<div>
            <h3 class="font-semibold">${bank.name}</h3>
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
    resultsContainer.innerHTML = `<div class="text-slate-600">No banks found within selected distance.</div>`;
    return;
  }

  let html = "";
  banksToShow.forEach((bank) => {
    const isOpen = checkIfBankIsOpen(bank.hours);
    html += `<div class="bank-card">
          <h3 class="text-lg font-semibold">${bank.name}</h3>
          <p><strong>Branch:</strong> ${bank.branch}</p>
          <p><strong>Address:</strong> ${bank.address}</p>
          <p><strong>IFSC Code:</strong> ${bank.ifsc}</p>
          <p><strong>Phone:</strong> ${bank.phone}</p>
          <p><strong>Status:</strong> <span class="${
            isOpen ? "status-open" : "status-closed"
          }">
            ${isOpen ? "OPEN NOW" : "CLOSED NOW"}
          </span></p>
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
            <h4 class="font-medium">Working Hours</h4>
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

  if (!hoursString || hoursString.toLowerCase() === "closed") return false;

  const parts = hoursString.split(" - ");
  if (parts.length !== 2) return false; // guard
  const [openStr, closeStr] = parts;
  const [openHour, openMinute] = parseTime(openStr);
  const [closeHour, closeMinute] = parseTime(closeStr);

  // within range
  if (currentHour > openHour && currentHour < closeHour) return true;
  if (currentHour === openHour && currentMinute >= openMinute) return true;
  if (currentHour === closeHour && currentMinute <= closeMinute) return true;
  return false;
}

// Helper: parse "10:00 AM"
function parseTime(timeStr) {
  const [time, period] = timeStr.trim().split(" ");
  let [hour, minute] = time.split(":").map(Number);
  if (period?.toUpperCase() === "PM" && hour !== 12) hour += 12;
  else if (period?.toUpperCase() === "AM" && hour === 12) hour = 0;
  return [hour, minute || 0];
}

// Haversine distance in km
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) ** 2;
  return (R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))).toFixed(1);
}
function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

function getSelectedRadiusKm() {
  return Number(radiusInput.value || 5);
}

function showLoader(show) {
  document.getElementById("loader").classList.toggle("hidden", !show);
}

// Draw or update the circle around user
function drawRadiusCircle() {
  if (!userPosition) return;
  const meters = getSelectedRadiusKm() * 1000;

  // Create or update circle
  if (!radiusCircle) {
    radiusCircle = new google.maps.Circle({
      strokeOpacity: 0.6,
      strokeWeight: 1,
      fillOpacity: 0.08,
      map,
      center: userPosition,
      radius: meters,
    });
  } else {
    radiusCircle.setCenter(userPosition);
    radiusCircle.setRadius(meters);
    radiusCircle.setMap(map);
  }
}

// Get user location
function getUserLocation() {
  showLoader(true);
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

        // Add/update user marker
        if (userMarker) userMarker.setMap(null);
        userMarker = new google.maps.Marker({
          position: userPosition,
          map,
          title: "Your Location",
          icon: {
            url: "https://maps.google.com/mapfiles/ms/icons/green-dot.png",
          },
        });

        drawRadiusCircle();
        findNearbyBanks(); // filter by current radius
      },
      () => {
        alert("Could not get your location.");
        showLoader(false);
      }
    );
  } else {
    alert("Geolocation not supported.");
    showLoader(false);
  }
}

// Find banks near user using selected radius
function findNearbyBanks() {
  let banksToShow = banks;
  if (userPosition) {
    const radiusKm = getSelectedRadiusKm();
    banksToShow = banks
      .filter((bank) => {
        const d = parseFloat(
          calculateDistance(
            userPosition.lat,
            userPosition.lng,
            bank.coordinates[0],
            bank.coordinates[1]
          )
        );
        return d <= radiusKm;
      })
      .sort((a, b) => {
        const da = parseFloat(
          calculateDistance(
            userPosition.lat,
            userPosition.lng,
            a.coordinates[0],
            a.coordinates[1]
          )
        );
        const db = parseFloat(
          calculateDistance(
            userPosition.lat,
            userPosition.lng,
            b.coordinates[0],
            b.coordinates[1]
          )
        );
        return da - db;
      });
  }

  placeBankMarkers(banksToShow);
  displayBankCards(banksToShow);
  showLoader(false);
}

// Search by name or IFSC
function searchBanks(query) {
  query = (query || "").toLowerCase().trim();
  if (!query) {
    // If user position exists, keep radius filter; else show all
    if (userPosition) findNearbyBanks();
    else {
      displayBankCards(banks);
      placeBankMarkers(banks);
    }
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

// Radius UI interactions
radiusInput.addEventListener("input", () => {
  radiusValue.textContent = radiusInput.value;
});

document.getElementById("applyRadiusBtn").addEventListener("click", () => {
  if (!userPosition) {
    alert("Click ‘Use My Location’ first to filter by distance.");
    return;
  }
  drawRadiusCircle();
  findNearbyBanks();
});

// Load Google Maps API
window.initMap = initMap;
function loadGoogleMaps() {
  const script = document.createElement("script");
  script.src =
    "https://maps.googleapis.com/maps/api/js?key=AIzaSyCdVE78ZlkUii3c0GlIst2fOr04_l-ccHE&callback=initMap";
  script.defer = true;
  script.async = true;
  document.head.appendChild(script);
}

loadGoogleMaps();
