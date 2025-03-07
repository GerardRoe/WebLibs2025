const margin = { top: 40, right: 30, bottom: 50, left: 50 },
  width = 900 - margin.left - margin.right,
  height = 400 - margin.top - margin.bottom;

const svg = d3
  .select(".container")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

// script name
d3.select("h1").text("tut6q3.js")

// Load moviw data
d3.csv("movies.csv", (d) => {
  return {
    audienceScore: +d.Audience_score,
    profitability: +d.Profitability,
    worldwideGross: +d.WorldwideGross.replace(/[\$,]/g, ""),
  };
}).then((data) => {
  console.log(data.length);
  console.log(d3.max(data, (d) => +d.profitability));
  console.log(d3.min(data, (d) => +d.WorldwideGross));
  console.log(d3.extent(data, (d) => +d.audienceScore));

  createGraphic(data);
});

// visual function
const createGraphic = (data) => {
  data.sort((a, b) => +a.year - +b.year);

  const xScale = d3
    .scaleLinear()
    .domain(d3.extent(data, (d) => +d.audienceScore))
    .range([margin.left, width - margin.right]);

  const yScale = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => +d.profitability)])
    .range([height, 0]);

  const xAxis = d3.axisBottom(xScale);
  const yAxis = d3.axisLeft(yScale);

  svg
    .append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(d3.axisBottom(xScale));

  svg
    .append("g")
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(yScale));

  svg
    .selectAll(".dot")
    .data(data)
    .join("circle")
    .attr("class", "dot")
    .attr("cx", (d) => xScale(d.audienceScore))
    .attr("cy", (d) => yScale(d.profitability))
    .attr("r", 5)
    .on("mouseover", function (event, d) {
      d3.select(this).attr("r", 7).attr("fill", "red");
    })
    .on("mouseout", function () {
      d3.select(this).attr("r", 5).attr("fill", "steelblue");
    });

  // Add movie labels
  svg
    .selectAll(".text")
    .data(data)
    .enter()
    .append("text")
    .attr("x", (d) => xScale(d.audienceScore) + 5)
    .attr("y", (d) => yScale(d.profitability) - 5)
    .text((d) => d.film)
    .style("font-size", "10px")
    .style("fill", "black");

  svg
    .append("text")
    .attr("class", "axis-label")
    .attr("x", width / 2)
    .attr("y", height + 40)
    .style("text-anchor", "middle")
    .text("Audience Score");

  svg
    .append("text")
    .attr("class", "axis-label")
    .attr("transform", "rotate(-90)")
    .attr("x", -height / 2)
    .attr("y", 15)
    .style("text-anchor", "middle")
    .text("Profitability");
};
