
var color = Chart.helpers.color;
var YoutubeViews = [1,2,3];
var YoutubeViewsTime = ["00:01","00:11","00:21"];
var YoutubeViewsArray = []
var ViewsObj = {x: YoutubeViewsTime, y: YoutubeViews}
var scatterChartData = {
    datasets: [{
        label: "Youtube Views",
        borderColor: window.chartColors.red,
        backgroundColor: color(window.chartColors.red).alpha(0.2).rgbString(),
        data: YoutubeViewsArray
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
                    unitStepSize: 2,
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
                text: 'Youtube Stats - Daily'
            },
            legend: {
                display: true,
                position: 'bottom'
            }
        }
    });
    YoutubeViews = [];
    YoutubeViewsTime = [];
    YoutubeViewsArray = [];
    fetch('daily.txt')
      .then(yt => yt.text())
      .then(content => {
        let lines = content.split(/\n/);
        lines.forEach(function(line){
          let stats = line.split('-');
          if (stats[0]=='Youtube'){
            if (stats[1]=='Views'){
              YoutubeViews.push(stats[2]);
              YoutubeViewsTime.push(stats[3]);
            };
          };
        });
        for (var i = 0; i<YoutubeViews.length; i++){
          var obj = {x:YoutubeViewsTime[i],y:YoutubeViews[i]};
          YoutubeViewsArray.push(obj);
          }
        scatterChartData.datasets.forEach(function(dataset) {
          dataset.data = YoutubeViewsArray;
        });
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
                  unit: 'minute',
                  unitStepSize: 15,
                  displayFormats: {
                    'minute': 'HH:mm',
                    'hour': 'HH:mm',
                  },
                  }
              }]
            },
          title: {
              display: true,
              text: 'Youtube Stats - Daily'
          },
          legend: {
              display: true,
              position: 'bottom'
          }
      }
  });
  YoutubeViews = [];
  YoutubeViewsTime = [];
  YoutubeViewsArray = [];
  fetch('daily.txt')
    .then(yt => yt.text())
    .then(content => {
      let lines = content.split(/\n/);
      lines.forEach(function(line){
        let stats = line.split('-');
        if (stats[0]=='Youtube'){
          if (stats[1]=='Views'){
            YoutubeViews.push(stats[2]);
            YoutubeViewsTime.push(stats[3]);
          };
        };
      });
      for (var i = 0; i<YoutubeViews.length; i++){
        var obj = {x:YoutubeViewsTime[i],y:YoutubeViews[i]};
        YoutubeViewsArray.push(obj);
        }
      scatterChartData.datasets.forEach(function(dataset) {
        dataset.data = YoutubeViewsArray;
      });
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
              text: 'Youtube Stats - Weekly'
          },
          legend: {
              display: true,
              position: 'bottom'
          }
      }
  });
  YoutubeViews = [];
  YoutubeViewsTime = [];
  YoutubeViewsArray = [];
  fetch('youtube-weekly.txt')
    .then(yt => yt.text())
    .then(content => {
      let lines = content.split(/\n/);
      lines.forEach(function(line){
        let stats = line.split('-');
        if (stats[0]=='Views'){
          if (stats[1]=='Views'){
            YoutubeViews.push(stats[2]);
            YoutubeViewsTime.push(stats[3]);
          };
        };
      });
      for (var i = 0; i<YoutubeViews.length; i++){
        var obj = {x:YoutubeViewsTime[i],y:YoutubeViews[i]};
        YoutubeViewsArray.push(obj);
        }
      scatterChartData.datasets.forEach(function(dataset) {
        dataset.data = YoutubeViewsArray;
      });
      window.myScatter.update();
    });
});
