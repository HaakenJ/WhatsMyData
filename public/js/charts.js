$.get("/api/mapKey", (key) => {
  // Load the Visualization API, corecharts, and geocharts.
  // Load API key for map chart.
  google.charts.load("current", {
    packages: ["corechart", "geochart"],
    'mapsApiKey': key
  });

  // Request and code to create and display pie chart.
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


  // Request and code to create and display column chart.
  $.get("/api/browser", (response) => {

    let chartData = [
        ['devType', 'Chrome', 'Mobile Safari', 'Firefox', 'Silk',
          'Chrome WebView', 'Edge', 'Internet Explorer', 'Opera', 'Other'
        ]
      ],
      recordObject = {};


    // Loop through the three arrays contained in the reponse object.
    // Three represent the browsers used by PCs, tablets, and mobile phones.
    for (let i = 0; i < Object.keys(response).length; i++) {
      // Create an array in the proper format for each device type and 
      // add it to obj of arrays.
      response[Object.keys(response)[i]].forEach(record => {
        // If the device type hasn't been added to obj, then add 
        // it with blank values for all columns.
        if (!recordObject[record.devType]) {
          recordObject[record.devType] = [record.devType, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        }

        // Depending on what browser is in the record, add that value
        // to the proper location in the array. 
        switch (record.browser) {
          case "Chrome":
            recordObject[record.devType][1] = record.no_browser;
            break;
          case "Mobile Safari":
            recordObject[record.devType][2] = record.no_browser;
            break;
          case "Firefox":
            recordObject[record.devType][3] = record.no_browser;
            break;
          case "Silk":
            recordObject[record.devType][4] = record.no_browser;
            break;
          case "Chrome WebView":
            recordObject[record.devType][5] = record.no_browser;
            break;
          case "Edge":
            recordObject[record.devType][6] = record.no_browser;
            break;
          case "Internet Explorer":
            recordObject[record.devType][7] = record.no_browser;
            break;
          case "Opera":
            recordObject[record.devType][8] = record.no_browser;
            break;
          default:
            recordObject[record.devType][9] = record.no_browser;
        }
      });
    }


    // Add the arrays of data to the chartData array.
    for (let i = 0; i < Object.keys(recordObject).length; i++) {
      chartData[i + 1] = recordObject[Object.keys(recordObject)[i]];
    };

    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

      var data = google.visualization.arrayToDataTable(chartData);

      var options = {
        legend: {
          position: 'top',
          maxLines: 3
        },
        bar: {
          groupWidth: '75%'
        },
        isStacked: true
      };

      // Instantiate and draw our chart, passing in some options.
      var chart = new google.visualization.ColumnChart(document.getElementById("browser-chart"));
      chart.draw(data, options);

    };
  })



  // Request and code to create and display the world map chart.
  $.get("/api/location", (countryData) => {

    google.charts.setOnLoadCallback(drawRegionsMap);

    let chartData = [
      ["Country", "Popularity"]
    ];
    countryData.forEach((record) => {
      let newRow = [record.country, record.no_country];
      chartData.push(newRow);
    });

    function drawRegionsMap() {
      var data = google.visualization.arrayToDataTable(chartData);

      var options = {
        colorAxis: {
          colors: ['#aec4ff', '#a8bfff', '#7095fa', '#4375fc', '#4073ff', '#204dc9', '#062a8d']
        },
        datalessRegionColor: '#FFFFFF',
        defaultColor: '#f5f5f5'
      };

      var chart = new google.visualization.GeoChart(document.getElementById('regions-chart'));

      chart.draw(data, options);
    };
  })
});