const svg = d3.select(".container").append("svg");

let myCircle = svg
  .append("circle")
  .attr("cx", 50)
  .attr("cy", 50)
  .attr("r", 25)
  .attr("stroke", "black");

let changeColor = function (color) {
  myCircle.style("fill", color);
};

function changeSize() {
  console.log(this.value);
  myCircle.attr("r", this.value);
}

d3.select("#age").on("input", changeSize);
