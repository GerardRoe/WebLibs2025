let salesData = [
  {
    productName: "Product 1",
    sales: [100, 120, 115, 77, 140, 165, 160, 160, 145, 121, 180, 200],
    color: "red",
  },
  {
    productName: "Product 2",
    sales: [55, 67, 100, 93, 84, 70, 75, 110, 125, 120, 130, 150],
    color: "green",
  },
  {
    productName: "Product 3",
    sales: [60, 70, 80, 90, 100, 75, 65, 70, 70, 85, 104, 170],
    color: "blue",
  },
];

const margin = 50,
  width = 600 - margin,
  height = 400 - margin;

// Create SVG container
const svg = d3
  .select(".container")
  .append("svg")
  .attr("width", width + margin)
  .attr("height", height + margin);

let xScale = d3.scaleLinear().domain([0, 11]).range([margin, width]);
let yScale = d3.scaleLinear().domain([0, 1300]).range([height, margin]);

let line = d3
  .line()
  .x((d, i) => xScale(i))
  .y((d) => yScale(d));

svg
  .selectAll(".line")
  .data(salesData)
  .join("path")
  .attr("fill", "none")
  .attr("stroke", (d) => d.color)
  .attr("stroke-width", 2)
  .attr("d", (d) => line(d.sales));

salesData.forEach((product) => {
  let maxSale = d3.max(product.sales),
    minSale = d3.min(product.sales);
  let maxIndex = product.sales.indexOf(maxSale),
    minIndex = product.sales.indexOf(minSale);

  svg
    .append("text")
    .attr("x", xScale(maxIndex))
    .attr("y", yScale(maxSale) - 10)
    .text(`Best: ${maxSale}`)
    .attr("fill", product.color);

  svg
    .append("text")
    .attr("x", xScale(minIndex))
    .attr("y", yScale(minSale) + 15)
    .text(`Worst: ${minSale}`)
    .attr("fill", product.color);
});
