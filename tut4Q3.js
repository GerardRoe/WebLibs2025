const data = [
  { name: "Leo", score: 32 },
  { name: "Joe", score: 6 },
  { name: "Moe", score: 9 },
  { name: "Eve", score: 14 },
  { name: "Jol", score: 54 },
  { name: "Ken", score: 28 },
];

const svg = d3.select(".container");
const chartHeight = 300;
const barWidth = 20;
const spacing = 10; 

svg.append("svg").attr("width", "400").attr("height", "400");
// const barWidth = 40;  
const barSpacing = 2;  
const baseline = 200


svg
  .select("svg")
  .selectAll("rect")
  .data(data)
  .join("rect")
  .attr("width", 40)
  .attr("height", (d) => d.score)
  .attr("fill", (d, i) => (d < 40 ? "red" : "steelblue"))
  .attr("x", (d, i) => i * 42)
  .attr("y", (d, i) => 200 - d.score)

  .append("text")
  .attr("x", (d, i) => i * (barWidth + spacing) + barWidth / 2)
  .attr("y", chartHeight + 25)
  .text((d, i) => {
    console.log(`${d.name}  
                ${i * (barWidth + spacing) + barWidth / 2}
                ${chartHeight}`);
    return d.name;
  });


    svg.selectAll("text")
      .data(data)
      .join("text")
      .attr("x", (d, i) => i * (barWidth + barSpacing) + barWidth / 2)
      .attr("y", baseline + 20)
      .attr("text-anchor", "middle")
      .text(d => {   console.log(`${d.name} ${d.score}`) ;return d.name });


// svg
//   .select("svg")
//   .selectAll("rect")
//   .data(data)
//   .join("rect")
//   .attr("width", 40)
//   .attr("height", (d) => d.score)
//   .attr("fill", (d, i) => (d < 40 ? "red" : "steelblue"))
//   .attr("x", (d, i) => i * 42)
//   .attr("y", (d, i) => 200 - d.score)

//   .append("text")
//   .attr("x", (d, i) => i * (barWidth + spacing) + barWidth / 2)
//   .attr("y", chartHeight + 25) // Position text 5px above the bottom edge
//   .text((d, i) => {
//     console.log(`${d.name}  
//                 ${i * (barWidth + spacing) + barWidth / 2}
//                 ${chartHeight}`);
//     return d.name;
//   });
// The y-position is chartHeight minus the bar's height so that it grows upward.

//.attr("y", 200 - mark)
