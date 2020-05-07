function getSelectedOption(){
  var node = d3.select('#dates').node()
  var i = node.selectedIndex
	if(node[i].value === "none") {
    alert("Invalid Selection, please try again");
    document.getElementsByTagName('h2')[0].style.display = 'unset';
	} else {
   return node[i].value;
}
}

function myFunction(){
  document.getElementsByTagName('h2')[0].style.display = 'none';
	var value = getSelectedOption();
	console.log("value = " + value);

  var margin = {top: 20, right: 20, bottom: 70, left: 40},
      width = 1000
      height = 600


  // set the ranges

  var x = d3.scale.ordinal().rangeRoundBands([0, width], .05);

  var y = d3.scale.linear().range([height, 0]);

  // define the axis
  var xAxis = d3.svg.axis()
      .scale(x)
      .orient("bottom")


  var yAxis = d3.svg.axis()
      .scale(y)
      .orient("left")
      .ticks(10);

      var tooltip = d3.select("body")
      	.append("div")
      	.style("position", "absolute")
      	.style("z-index", "10")
      	.style("visibility", "hidden")
      	.text("a simple tooltip");


  // add the SVG element
  d3.selectAll("svg").remove();
  var tooltip = d3.select("body").append("div").attr("class", "toolTip");
  var svg = d3.select("body").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");


            if (value == "incidents_85_99"){
            	d3.json("data/airline.json", function(error, data) {

            	    data.forEach(function(d) {
            	        d.airline = d.airline;
            	        d.incidents_85_99 = +d.incidents_85_99;
            	    });

            	  // scale the range of the data
            	  x.domain(data.map(function(d) { return d.airline; }));
            	  y.domain([0, d3.max(data, function(d) { return d.incidents_85_99; })]);

            	  // add axis
            	  svg.append("g")
            	      .attr("class", "x axis")
            	      .attr("transform", "translate(0," + height  + ")")
            	      .call(xAxis)
            	    .selectAll("text")
            	      .style("text-anchor", "end")
            	      .attr("dx", "-.8em")
            	      .attr("dy", "-.55em")
            	      .attr("transform", "rotate(-90)" );

            	  svg.append("g")
            	      .attr("class", "y axis")
            	      .call(yAxis)
            	    .append("text")
            	      .attr("transform", "rotate(-90)")
            	      .attr("y", 5)
            	      .attr("dy", ".71em")
            	      .style("text-anchor", "end")


                 svg.append("text")
                 .attr("x", (width / 2))
                 .attr("y", 5)
                 .attr("text-anchor", "middle")
                 .attr("font-family", "arial black")
                 .attr("fill", "black")
                 .style("text-decoration", "underline")
                 .style("font-size", "20px")
                 .text("Number of Airline Incidents 1985 - 1999");


            	  // Add bar chart
            	 svg.selectAll("bar")
            	      .data(data)
            	    .enter().append("rect")
            	      .attr("class", "bar")
            	      .attr("x", function(d) { return x(d.airline); })
            	      .attr("width", x.rangeBand())
            	      .attr("y", function(d) { return y(d.incidents_85_99); })
            	      .attr("height", function(d) { return height - y(d.incidents_85_99); })
                    .on("mousemove", function(d){
                      tooltip
                        .style("left", d3.event.pageX - 50 + "px")
                        .style("top", d3.event.pageY - 70 + "px")
                        .style("display", "inline-block")
                        .html((d.airline) + "<br>" + (d.incidents_85_99));
                      })
    		            .on("mouseout", function(d){ tooltip.style("display", "none");});




                   })
            } else if (value == "fatal_accidents_85_99" ){
            d3.json("data/airline.json", function(error, data) {

                data.forEach(function(d) {
                    d.airline = d.airline;
                    d.fatal_accidents_85_99 = +d.fatal_accidents_85_99;
                });

              // scale the range of the data
              x.domain(data.map(function(d) { return d.airline; }));
              y.domain([0, d3.max(data, function(d) { return d.fatal_accidents_85_99; })]);

              // add axis
              svg.append("g")
                  .attr("class", "x axis")
                  .attr("transform", "translate(0," + height + ")")
                  .call(xAxis)
                .selectAll("text")
                  .style("text-anchor", "end")
                  .attr("dx", "-.8em")
                  .attr("dy", "-.55em")
                  .attr("transform", "rotate(-90)" );

              svg.append("g")
                  .attr("class", "y axis")
                  .call(yAxis)
                .append("text")
                  .attr("transform", "rotate(-90)")
                  .attr("y", 5)
                  .attr("dy", ".71em")
                  .style("text-anchor", "end");


                  svg.append("text")
                  .attr("x", (width / 2))
                  .attr("y", 5)
                  .attr("text-anchor", "middle")
                  .attr("font-family", "arial black")
                  .attr("fill", "black")
                  .style("text-decoration", "underline")
                  .style("font-size", "20px")
                  .text("Number of Airline Fatal Accidents from 1985-1999");



              // Add bar chart
              svg.selectAll("bar")
                  .data(data)
                .enter().append("rect")
                  .attr("class", "bar")
                  .attr("x", function(d) { return x(d.airline); })
                  .attr("width", x.rangeBand())
                  .attr("y", function(d) { return y(d.fatal_accidents_85_99); })
                  .attr("height", function(d) { return height - y(d.fatal_accidents_85_99); })
                  .on("mousemove", function(d){
                    tooltip
                      .style("left", d3.event.pageX - 50 + "px")
                      .style("top", d3.event.pageY - 70 + "px")
                      .style("display", "inline-block")
                      .html((d.airline) + "<br>" + (d.fatal_accidents_85_99));
                  })
                  .on("mouseout", function(d){ tooltip.style("display", "none");});

            });
            } else if (value == "fatalities_85_99") {

            	d3.json("data/airline.json", function(error, data) {

            	    data.forEach(function(d) {
            	        d.airline = d.airline;
            	        d.fatalities_85_99 = +d.fatalities_85_99;
            	    });

            	  // scale the range of the data
            	  x.domain(data.map(function(d) { return d.airline; }));
            	  y.domain([0, d3.max(data, function(d) { return d.fatalities_85_99; })]);

            	  // add axis
            	  svg.append("g")
            	      .attr("class", "x axis")
            	      .attr("transform", "translate(0," + height + ")")
            	      .call(xAxis)
            	    .selectAll("text")
            	      .style("text-anchor", "end")
            	      .attr("dx", "-.8em")
            	      .attr("dy", "-.55em")
            	      .attr("transform", "rotate(-90)" );

            	  svg.append("g")
            	      .attr("class", "y axis")
            	      .call(yAxis)
            	    .append("text")
            	      .attr("transform", "rotate(-90)")
            	      .attr("y", 5)
            	      .attr("dy", ".71em")
            	      .style("text-anchor", "end");


                    svg.append("text")
                    .attr("x", (width / 2))
                    .attr("y", 5)
                    .attr("text-anchor", "middle")
                    .attr("font-family", "arial black")
                    .attr("fill", "black")
                    .style("text-decoration", "underline")
                    .style("font-size", "20px")
                    .text("Number of Airline Fataities from 1985-1999");



            	  // Add bar chart
            	  svg.selectAll("bar")
            	      .data(data)
            	    .enter().append("rect")
            	      .attr("class", "bar")
            	      .attr("x", function(d) { return x(d.airline); })
            	      .attr("width", x.rangeBand())
            	      .attr("y", function(d) { return y(d.fatalities_85_99); })
            	      .attr("height", function(d) { return height - y(d.fatalities_85_99); })
                    .on("mousemove", function(d){
                      tooltip
                        .style("left", d3.event.pageX - 50 + "px")
                        .style("top", d3.event.pageY - 70 + "px")
                        .style("display", "inline-block")
                        .html((d.airline) + "<br>" + (d.fatalities_85_99));
                    })
                    .on("mouseout", function(d){ tooltip.style("display", "none");});

            	});

            } else if (value == "incidents_00_14")  {

            	d3.json("data/airline.json", function(error, data) {

            			data.forEach(function(d) {
            					d.airline = d.airline;
            					d.incidents_00_14 = +d.incidents_00_14;
            			});

            		// scale the range of the data
            		x.domain(data.map(function(d) { return d.airline; }));
            		y.domain([0, d3.max(data, function(d) { return d.incidents_00_14; })]);

            		// add axis
            		svg.append("g")
            				.attr("class", "x axis")
            				.attr("transform", "translate(0," + height + ")")
            				.call(xAxis)
            			.selectAll("text")
            				.style("text-anchor", "end")
            				.attr("dx", "-.8em")
            				.attr("dy", "-.55em")
            				.attr("transform", "rotate(-90)" );

            		svg.append("g")
            				.attr("class", "y axis")
            				.call(yAxis)
            			.append("text")
            				.attr("transform", "rotate(-90)")
            				.attr("y", 5)
            				.attr("dy", ".71em")
            				.style("text-anchor", "end");



                    svg.append("text")
                    .attr("x", (width / 2))
                    .attr("y", 5)
                    .attr("text-anchor", "middle")
                    .attr("font-family", "arial black")
                    .attr("fill", "black")
                    .style("text-decoration", "underline")
                    .style("font-size", "20px")
                    .text("Number of Airline Incidents from 2000-2014");


            		// Add bar chart
            		svg.selectAll("bar")
            				.data(data)
            			.enter().append("rect")
            				.attr("class", "bar")
            				.attr("x", function(d) { return x(d.airline); })
            				.attr("width", x.rangeBand())
            				.attr("y", function(d) { return y(d.incidents_00_14); })
            				.attr("height", function(d) { return height - y(d.incidents_00_14); })
                    .on("mousemove", function(d){
                      tooltip
                        .style("left", d3.event.pageX - 50 + "px")
                        .style("top", d3.event.pageY - 70 + "px")
                        .style("display", "inline-block")
                        .html((d.airline) + "<br>" + (d.incidents_00_14));
                    })
                    .on("mouseout", function(d){ tooltip.style("display", "none");});

            	});

            } else if (value == "fatal_accidents_00_14") {
            	d3.json("data/airline.json", function(error, data) {

            	    data.forEach(function(d) {
            	        d.airline = d.airline;
            	        d.fatal_accidents_00_14 = +d.fatal_accidents_00_14;
            	    });

            	  // scale the range of the data
            	  x.domain(data.map(function(d) { return d.airline; }));
            	  y.domain([0, d3.max(data, function(d) { return d.fatal_accidents_00_14; })]);

            	  // add axis
            	  svg.append("g")
            	      .attr("class", "x axis")
            	      .attr("transform", "translate(0," + height + ")")
            	      .call(xAxis)
            	    .selectAll("text")
            	      .style("text-anchor", "end")
            	      .attr("dx", "-.8em")
            	      .attr("dy", "-.55em")
            	      .attr("transform", "rotate(-90)" );

            	  svg.append("g")
            	      .attr("class", "y axis")
            	      .call(yAxis)
            	    .append("text")
            	      .attr("transform", "rotate(-90)")
            	      .attr("y", 5)
            	      .attr("dy", ".71em")
            	      .style("text-anchor", "end");


                    svg.append("text")
                    .attr("x", (width / 2))
                    .attr("y", 5)
                    .attr("text-anchor", "middle")
                    .attr("font-family", "arial black")
                    .attr("fill", "black")
                    .style("text-decoration", "underline")
                    .style("font-size", "20px")
                    .text("Number of Airline Fatal Accidents from 2000-2014");


            	  // Add bar chart
            	  svg.selectAll("bar")
            	      .data(data)
            	    .enter().append("rect")
            	      .attr("class", "bar")
            	      .attr("x", function(d) { return x(d.airline); })
            	      .attr("width", x.rangeBand())
            	      .attr("y", function(d) { return y(d.fatal_accidents_00_14); })
            	      .attr("height", function(d) { return height - y(d.fatal_accidents_00_14); })
                    .on("mousemove", function(d){
                      tooltip
                        .style("left", d3.event.pageX - 50 + "px")
                        .style("top", d3.event.pageY - 70 + "px")
                        .style("display", "inline-block")
                        .html((d.airline) + "<br>" + (d.fatal_accidents_00_14));
                    })
                    .on("mouseout", function(d){ tooltip.style("display", "none");});

            	});
            } else if (value == "fatalities_00_14") {

            	d3.json("data/airline.json", function(error, data) {

            			data.forEach(function(d) {
            					d.airline = d.airline;
            					d.fatalities_00_14 = +d.fatalities_00_14;
            			});

            		// scale the range of the data
            		x.domain(data.map(function(d) { return d.airline; }));
            		y.domain([0, d3.max(data, function(d) { return d.fatalities_00_14; })]);

            		// add axis
            		svg.append("g")
            				.attr("class", "x axis")
            				.attr("transform", "translate(0," + height + ")")
            				.call(xAxis)
            			.selectAll("text")
            				.style("text-anchor", "end")
            				.attr("dx", "-.8em")
            				.attr("dy", "-.55em")
            				.attr("transform", "rotate(-90)" );

            		svg.append("g")
            				.attr("class", "y axis")
            				.call(yAxis)
            			.append("text")
            				.attr("transform", "rotate(-90)")
            				.attr("y", 5)
            				.attr("dy", ".71em")
            				.style("text-anchor", "end");



                    svg.append("text")
                    .attr("x", (width / 2))
                    .attr("y", 5)
                    .attr("text-anchor", "middle")
                    .attr("font-family", "arial black")
                    .attr("fill", "black")
                    .style("text-decoration", "underline")
                    .style("font-size", "20px")
                    .text("Number of Airline Fatalities from 2000-2014");


            		// Add bar chart
            		svg.selectAll("bar")
            				.data(data)
            			.enter().append("rect")
            				.attr("class", "bar")
            				.attr("x", function(d) { return x(d.airline); })
            				.attr("width", x.rangeBand())
            				.attr("y", function(d) { return y(d.fatalities_00_14); })
            				.attr("height", function(d) { return height - y(d.fatalities_00_14); })
                    .on("mousemove", function(d){
                      tooltip
                        .style("left", d3.event.pageX - 50 + "px")
                        .style("top", d3.event.pageY - 70 + "px")
                        .style("display", "inline-block")
                        .html((d.airline) + "<br>" + (d.fatalities_00_14));
                    })
                    .on("mouseout", function(d){ tooltip.style("display", "none");});

            	});

            } if (value == "fatal_per_km"){
            	d3.json("data/airline.json", function(error, data) {

            	    data.forEach(function(d) {
            	        d.airline = d.airline;
            	        d.fatal_per_km = +d.fatal_per_km;
            	    });

            	  // scale the range of the data
            	  x.domain(data.map(function(d) { return d.airline; }));
            	  y.domain([0, d3.max(data, function(d) { return d.fatal_per_km; })]);

            	  // add axis
            	  svg.append("g")
            	      .attr("class", "x axis")
            	      .attr("transform", "translate(0," + height + ")")
            	      .call(xAxis)
            	    .selectAll("text")
            	      .style("text-anchor", "end")
            	      .attr("dx", "-.8em")
            	      .attr("dy", "-.55em")
            	      .attr("transform", "rotate(-90)" );

            	  svg.append("g")
            	      .attr("class", "y axis")
            	      .call(yAxis)
            	    .append("text")
            	      .attr("transform", "rotate(-90)")
            	      .attr("y", 5)
            	      .attr("dy", ".71em")
            	      .style("text-anchor", "end")

                  svg.append("text")
                    .attr("x", (width / 2))
                    .attr("y", 5)
                    .attr("text-anchor", "middle")
                    .attr("font-family", "arial black")
                    .attr("fill", "black")
                    .style("text-decoration", "underline")
                    .style("font-size", "20px")
                    .text("Number of Fatal Accidents per KM");



            	  // Add bar chart
            	  svg.selectAll("bar")
            	      .data(data)
            	    .enter().append("rect")
            	      .attr("class", "bar")
            	      .attr("x", function(d) { return x(d.airline); })
            	      .attr("width", x.rangeBand())
            	      .attr("y", function(d) { return y(d.fatal_per_km); })
            	      .attr("height", function(d) { return height - y(d.fatal_per_km); })
                    .on("mousemove", function(d){
                      tooltip
                        .style("left", d3.event.pageX - 50 + "px")
                        .style("top", d3.event.pageY - 70 + "px")
                        .style("display", "inline-block")
                        .html((d.airline) + "<br>" + (d.fatal_per_km));
                    })
                    .on("mouseout", function(d){ tooltip.style("display", "none");});

            	});
            }
          }
