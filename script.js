// Function to fetch data from the API
function fetchData() {
  var url = 'https://slcairport.ridesystems.net/Services/JSONPRelay.svc/GetMapVehiclePoints?apiKey=8882812681';

  fetch(url)
    .then(response => response.json())
    .then(data => buildTable(data))
    .catch(error => console.error(error));
}

// Function to build the table with the fetched data
function buildTable(data) {
  var table = "<table id='myTable'>";
  
  // Create table header
  table += "<thead><tr>";
  for (var key in data[0]) {
    table += "<th>" + key + "</th>";
  }
  table += "</tr></thead>";
  
  // Create table body
  table += "<tbody>";
  data.forEach(function(row) {
    table += "<tr>";
    for (var key in row) {
      table += "<td>" + row[key] + "</td>";
    }
    table += "</tr>";
  });
  table += "</tbody>";
  
  table += "</table>";
  document.getElementById("csvTable").innerHTML = table;
}

function getUserIP() {
  fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
      document.getElementById('ipAddress').textContent = data.ip;
    })
    .catch(error => {
      console.log('Error:', error);
    });
}
