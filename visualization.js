import * as d3 from "d3";

export {contributorsBySize}

function contributorsBySize(CONTRIBUTORS) {
  var norm = 3000000

  var g = d3.packSiblings(CONTRIBUTORS.results.map(function(item) {
    return {
      name: item.organization ? item.organization.name : item.individual.name,
      r: item.contributions_total * 1000 / norm
    }
  }))

  var width = 960,
    height = 550;

  var svg = d3.select("#contribution-vis").append("svg")
    .attr("width", width)
    .attr("height", height);


  var elems = svg
    .selectAll("g")
    .data(g);

  var elemsEnter = elems.enter()
    .append("g")

  elemsEnter
    .append("circle")
    .style("fill", function() {
      return "orange";
    })
      .attr("cx", function(d) {
      return d.x + 300;
    })
    .attr("cy", function(d) {
      return d.y + 300;
    })
  //    .attr("cx", function(d) { return Math.cos(d.angle) * (size / Math.SQRT2 + 30); })
  //    .attr("cy", function(d) { return Math.sin(d.angle) * (size / Math.SQRT2 + 30); })
    .attr("r", function(d) {
      return d.r - 0.25;
    })


  elemsEnter.append('text')
  .text((d) => d.r > 50 ? d.name || '.' : '')
     .attr("x", function(d) {
      return d.x + 300;
    })
    .attr("y", function(d) {
      return d.y + 300;
    })

  elemsEnter.each(function() {
    text = d3.select(this).selectAll("text")
  })

  var text = d3.selectAll("text")
  wrap(text)

  function wrap(text) {
    text.each(function(data) {
      var width = data.r*2
      var text = d3.select(this),
          words = text.text().split(/\s+/).reverse(),
          word,
          line = [],
          lineNumber = 0,
          lineHeight = 1.1, // ems
          y = text.attr("y"),
          x = text.attr("x"),
          dy = -0.3,
          tspan = text.text(null).append("tspan").attr("x", x).attr("y", y).attr("dy", dy + "em").attr("dx", -data.r);
      while (word = words.pop()) {
        line.push(word);
        tspan.text(line.join(" "));
        if (tspan.node().getComputedTextLength() > width) {
          line.pop();
          tspan.text(line.join(" "));
          line = [word];
          tspan = text.append("tspan").attr("x", x).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").attr("dx", -data.r).text(word);
        }
      }
    });
  }
}
