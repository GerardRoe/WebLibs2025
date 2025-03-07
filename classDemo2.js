const height = 600;
const width = 900;
const margin = { top: 40, bottom: 40, left: 100, right: 40 }


let trans = d3.transition()
    .delay(1000)
    .duration(2000)

const xAccessor = (d) => d.Audience_score
const yAccessor = (d) => d.Rotten_Tomatoes

console.log(yAccessor);


async function scatterPlot() {
    // get the data
    const dataset = await d3.csv('data/movies.csv')
    console.log(dataset);

    const xScale = d3.scaleLinear()
        .domain(d3.extent(dataset, (d) => d.Audience_score))
        .range([0, width - margin.left - margin.right]);
    console.log(xScale(88));

    const yScale = d3.scaleLinear()
        .domain(d3.extent(dataset, (d) => d.Rotten_Tomatoes))
        .range([height - margin.top - margin.bottom, 0]);


    const svg = d3.select(".container")
        .append("svg")
        .attr("width", width - margin.left - margin.right)
        .attr("height", height - margin.top - margin.bottom)
        .attr("viewBox", [0, 0, width, height])
        .style("border", "1px solid black");

    canvas = svg.append('g')
        .attr('transform', `translate(${margin.left}, ${margin.top})`)


    const tooltip = d3.select(".tooltip").style("opacity", 0);

    canvas.selectAll('circle')
        .data(dataset)
        .join('circle')
        .attr('cx', d => xScale(xAccessor(d)))
        .attr('cy', d => yScale(yAccessor(d)))
        .attr('r', 10)
        .attr("fill", "silver")
        .on("mouseover",  (event, d) => {
            const mouseX = event.pageX;
            const mouseY = event.pageY;
        
            tooltip
              .style("opacity", 1)
              .style("left", mouseX + 10 + "px")
              .style("top", mouseY - 10 + "px")
              .html(`Audience: ${d.Audience_score} <br> Rotten Tomatoes: ${d.Rotten_Tomatoes}`);
        })
        .on("mouseout",  () => {
            tooltip.style("opacity", 0);
        });


    const xAxis = d3.axisBottom(xScale)

    const xAxisAudience = canvas.append('g')
        .call(xAxis)
        .style('transform', `translateY(${height - margin.bottom - margin.top}px)`)
    
    const yAxis = d3.axisLeft(yScale);

canvas.append("g")
    .call(yAxis)
    .attr("font-size", "12px");


    xAxisAudience.append('text')
        .attr('x', width / 2)
        .attr('y', margin.bottom - 20)
        .attr('fill', 'black')
        .text('Audience Score')
}

scatterPlot()


    // canvas.append('circle')
    //     .attr('r', 20);

    // canvas.selectAll('circle')
    //     .data(dataset)
    //     .join('circle')
    //     .attr('cx', d => xScale((d) => d.Audience_score))
    //     .attr('cy', d => yScale((d) => d.Rotten_Tomatoes))
    //     .attr('r', 5)

    // scales
    // set scale range
    // const xScale = d3.scaleBand()
    //     .domain(d3.range(data.length))
    //     .range([margin.left, width - margin.right])
    //     .padding(0.1)


    // const yScale = d3.scaleLinear()
    //     .domain([0,  max])
    //     .range([height - margin.bottom, margin.top]);

    // svg.append('g')
    //     .selectAll('rect')
    //     .data(data)
    //     .join('rect')
    //     .attr('x', (d, i) => { console.log("xScale(i) = " + xScale(i)); return +xScale(i)})
    //     .transition()
    //     .duration(800)
    //     .attr('y', d => yScale(d.score) )
    //     .attr('height', d => yScale(0) - yScale(d.score) )
    //     .attr('width', xScale.bandwidth())
    //     .attr('fill', 'red')
    //     .attr('class', 'highLight')

    //     // add text at the bottom
    // function xAxis(g) {
    //     g.call(d3.axisBottom(xScale)
    //             .tickFormat( i => data[i].name))
    // }

    // function yAxis(g) {
    //     g.call(d3.axisLeft(yScale)
    //             .ticks( null, data.format))
    //             .attr('font-size', '12px')
    // }

    // svg.append("g")
    //     .attr("transform", `translate(0, ${height - margin.bottom})`)
    //     .call(xAxis);
    // //     //.call(xAxis.ticks(d3.timeWeek));
    // //     //.call(xAxis.ticks(d3.timeYear));

    // svg.append("g")
    //     .attr("transform", `translate(${margin.left}, 0 )`)
    //     .call(yAxis);
//}
