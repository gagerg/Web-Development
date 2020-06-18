/**
 * Gage Gutmann and Cole deSilva
 * CPSC 314 Final Project
 */

// resource for counting unique objects in array: https://thisdavej.com/how-to-count-unique-items-in-javascript-arrays/
let url = "https://rickandmortyapi.com/api/character";
// /?page=24
let result = [];

function getCharacterData(newurl) {
  if (newurl === "") {
    return;
  } else {
    let request = new XMLHttpRequest();
    request.open("GET", newurl, true);
    request.onload = function() {
      let data = JSON.parse(this.responseText);

      let results = data.results;
      for (let i = 0; i < results.length; i++) {
        let character = {
          status: results[i].status,
          species: results[i].species,
          origin: results[i].origin
        };
        result.push(character);
      }
      return getCharacterData(data.info.next);
    };
    request.send();
  }
}

getCharacterData(url);
console.log(result);
let speciesData = [];
let statusData = [];
let originData = [];

setTimeout(function() {
  getSpeciesData();
  getStatusData();

  let speciesTitle = document.getElementById("speciestitle");
  speciesTitle.innerHTML = "Graph of Species Data";

  let statusTitle = document.getElementById("statustitle");
  statusTitle.innerHTML = "Graph of Status Data";

  makeBarChart(speciesData, "#speciesgraph");
  makeBarChart(statusData, "#statusgraph");
}, 2000);

function getSpeciesData() {
  speciesData = result.map(character => character.species);
  console.log(speciesData);

  let uniqueSpecies = [...new Set(speciesData)];
  let counts = [];
  speciesData.forEach(species => {
    counts[species] = counts[species] ? counts[species] + 1 : 1;
  });

  speciesData = [];
  for (let i = 0; i < uniqueSpecies.length; i++) {
    let specData = {
      name: uniqueSpecies[i],
      value: counts[uniqueSpecies[i]]
    };
    speciesData.push(specData);
  }
  console.log(speciesData);
}

function getStatusData() {
  statusData = result.map(character => character.status);
  console.log(statusData);

  let uniqueStatus = [...new Set(statusData)];
  let counts = [];
  statusData.forEach(status => {
    counts[status] = counts[status] ? counts[status] + 1 : 1;
  });

  statusData = [];
  for (let i = 0; i < uniqueStatus.length; i++) {
    let statData = {
      name: uniqueStatus[i],
      value: counts[uniqueStatus[i]]
    };
    statusData.push(statData);
  }
  console.log(statusData);
}

// for massive help with d3 graph https://www.kdnuggets.com/2018/03/simple-bar-chart-d3.html
// for resizing svg https://stackoverflow.com/questions/16265123/resize-svg-when-window-is-resized-in-d3-js
function makeBarChart(data, container) {
  let margin = { top: 50, right: 50, bottom: 50, left: 50 };

  let containerRef = d3.select(`${container}`);

  let width = 600 - margin.left - margin.right;
  let height = 400 - margin.top - margin.bottom;

  let svg = d3
    .select(`${container}`)
    .classed("svg-container", true)
    .append("svg")
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("viewBox", "0 0 600 400")
    .classed("svg-content-responsive", true)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  let x = d3
    .scaleBand()
    .range([0, width])
    .padding(0.3);

  let y = d3.scaleLinear().range([height, 0]);

  x.domain(
    data.map(function(d) {
      return d.name;
    })
  );

  y.domain([
    0,
    d3.max(data, function(d) {
      return d.value;
    })
  ]);

  svg
    .selectAll(".bar")
    .data(data)
    .enter()
    .append("rect")
    .attr("class", "bar")
    .attr("x", function(d) {
      return x(d.name);
    })
    .attr("width", x.bandwidth())
    .attr("y", function(d) {
      return y(d.value);
    })
    .attr("height", function(d) {
      return height - y(d.value);
    });

  svg
    .append("g")
    .attr("class", "axis")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

  svg.append("g").call(d3.axisLeft(y));
}
