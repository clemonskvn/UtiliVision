angular.module('d3', []).factory('d3Service', [function () {
    'use strict';
    var margin = {top: 80, right: 80, bottom: 80, left: 80},
        width = 960 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom,
        parse = d3.time.format("%b %Y").parse,
    // Scales and axes. Note the inverted domain for the y-scale: bigger is up!
        x = d3.time.scale().range([0, width]),
        y = d3.scale.linear().range([height, 0]),
        xAxis = d3.svg.axis().scale(x).tickSize(-height).tickSubdivide(true),
        yAxis = d3.svg.axis().scale(y).ticks(4).orient("right"),
    // An area generator, for the light fill.
        area = d3.svg.area()
            .interpolate("monotone")
            .x(function (d) { return x(d.Time); })
            .y0(height)
            .y1(function (d) { return y(d.SAIDI); }),
    // A line generator, for the dark stroke.
        line = d3.svg.line()
            .interpolate("monotone")
            .x(function (d) { return x(d.Time); })
            .y(function (d) { return y(d.SAIDI); }),
        d3;

    d3.json("resources/dailyOutageTrending.json", function (error, data) {
        var time = data.Time, SAIDI = data.SAIDI;
        console.log("time: " + time);
        console.log("SAIDI: " + SAIDI);
        /*
      // Filter to one symbol; the S&P 500.
      var values = data.filter(function (d) {
        return d.symbol == "AMZN";;
      });

      var msft = data.filter(function (d) {
        return d.symbol == "MSFT";
      });

      var ibm = data.filter(function (d) {
        return d.symbol == 'IBM';
      });

      // Compute the minimum and maximum date, and the maximum price.
        x.domain([time[0], time[time.length - 1]]);
        y.domain([0, d3.max(values, function (d) { return d; })]).nice();

          // Add an SVG element with the desired dimensions and margin.
          var svg = d3.select("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
            .append("g")
              .attr("transform", "translate(" + margin.left + "," + margin.top + ")")

          // Add the clip path.
          svg.append("clipPath")
              .attr("id", "clip")
            .append("rect")
              .attr("width", width)
              .attr("height", height);

          // Add the x-axis.
          svg.append("g")
              .attr("class", "x axis")
              .attr("transform", "translate(0," + height + ")")
              .call(xAxis);

          // Add the y-axis.
          svg.append("g")
              .attr("class", "y axis")
              .attr("transform", "translate(" + width + ",0)")
              .call(yAxis);


          var colors = d3.scale.category10();
          svg.selectAll('.line')
            .data([SAIDI])
            .enter()
              .append('path')
                .attr('class', 'line')
                .style('stroke', function (d) {
                  return colors(Math.random() * 50);
                })
                .attr('clip-path', 'url(#clip)')
                .attr('d', function (d) {
                  return line(d);
                })
    */
          /* Add 'curtain' rectangle to hide entire graph */
    /*      var curtain = svg.append('rect')
            .attr('x', -1 * width)
            .attr('y', -1 * height)
            .attr('height', height)
            .attr('width', width)
            .attr('class', 'curtain')
            .attr('transform', 'rotate(180)')
            .style('fill', '#ffffff')
    */
          /* Optionally add a guideline */
    /*      var guideline = svg.append('line')
            .attr('stroke', '#333')
            .attr('stroke-width', 0)
            .attr('class', 'guide')
            .attr('x1', 1)
            .attr('y1', 1)
            .attr('x2', 1)
            .attr('y2', height)
    */
          /* Create a shared transition for anything we're animating */
    /*      var t = svg.transition()
            .delay(750)
            .duration(6000)
            .ease('linear')
            .each('end', function () {
              d3.select('line.guide')
                .transition()
                .style('opacity', 0)
                .remove()
            });

          t.select('rect.curtain')
            .attr('width', 0);
          t.select('line.guide')
            .attr('transform', 'translate(' + width + ', 0)')

          d3.select("#show_guideline").on("change", function (e) {
            guideline.attr('stroke-width', this.checked ? 1 : 0);
            curtain.attr("opacity", this.checked ? 0.75 : 1);
          })*/

    });
}]);