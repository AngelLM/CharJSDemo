var color = Chart.helpers.color;
var ThingiverseViews = [];
var ThingiverseViewsTime = [];
var ThingiverseViewsArray = [];

var ThingiverseDownloads = [];
var ThingiverseDownloadsTime = [];
var ThingiverseDownloadsArray = [];

var ThingiverseLikes = [];
var ThingiverseLikesTime = [];
var ThingiverseLikesArray = [];

var ThingiverseCollects = [];
var ThingiverseCollectsTime = [];
var ThingiverseCollectsArray = [];

var ThingiverseMakes = [];
var ThingiverseMakesTime = [];
var ThingiverseMakesArray = [];

var ThingiverseRemixes = [];
var ThingiverseRemixesTime = [];
var ThingiverseRemixesArray = [];

var ThingiverseComments = [];
var ThingiverseCommentsTime = [];
var ThingiverseCommentsArray = [];

var scatterChartData = {
    datasets: [{
        label: "Thingiverse Views",
        borderColor: window.chartColors.blue,
        backgroundColor: color(window.chartColors.blue).alpha(0.2).rgbString(),
        data: ThingiverseViewsArray
    },{
        label: "Thingiverse Downloads",
        borderColor: window.chartColors.orange,
        backgroundColor: color(window.chartColors.orange).alpha(0.2).rgbString(),
        data: ThingiverseDownloadsArray
    },{
        label: "Thingiverse Likes",
        borderColor: window.chartColors.green,
        backgroundColor: color(window.chartColors.green).alpha(0.2).rgbString(),
        data: ThingiverseLikesArray
    },{
        label: "Thingiverse Collects",
        borderColor: window.chartColors.red,
        backgroundColor: color(window.chartColors.red).alpha(0.2).rgbString(),
        data: ThingiverseCollectsArray
    },{
        label: "Thingiverse Makes",
        borderColor: window.chartColors.purple,
        backgroundColor: color(window.chartColors.red).alpha(0.2).rgbString(),
        data: ThingiverseMakesArray
    },{
        label: "Thingiverse Remixes",
        borderColor: window.chartColors.red,
        backgroundColor: color(window.chartColors.red).alpha(0.2).rgbString(),
        data: ThingiverseRemixesArray
    },{
        label: "Thingiverse Comments",
        borderColor: window.chartColors.purple,
        backgroundColor: color(window.chartColors.red).alpha(0.2).rgbString(),
        data: ThingiverseCommentsArray
    },
    ]
};

