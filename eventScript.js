//let svg = d3.select('div').append('svg')
const height = 400;
const width = 400;
const margin = { top: 20, bottom: 20, left: 20, right: 20 }

const svg = d3.select(".container")
    .append("svg")
    .attr("width", width - margin.left - margin.right)
    .attr("height", height - margin.top - margin.bottom)
    .attr("viewBox", [0, 0, width, height])
    .style("border", "1px solid black");

const circle = svg.append('circle')
    .attr('cx', 20)
    .attr('cy', 20)
    .attr('r', 10)

circle.transition()
    .attr("cx", 350)
    .duration(3000)
    .attr('fill', 'green')
    .delay(5000) // wait for 5 secs
    .transition() // second transition
    .attr("cy", 350)
    .duration(3000)
    .attr('fill', 'red')


svg.append('rect')
    .attr('x', -30)
    .attr('y', -30)
    .attr('height', 10)
    .attr('width', 10)
    .transition()
    .duration(2000)
    .attr("width", "20")

function startAnimation() {
    circle.transition()
    .attr("cx", 300)
    .duration(3000)
    .attr('fill', 'green')
    .transition()
    .attr("cy", 300)
    .duration(5000)
    .attr('fill', 'red')
}

//startAnimation()