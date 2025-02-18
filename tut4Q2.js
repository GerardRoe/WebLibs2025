const marks = [62, 34, 84, 87, 23, 54];
// const
svg = d3.select("div").attr("width", "400").attr("height", "400");

d3.select("H1").text("header found");

svg.append("svg").attr("width", "400").attr("height", "300");

svg.select('svg')
  .selectAll("rect")
  .data(marks)
  .join("rect")
  .attr("width", 40)
  .attr("height", (d) => d)
  .attr("fill", (d, i) => d < 40 ? "red": "steelblue")
  .attr("x", (d, i) => i * 42)
  .attr("y", (d, i) => 200 - d );
// The y-position is chartHeight minus the bar's height so that it grows upward.

//.attr("y", 200 - mark)