window.onload = function() {
    var ctx = document.getElementById("canvas").getContext("2d");
    window.myScatter = Chart.Scatter(ctx, {
        data: scatterChartData,
        options: {
           scales:{
             xAxes: [{
                  type: 'time',
                  time: {
                    format: "HH:mm",
                    unit: 'hour',
                    unitStepSize: 1,
                    displayFormats: {
                      'minute': 'HH:mm',
                      'hour': 'HH:mm',
                    },
                    }
                }],
            yAxes: [{
              display: true,
              ticks: {
                  //suggestedMin: 0,
                  //beginAtZero: true
              }
          }]
              },
            title: {
                display: true,
                fontSize: 20,
                text: 'Thingiverse Stats - Daily'
            },
            legend: {
                display: true,
                position: 'bottom'
            }
        }
    });

    ThingiverseViews = [];
    ThingiverseViewsTime = [];
    ThingiverseViewsArray = [];

    ThingiverseDownloads = [];
    ThingiverseDownloadsTime = [];
    ThingiverseDownloadsArray = [];

    ThingiverseLikes = [];
    ThingiverseLikesTime = [];
    ThingiverseLikesArray = [];

    ThingiverseCollects = [];
    ThingiverseCollectsTime = [];
    ThingiverseCollectsArray = [];

    ThingiverseMakes = [];
    ThingiverseMakesTime = [];
    ThingiverseMakesArray = [];

    ThingiverseRemixes = [];
    ThingiverseRemixesTime = [];
    ThingiverseRemixesArray = [];

    ThingiverseComments = [];
    ThingiverseCommentsTime = [];
    ThingiverseCommentsArray = [];

    fetch('js/logs/daily.txt')
      .then(yt => yt.text())
      .then(content => {
        let lines = content.split(/\n/);
        lines.forEach(function(line){
          let stats = line.split('-');
          if (stats[0]=='Thingiverse'){
            if (stats[1]=='Views'){
              ThingiverseViews.push(stats[2]);
              ThingiverseViewsTime.push(stats[3]);
            };
            if (stats[1]=='Downloads'){
              ThingiverseDownloads.push(stats[2]);
              ThingiverseDownloadsTime.push(stats[3]);
            };
            if (stats[1]=='Likes'){
              ThingiverseLikes.push(stats[2]);
              ThingiverseLikesTime.push(stats[3]);
            };
            if (stats[1]=='Collects'){
              ThingiverseCollects.push(stats[2]);
              ThingiverseCollectsTime.push(stats[3]);
            };
            if (stats[1]=='Makes'){
              ThingiverseMakes.push(stats[2]);
              ThingiverseMakesTime.push(stats[3]);
            };
            if (stats[1]=='Remixes'){
              ThingiverseRemixes.push(stats[2]);
              ThingiverseRemixesTime.push(stats[3]);
            };
            if (stats[1]=='Comments'){
              ThingiverseComments.push(stats[2]);
              ThingiverseCommentsTime.push(stats[3]);
            };
          };
        });
        for (var i = 0; i<ThingiverseViews.length; i++){
          var obj = {x:ThingiverseViewsTime[i],y:ThingiverseViews[i]};
          ThingiverseViewsArray.push(obj);
        };
        for (var i = 0; i<ThingiverseDownloads.length; i++){
          var obj = {x:ThingiverseDownloadsTime[i],y:ThingiverseDownloads[i]};
          ThingiverseDownloadsArray.push(obj);
        };
        for (var i = 0; i<ThingiverseLikes.length; i++){
          var obj = {x:ThingiverseLikesTime[i],y:ThingiverseLikes[i]};
          ThingiverseLikesArray.push(obj);
        };
        for (var i = 0; i<ThingiverseCollects.length; i++){
          var obj = {x:ThingiverseCollectsTime[i],y:ThingiverseCollects[i]};
          ThingiverseCollectsArray.push(obj);
        };
        for (var i = 0; i<ThingiverseMakes.length; i++){
          var obj = {x:ThingiverseMakesTime[i],y:ThingiverseMakes[i]};
          ThingiverseMakesArray.push(obj);
        };
        for (var i = 0; i<ThingiverseRemixes.length; i++){
          var obj = {x:ThingiverseRemixesTime[i],y:ThingiverseRemixes[i]};
          ThingiverseRemixesArray.push(obj);
        };
        for (var i = 0; i<ThingiverseComments.length; i++){
          var obj = {x:ThingiverseCommentsTime[i],y:ThingiverseComments[i]};
          ThingiverseCommentsArray.push(obj);
        };
        scatterChartData.datasets[0].data = ThingiverseViewsArray;
        scatterChartData.datasets[1].data = ThingiverseDownloadsArray;
        scatterChartData.datasets[2].data = ThingiverseLikesArray;
        scatterChartData.datasets[3].data = ThingiverseCollectsArray;
        scatterChartData.datasets[4].data = ThingiverseMakesArray;
        scatterChartData.datasets[5].data = ThingiverseRemixesArray;
        scatterChartData.datasets[6].data = ThingiverseCommentsArray;
        window.myScatter.update();
      });
};

