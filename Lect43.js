const margin = { top: 20, bottom: 40, left: 50, right: 30 };

let oilPrices = [
  { year: 2010, price: 79.51 },
  { year: 2011, price: 93.17 },
  { year: 2012, price: 94.05 },
  { year: 2013, price: 97.98 },
  { year: 2014, price: 86.73 },
  { year: 2015, price: 48.66 },
  { year: 2016, price: 43.58 },
  { year: 2017, price: 50.84 },
  { year: 2018, price: 64.9 },
  { year: 2019, price: 57.05 },
  { year: 2020, price: 39.05 },
  { year: 2021, price: 59.04 },
];

const w = 800, h = 400;
d3.select("h1").text("Line Example")
const xScale = d3.scaleLinear()
  .domain(d3.extent(oilPrices, d => d.year))  
  .range([50, w - 50]); 

const yScale = d3.scaleLinear()
  .domain([0, d3.max(oilPrices, d => d.price)]) 
  .range([h - 50, 50]); 

const svg = d3
  .select(".container")
  .append("svg")
  .attr("width", w)
  .attr("height", h)
  .attr("viewBox", [0, 0, w, h])
  .style("border", "1px solid black");


const line = d3.line()
  .x(d => xScale(d.year))  
  .y(d => yScale(d.price)) 
  .curve(d3.curveNatural);


svg.append("path")
  .datum(oilPrices) 
  .attr("fill", "none")
  .attr("stroke", "steelblue")
  .attr("stroke-width", 2)
  .attr("d", line);
  

// **Add Circles to Data Points**
svg.selectAll("circle")
  .data(oilPrices)
  .join("circle")
  .attr("cx", d => xScale(d.year))
  .attr("cy", d => yScale(d.price))
  .attr("r", 5)
  .attr("fill", "red");


svg.append("g")
  .attr("transform", `translate(0, ${h - 50})`) 
  .call(d3.axisBottom(xScale).tickFormat(d3.format("d"))); 


// svg.append("g")
//   .attr("transform", `translate(50, 0)`) // Move to left
//   .call(d3.axisLeft(yScale));

