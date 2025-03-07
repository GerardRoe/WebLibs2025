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

// Load moviw data
d3.csv("movies.csv", (d) => {
  return {
    film: d.Film,
    year: +d.Year,
    worldwideGross: +d.WorldwideGross.replace(/[\$,]/g, ''),
  };
}).then((data) => {
  console.log(data.length);
  console.log(d3.max(data, (d) => +d.WorldwideGross));
  console.log(d3.min(data, (d) => +d.WorldwideGross));
  console.log(d3.extent(data, (d) => +d.WorldwideGross));

  createGraphic(data);
});

const createGraphic = (data) => {
  data.sort((a, b) => +a.year - +b.year);

  const x = d3.scaleLinear()
    .domain(d3.extent(data, (d) => +d.year))
    .range([0, width]);

  const y = d3.scaleLinear()
    .domain([0, d3.max(data, (d) => d.worldwideGross)])
    .nice()
    .range([height, 0]);

  const xAxis = d3.axisBottom(x).tickFormat(d3.format("d"));
  const yAxis = d3.axisLeft(y);

  svg.append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(xAxis);

  svg.append("g").call(yAxis);

  const line = d3.line()
    .x((d) => x(d.year))
    .y((d) => y(d.worldwideGross));

  svg.append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("stroke", "steelblue")
    .attr("stroke-width", 2)
    .attr("d", line);

  svg.selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", (d) => x(d.year))
    .attr("cy", (d) => y(d.worldwideGross))
    .attr("r", 4)
    .attr("fill", "red");

  svg.append("text")
    .attr("x", width / 2)
    .attr("y", height + margin.bottom - 10)
    .attr("text-anchor", "middle")
    .text("Year");

  svg.append("text")
    .attr("x", -80)
    .attr("y", -30)
    .attr("transform", "rotate(-90)")
    .attr("text-anchor", "middle")
    .text("Worldwide Gross (in millions)");
};