document.getElementById('dailyData').addEventListener('click', function() {
  myScatter.destroy();
  var ctx = document.getElementById("canvas").getContext("2d");
  window.myScatter = Chart.Scatter(ctx, {
      data: scatterChartData,
      options: {
         scales:{
           xAxes: [{
                type: 'time',
                time: {
                  format: "HH:mm",
                  unit: 'hour',
                  unitStepSize: 1,
                  displayFormats: {
                    'minute': 'HH:mm',
                    'hour': 'HH:mm',
                  },
                  }
              }],
          yAxes: [{
            display: true,
            ticks: {
                //suggestedMin: 0,
                //beginAtZero: true
            }
        }]
            },
          title: {
              display: true,
              fontSize: 20,
              text: 'Thingiverse Stats - Daily'
          },
          legend: {
              display: true,
              position: 'bottom'
          }
      }
  });

  ThingiverseViews = [];
  ThingiverseViewsTime = [];
  ThingiverseViewsArray = [];

  ThingiverseDownloads = [];
  ThingiverseDownloadsTime = [];
  ThingiverseDownloadsArray = [];

  ThingiverseLikes = [];
  ThingiverseLikesTime = [];
  ThingiverseLikesArray = [];

  ThingiverseCollects = [];
  ThingiverseCollectsTime = [];
  ThingiverseCollectsArray = [];

  ThingiverseMakes = [];
  ThingiverseMakesTime = [];
  ThingiverseMakesArray = [];

  ThingiverseRemixes = [];
  ThingiverseRemixesTime = [];
  ThingiverseRemixesArray = [];

  ThingiverseComments = [];
  ThingiverseCommentsTime = [];
  ThingiverseCommentsArray = [];

  fetch('js/logs/daily.txt')
    .then(yt => yt.text())
    .then(content => {
      let lines = content.split(/\n/);
      lines.forEach(function(line){
        let stats = line.split('-');
        if (stats[0]=='Thingiverse'){
          if (stats[1]=='Views'){
            ThingiverseViews.push(stats[2]);
            ThingiverseViewsTime.push(stats[3]);
          };
          if (stats[1]=='Downloads'){
            ThingiverseDownloads.push(stats[2]);
            ThingiverseDownloadsTime.push(stats[3]);
          };
          if (stats[1]=='Likes'){
            ThingiverseLikes.push(stats[2]);
            ThingiverseLikesTime.push(stats[3]);
          };
          if (stats[1]=='Collects'){
            ThingiverseCollects.push(stats[2]);
            ThingiverseCollectsTime.push(stats[3]);
          };
          if (stats[1]=='Makes'){
            ThingiverseMakes.push(stats[2]);
            ThingiverseMakesTime.push(stats[3]);
          };
          if (stats[1]=='Remixes'){
            ThingiverseRemixes.push(stats[2]);
            ThingiverseRemixesTime.push(stats[3]);
          };
          if (stats[1]=='Comments'){
            ThingiverseComments.push(stats[2]);
            ThingiverseCommentsTime.push(stats[3]);
          };
        };
      });
      for (var i = 0; i<ThingiverseViews.length; i++){
        var obj = {x:ThingiverseViewsTime[i],y:ThingiverseViews[i]};
        ThingiverseViewsArray.push(obj);
      };
      for (var i = 0; i<ThingiverseDownloads.length; i++){
        var obj = {x:ThingiverseDownloadsTime[i],y:ThingiverseDownloads[i]};
        ThingiverseDownloadsArray.push(obj);
      };
      for (var i = 0; i<ThingiverseLikes.length; i++){
        var obj = {x:ThingiverseLikesTime[i],y:ThingiverseLikes[i]};
        ThingiverseLikesArray.push(obj);
      };
      for (var i = 0; i<ThingiverseCollects.length; i++){
        var obj = {x:ThingiverseCollectsTime[i],y:ThingiverseCollects[i]};
        ThingiverseCollectsArray.push(obj);
      };
      for (var i = 0; i<ThingiverseMakes.length; i++){
        var obj = {x:ThingiverseMakesTime[i],y:ThingiverseMakes[i]};
        ThingiverseMakesArray.push(obj);
      };
      for (var i = 0; i<ThingiverseRemixes.length; i++){
        var obj = {x:ThingiverseRemixesTime[i],y:ThingiverseRemixes[i]};
        ThingiverseRemixesArray.push(obj);
      };
      for (var i = 0; i<ThingiverseComments.length; i++){
        var obj = {x:ThingiverseCommentsTime[i],y:ThingiverseComments[i]};
        ThingiverseCommentsArray.push(obj);
      };
      scatterChartData.datasets[0].data = ThingiverseViewsArray;
      scatterChartData.datasets[1].data = ThingiverseDownloadsArray;
      scatterChartData.datasets[2].data = ThingiverseLikesArray;
      scatterChartData.datasets[3].data = ThingiverseCollectsArray;
      scatterChartData.datasets[4].data = ThingiverseMakesArray;
      scatterChartData.datasets[5].data = ThingiverseRemixesArray;
      scatterChartData.datasets[6].data = ThingiverseCommentsArray;
      window.myScatter.update();
    });
});

