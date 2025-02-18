// scatterplot example

const margin = { top: 20, bottom: 20, left: -20, right: 30 };

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

let maxPrice = d3.max(oilPrices, (d) => d.price);
console.log(`MAxprice = ${maxPrice}`);

bestPrice = (d) => {
  if (d.price > 80) return "red";
  else return "#444444";
};

let h = 400;
let w = 800;
let padding = 2;

const xScale = d3.scaleLinear()
  .domain([ d3.min(oilPrices, (d) => +d.year),
            d3.max(oilPrices, (d) => +d.year)])
  .range([0, w - 50]);

//   const xScale = d3.scaleLinear()
//   .domain(d3.extent(oilPrices, (d) => d.year)) 
//   .range([50, w - 50]); 


const yScale = d3.scaleLinear()
        .domain([0, d3.max(oilPrices, (d) => d.price)])
    .range([h - 50, 50]);


d3.select("h1").text("Scatterplot Example");
const svg = d3
  .select(".container")
  .append("svg")
  .attr("height", h - margin.top - margin.bottom)
  .attr("width", w - margin.left - margin.right)
  .attr("viewBox", [0, 0, w, h])
  .style("border", "1px solid black");

svg
  .selectAll("circle")
  .data(oilPrices)
  .join("circle")
  .attr("cx", (d) => xScale(d.year))
  .attr("cy", (d) => yScale(d.price) - 10)
  .attr("r", 10)
  .attr("fill", (d) => bestPrice(d));


let priceTxt = svg
  .selectAll("text")
  .data(oilPrices)
  .join("text")
  .text((d) => d.price) 
  .attr("x", (d, i) => (d.year / 33.5) * i)
  .attr("y", (d) => h - d.price * 3 - 10)
  .attr("font-size", "20px")
  .attr("text-anchor", "middle");
