const margin = 50,
  width = 600 - margin,
  height = 400 - margin;

  d3.select("h1").text("tut5q3 random data")

// Create SVG container
const svg = d3
  .select(".container")
  .append("svg")
  .attr("width", width + margin)
  .attr("height", height + margin);

let data = Array.from({ length: 30 }, () => ({ x: Math.random() * 100, y: Math.random() * 100 })); 

svg
  .selectAll("circle")
  .data(data)
  .join("circle")
  .attr("cx", d => d.x * 5 + 50)
  .attr("cy", d => 400 - (d.y * 3))
  .attr("r", 5)
  .attr("fill", d => d.y > 70 ? "green" : d.y < 35 ? "red" : "blue")
  .on("click", function(evt) {
    console.log(evt);
    console.log(`ok clicked on a circle`);
    
  })