document.getElementById('weeklyData').addEventListener('click', function() {
  myScatter.destroy();
  var ctx = document.getElementById("canvas").getContext("2d");
  window.myScatter = Chart.Scatter(ctx, {
      data: scatterChartData,
      options: {
         scales:{
           xAxes: [{
                type: 'time',
                time: {
                  format: "DD/MMM",
                  unit: 'day',
                  unitStepSize: 1,
                  displayFormats: {
                    'day': 'DD MMM',
                  },
                  }
              }]
            },
          title: {
              display: true,
              fontSize: 20,
              text: 'Thingiverse Stats - Weekly'
          },
          legend: {
              display: true,
              position: 'bottom'
          }
      }
  });
  ThingiverseViews = [];
  ThingiverseViewsTime = [];
  ThingiverseViewsArray = [];

  ThingiverseDownloads = [];
  ThingiverseDownloadsTime = [];
  ThingiverseDownloadsArray = [];

  ThingiverseLikes = [];
  ThingiverseLikesTime = [];
  ThingiverseLikesArray = [];

  ThingiverseCollects = [];
  ThingiverseCollectsTime = [];
  ThingiverseCollectsArray = [];

  ThingiverseMakes = [];
  ThingiverseMakesTime = [];
  ThingiverseMakesArray = [];

  ThingiverseRemixes = [];
  ThingiverseRemixesTime = [];
  ThingiverseRemixesArray = [];

  ThingiverseComments = [];
  ThingiverseCommentsTime = [];
  ThingiverseCommentsArray = [];

  fetch('js/logs/weekly.txt')
    .then(yt => yt.text())
    .then(content => {
      let lines = content.split(/\n/);
      lines.forEach(function(line){
        let stats = line.split('-');
        if (stats[0]=='Thingiverse'){
          if (stats[1]=='Views'){
            ThingiverseViews.push(stats[2]);
            ThingiverseViewsTime.push(stats[3]);
          };
          if (stats[1]=='Downloads'){
            ThingiverseDownloads.push(stats[2]);
            ThingiverseDownloadsTime.push(stats[3]);
          };
          if (stats[1]=='Likes'){
            ThingiverseLikes.push(stats[2]);
            ThingiverseLikesTime.push(stats[3]);
          };
          if (stats[1]=='Collects'){
            ThingiverseCollects.push(stats[2]);
            ThingiverseCollectsTime.push(stats[3]);
          };
          if (stats[1]=='Makes'){
            ThingiverseMakes.push(stats[2]);
            ThingiverseMakesTime.push(stats[3]);
          };
          if (stats[1]=='Remixes'){
            ThingiverseRemixes.push(stats[2]);
            ThingiverseRemixesTime.push(stats[3]);
          };
          if (stats[1]=='Comments'){
            ThingiverseComments.push(stats[2]);
            ThingiverseCommentsTime.push(stats[3]);
          };
        };
      });
      for (var i = 0; i<ThingiverseViews.length; i++){
        var obj = {x:ThingiverseViewsTime[i],y:ThingiverseViews[i]};
        ThingiverseViewsArray.push(obj);
      };
      for (var i = 0; i<ThingiverseDownloads.length; i++){
        var obj = {x:ThingiverseDownloadsTime[i],y:ThingiverseDownloads[i]};
        ThingiverseDownloadsArray.push(obj);
      };
      for (var i = 0; i<ThingiverseLikes.length; i++){
        var obj = {x:ThingiverseLikesTime[i],y:ThingiverseLikes[i]};
        ThingiverseLikesArray.push(obj);
      };
      for (var i = 0; i<ThingiverseCollects.length; i++){
        var obj = {x:ThingiverseCollectsTime[i],y:ThingiverseCollects[i]};
        ThingiverseCollectsArray.push(obj);
      };
      for (var i = 0; i<ThingiverseMakes.length; i++){
        var obj = {x:ThingiverseMakesTime[i],y:ThingiverseMakes[i]};
        ThingiverseMakesArray.push(obj);
      };
      for (var i = 0; i<ThingiverseRemixes.length; i++){
        var obj = {x:ThingiverseRemixesTime[i],y:ThingiverseRemixes[i]};
        ThingiverseRemixesArray.push(obj);
      };
      for (var i = 0; i<ThingiverseComments.length; i++){
        var obj = {x:ThingiverseCommentsTime[i],y:ThingiverseComments[i]};
        ThingiverseCommentsArray.push(obj);
      };
      scatterChartData.datasets[0].data = ThingiverseViewsArray;
      scatterChartData.datasets[1].data = ThingiverseDownloadsArray;
      scatterChartData.datasets[2].data = ThingiverseLikesArray;
      scatterChartData.datasets[3].data = ThingiverseCollectsArray;
      scatterChartData.datasets[4].data = ThingiverseMakesArray;
      scatterChartData.datasets[5].data = ThingiverseRemixesArray;
      scatterChartData.datasets[6].data = ThingiverseCommentsArray;
      window.myScatter.update();
    });
  });
