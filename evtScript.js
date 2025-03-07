let fillcolour = "pink"
console.log(`evt script test`);


d3.select(".container")
    .attr("tabindex", 0) 
    .on("keydown", (evt) => {
      console.log(`ey pressed: ${evt.key} `);
    });

const svg = d3.select(".container")
  .append("svg");
  

 const circle = svg.append("circle")
  .attr('cx', 120)
  .attr('cy', 120)
  .attr('r', 30)
  .attr('fill', 'blue')
  .on("mouseout",   (e) => {circle.attr('fill', 'green'); 
                            console.log('item over'); } )
  .on("mouseenter", (evt) => {circle.attr('fill', 'blue'); 
                            console.log(evt); } )
  .on("click", () => {  console.log(`ok clicked`);




// .attr('width', 20)
// .attr('height', 100)
// .on("mouseenter", (e, d) => {fillcolour ="red"; 
//  svg.attr('fill', 'purple')
            // svg.transition().attr('x', 200)
            // .duration(3000)
            // .delay(3000)
            // .attr('y', 200)
            // .duration(3000)
  //           console.log("event", e);        //  element handled event
  //           console.log("datum", typeof(d))  //  element caught event);
  //               return fillcolour})
  // .on("mouseout",   (e) => {circle.attr('fill', 'green'); console.log('item over'); } )
  // .on("mouseenter", (e) => {circle.attr('fill', 'blue'); console.log('item over'); } )
  // .on("click", () => {
  //   console.log(`ok clicked`);
  //   svg.select('circle').transition().attr('r', 200)
  // })



// function mouseEnter(node){
//     d3.select(node)
//     	.attr("fill", "green");
// }
// function mouseOut(node){
//     d3.select(node)
//     	.attr("fill", "red");
// }

// d3.select(".container")
// .on("mousemove", function() {
//     let pos = d3.mouse(this);
//     d3.select(this)
//         .append("circle")
//         .attr("fill", "red")
//         .attr("r", 1.5)
//         .attr("cx", pos[0])
//         .attr("cy", pos[1]); 
 
});

