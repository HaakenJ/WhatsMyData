// Load the Visualization API and the corechart package.
google.charts.load("current", {
  packages: ["corechart"]
});

$.get("/api/devtype", (response) => {
  let chartData = [];
  response.forEach((record) => {
    let deviceData = [record.devType, record.no_devType];
    chartData.push(deviceData);
  });

  // Set a callback to run when the Google Visualization API is loaded.
  google.charts.setOnLoadCallback(drawChart);

  // Callback that creates and populates a data table,
  // instantiates the pie chart, passes in the data and
  // draws it.
  function drawChart() {
    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn("string", "Device-Type");
    data.addColumn("number", "NumberOfUsers");
    data.addRows(chartData);

    // Set chart options
    var options = {
      title: "What Devices Our Users Have",
      is3D: true,
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(
      document.getElementById("deviceType-chart")
    );
    chart.draw(data, options);
  }
});

$.get("/api/browser", (response) => {
  let chartData = [],
    objOfArrays = {};

  // Create an array in the proper format for each device type and 
  // add it to obj of arrays.
  response.forEach(record => {
    // If the device type hasn't been added to obj, then add 
    // it with blank values for all columns.
    if (!objOfArrays[record.devType]) {
      objOfArrays[record.devType] = [record.devType, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }
    // Depending on what browser is in the record, add that value
    // to the proper location in the array. 
    switch (record.browser) {
      case "Chrome":
        objOfArrays[record.devType][1] = record.no_browser;
        break;
      case "Mobile Safari":
        objOfArrays[record.devType][2] = record.no_browser;
        break;
      case "Firefox":
        objOfArrays[record.devType][3] = record.no_browser;
        break;
      case "Silk":
        objOfArrays[record.devType][4] = record.no_browser;
        break;
      case "Chrome WebView":
        objOfArrays[record.devType][5] = record.no_browser;
        break;
      case "Edge":
        objOfArrays[record.devType][6] = record.no_browser;
        break;
      case "Internet Explorer":
        objOfArrays[record.devType][7] = record.no_browser;
        break;
      case "Opera":
        objOfArrays[record.devType][8] = record.no_browser;
        break;
      default:
        objOfArrays[record.devType][9] = record.no_browser;
    }
  });

  // 
  for (let i = 0; i < Object.keys(objOfArrays).length; i++) {
    chartData[i] = objOfArrays[Object.keys(objOfArrays)[i]];
  };

  console.log(chartData);

  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {

    var data = google.visualization.arrayToDataTable([
      ['Browsers', 'Chrome', 'Mobile Safari', 'Firefox', 'Silk',
        'Chrome WebView', 'Edge', 'Internet Explorer', 'Opera', 'Other'], 
        chartData[0],
        chartData[1],
        chartData[2]
    ]);

    var options = {
      legend: {
        position: 'top',
        maxLines: 3
      },
      bar: {
        groupWidth: '75%'
      },
      isStacked: true,
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.ColumnChart(document.getElementById("browser-chart"));
    chart.draw(data, options);

  };
})