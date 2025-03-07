//  datasets:
let data1 = [50, 100, 200]
let data2 = [170, 30, 130, 390, 150]


const height = 400;
const width = 600;
const margin = { top: 20, bottom: 20, left: 20, right: 20 }

const svg = d3.select(".container")
    .append("svg")
    .attr("width", width - margin.left - margin.right)
    .attr("height", height - margin.top - margin.bottom)
    .attr("viewBox", [0, 0, width, height])
    .style("border", "1px solid black");


svg.selectAll("circle")
    .data(data1)
    .join("circle")
    .attr("cx", function (d) { return d })
    .attr("cy", 150)
    .attr("r", 10)
    .attr('fill', 'red')

// A function that switch to the second dataset:
function startAnimation() {

    let dataSet2 = svg.selectAll("circle")
        .data(data2)

    dataSet2.enter()
        .append("circle") // Add a new circle for each new elements
        .merge(dataSet2) // mergw with  existing elements 
        .transition() //
        .duration(5000)
        .attr("cx", function (d) { return d })
        .attr("cy", 150)
        .attr("r", 40)
}

startAnimation()