// Load the Visualization API and the corechart package.
google.charts.load("current", {
  packages: ["corechart"]
});

$.get("/api/devtype", (data) => {
  console.log(data);
});

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {
  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn("string", "Device-Type");
  data.addColumn("number", "NumberOfUsers");
  data.addRows([
    ["PC", 43],
    ["Mobile", 65],
    ["Tablet", 23]
  ]);

  // Set a callback to run when the Google Visualization API is loaded.
  google.charts.setOnLoadCallback(drawChart);

  // Set chart options
  var options = {
    title: "What Kinds of Devices Our Users Visit With",
    width: 500,
    height: 400
  };

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(
    document.getElementById("chart_div")
  );
  chart.draw(data, options);
}