//basic line
// Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);
// var trace1 = {
//     labels: ["German Shepherd", "Sheltie", "Lab", "Golden Retriever",
//        "German Shorthair Pointer", "Belgian Malinois", "Doberman Pincher", "Irish Wolfhound"],
//    values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//    type: 'pie'
//   };
 
//   var data = [trace1];
 
//   var layout = {
//     title: "'Pie' Chart",
//   };
 
//   Plotly.newPlot("plotArea", data, layout);

// Basic Bar
//  var trace1 = {
//     x: ["German Shepherd", "Sheltie", "Lab", "Golden Retriever",
//        "German Shorthair Pointer", "Belgian Malinois", "Doberman Pincher", "Irish Wolfhound"],
//    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//    type: "bar"
//  };

//  var data = [trace1];

//  var layout = {
//   title: "'Bar' Chart",
//  };

// Plotly.newPlot("plotArea", data, layout);

// line chart
//  var trace1 = {
//     x: ["German Shepherd", "Sheltie", "Lab", "Golden Retriever",
//        "German Shorthair Pointer", "Belgian Malinois", "Doberman Pincher", "Irish Wolfhound"],
//    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//  };

//  var data = [trace1];

//  var layout = {
//   title: "'Line' Chart",
//  };

// Plotly.newPlot("plot", data, layout);
// created line
//  var trace1 = {
//     x: ["German Shepherd", "Sheltie", "Lab", "Golden Retriever",
//        "German Shorthair Pointer", "Belgian Malinois", "Doberman Pincher", "Irish Wolfhound"],
//    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     type: 'scatterplot'
//  };

//  var data = [trace1];

//  var layout = {
//   title: "'scatterplot' Chart",
//  };

// Plotly.newPlot("plotArea", data, layout);

// 12.1.3
// var trace = {
//     x: ["burrito", "pizza", "chicken"],
//     y: [10, 18, 5],
//     type: "bar"
// };

// var layout = {
//     title: "Luncheon Survey"
// };

// Plotly.newPlot("plotArea", [trace], layout);

// var trace = {
//     x: ["burrito", "pizza", "chicken"],
//     y: [10, 18, 5],
//     type: "bar"
// };
// var layout = {
//     title: "Luncheon Survey",
//     xaxis: {title: "Food Option"},
//     yaxis: {title: "Number of Respondents"}
// };
// Plotly.newPlot("plotArea", [trace], layout);

// var trace = {
//     x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//     y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     type: "bar"
//    };
//    var data = [trace];
//    var layout = {
//     title: "'Bar' Chart",
//     xaxis: {title: "Drinks"},
//     yaxis: {title: "% of Drinks Ordered"}
//    };
//    Plotly.newPlot("plotArea", data, layout);

// var trace = {
//     labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
//     "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//     values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     type: 'pie'
//    };
//    var data = [trace];
//    var layout = {
//     title: "'Pie' Chart",
//    };
//    Plotly.newPlot("plotArea", data, layout);

// From Plotly create a scatter plot with data lables on hover
// https://plotly.com/javascript/line-and-scatter/

// var trace1 = {
//     x: [1, 2, 3, 4, 5],
//     y: [1, 6, 3, 6, 1],
//     mode: 'markers',
//     type: 'scatter',
//     name: 'Team A',
//     text: ['A-1', 'A-2', 'A-3', 'A-4', 'A-5'],
//     marker: { size: 12 }
//   };
  
//   var trace2 = {
//     x: [1.5, 2.5, 3.5, 4.5, 5.5],
//     y: [4, 1, 7, 1, 4],
//     mode: 'markers',
//     type: 'scatter',
//     name: 'Team B',
//     text: ['B-a', 'B-b', 'B-c', 'B-d', 'B-e'],
//     marker: { size: 12 }
//   };
  
//   var data = [ trace1, trace2 ];
  
//   var layout = {
//     xaxis: {
//       range: [ 0.75, 5.25 ]
//     },
//     yaxis: {
//       range: [0, 8]
//     },
//     title:'Data Labels Hover'
//   };
  
//   Plotly.newPlot('plotArea', data, layout);

// Plotly scatterplot with color dimension
// https://plotly.com/javascript/line-and-scatter/
// var trace1 = {
//     y: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
//     mode: 'markers',
//     marker: {
//       size: 40,
//       color: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39]
//     }
//   };
  
//   var data = [trace1];
  
//   var layout = {
//     title: 'Scatter Plot with a Color Dimension'
//   };
  
//   Plotly.newPlot('plotArea', data, layout);












