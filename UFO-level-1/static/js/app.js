// from data.js
let tableData = data;

let tbody = d3.select("tbody");

tableData.forEach(function(ufoReport) {
    console.log(ufoReport);
    let row = tbody.append("tr");

// Use d3 to update each cell's values with ufo data.
    Object.entries(ufoReport).forEach(function([key, value]){
        console.log(key, value);
        let cell = tbody.append("td");
        cell.text(value);
    });
});


let submit = d3.select("#filter-btn");
let clear = d3.select("tbody")
submit.on("click", function() {
    clear.html("")
    d3.event.preventDefault();
    let inputElement = d3.select("#datetime");
    let inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    let filteredData = tableData.filter(bydate => bydate.datetime === inputValue);

    console.log(filteredData);

    filteredData.forEach(function(filteredReport) {
        console.log(filteredReport);
        let row = tbody.append("tr");
    
    // Use d3 to update each cell's values with data.
        Object.entries(filteredReport).forEach(function([key, value]){
            console.log(key, value);
            let cell = tbody.append("td");
            cell.text(value);
        });
    });
});

button.on("click", function() {
    let inputElement = d3.select("#datetime");
    let inputValue = inputElement.property("value");
    console.log(inputValue);
    console.log(tableData);
    let filteredData = tableData.filter(ufo => ufo.datetime === inputValue);
    let sightings2 = filteredData.map(ufo => ufo);
    tbody.html("");
    
if (inputValue) {
    sightings2.forEach(ufosighting => {
    let row2 = tbody.append("tr");
    Object.entries(ufosighting).forEach(([key, value]) => {
    let cell2 = row2.append("td");
    cell2.text(value);
    });
    });
    }
else {
    tbody.html("");
    tableData.forEach(sighting => {
    let row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
    let cell = row.append("td");
    cell.text(value);
    });
    });
    }
});
