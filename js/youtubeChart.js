
var color = Chart.helpers.color;
var YoutubeSubscriptors = [];
var YoutubeSubscriptorsTime = [];
var YoutubeSubscriptorsArray = [];

var YoutubeViews = [];
var YoutubeViewsTime = [];
var YoutubeViewsArray = [];

var YoutubeLikes = [];
var YoutubeLikesTime = [];
var YoutubeLikesArray = [];

var YoutubeDislikes = [];
var YoutubeDislikesTime = [];
var YoutubeDislikesArray = [];
// var ViewsObj = {x: YoutubeViewsTime, y: YoutubeViews}
var scatterChartData = {
    datasets: [{
        label: "Youtube Subscriptors",
        borderColor: window.chartColors.blue,
        backgroundColor: color(window.chartColors.blue).alpha(0.2).rgbString(),
        data: YoutubeSubscriptorsArray
    },{
        label: "Youtube Views",
        borderColor: window.chartColors.orange,
        backgroundColor: color(window.chartColors.orange).alpha(0.2).rgbString(),
        data: YoutubeViewsArray
    },{
        label: "Youtube Likes",
        borderColor: window.chartColors.green,
        backgroundColor: color(window.chartColors.green).alpha(0.2).rgbString(),
        data: YoutubeLikesArray
    },{
        label: "Youtube Dislikes",
        borderColor: window.chartColors.red,
        backgroundColor: color(window.chartColors.red).alpha(0.2).rgbString(),
        data: YoutubeDislikesArray
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
                text: 'Youtube Stats - Daily'
            },
            legend: {
                display: true,
                position: 'bottom'
            }
        }
    });

    YoutubeSubscriptors = [];
    YoutubeSubscriptorsTime = [];
    YoutubeSubscriptorsArray = [];

    YoutubeViews = [];
    YoutubeViewsTime = [];
    YoutubeViewsArray = [];

    YoutubeLikes = [];
    YoutubeLikesTime = [];
    YoutubeLikesArray = [];

    YoutubeDislikes = [];
    YoutubeDislikesTime = [];
    YoutubeDislikesArray = [];

    fetch('js/logs/daily.txt')
      .then(yt => yt.text())
      .then(content => {
        let lines = content.split(/\n/);
        lines.forEach(function(line){
          let stats = line.split('-');
          if (stats[0]=='Youtube'){
            if (stats[1]=='Subscriptors'){
              YoutubeSubscriptors.push(stats[2]);
              YoutubeSubscriptorsTime.push(stats[3]);
            };
            if (stats[1]=='Views'){
              YoutubeViews.push(stats[2]);
              YoutubeViewsTime.push(stats[3]);
            };
            if (stats[1]=='Likes'){
              YoutubeLikes.push(stats[2]);
              YoutubeLikesTime.push(stats[3]);
            };
            if (stats[1]=='Dislikes'){
              YoutubeDislikes.push(stats[2]);
              YoutubeDislikesTime.push(stats[3]);
            };
          };
        });
        for (var i = 0; i<YoutubeSubscriptors.length; i++){
          var obj = {x:YoutubeSubscriptorsTime[i],y:YoutubeSubscriptors[i]};
          YoutubeSubscriptorsArray.push(obj);
        };
        for (var i = 0; i<YoutubeViews.length; i++){
          var obj = {x:YoutubeViewsTime[i],y:YoutubeViews[i]};
          YoutubeViewsArray.push(obj);
        };
        for (var i = 0; i<YoutubeLikes.length; i++){
          var obj = {x:YoutubeLikesTime[i],y:YoutubeLikes[i]};
          YoutubeLikesArray.push(obj);
        };
        for (var i = 0; i<YoutubeDislikes.length; i++){
          var obj = {x:YoutubeDislikesTime[i],y:YoutubeDislikes[i]};
          YoutubeDislikesArray.push(obj);
        };
          scatterChartData.datasets[0].data = YoutubeSubscriptorsArray;
          scatterChartData.datasets[1].data = YoutubeViewsArray;
          scatterChartData.datasets[2].data = YoutubeLikesArray;
          scatterChartData.datasets[3].data = YoutubeDislikesArray;
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
              text: 'Youtube Stats - Daily'
          },
          legend: {
              display: true,
              position: 'bottom'
          }
      }
  });

  YoutubeSubscriptors = [];
  YoutubeSubscriptorsTime = [];
  YoutubeSubscriptorsArray = [];

  YoutubeViews = [];
  YoutubeViewsTime = [];
  YoutubeViewsArray = [];

  YoutubeLikes = [];
  YoutubeLikesTime = [];
  YoutubeLikesArray = [];

  YoutubeDislikes = [];
  YoutubeDislikesTime = [];
  YoutubeDislikesArray = [];

  fetch('js/logs/daily.txt')
    .then(yt => yt.text())
    .then(content => {
      let lines = content.split(/\n/);
      lines.forEach(function(line){
        let stats = line.split('-');
        if (stats[0]=='Youtube'){
          if (stats[1]=='Subscriptors'){
            YoutubeSubscriptors.push(stats[2]);
            YoutubeSubscriptorsTime.push(stats[3]);
          };
          if (stats[1]=='Views'){
            YoutubeViews.push(stats[2]);
            YoutubeViewsTime.push(stats[3]);
          };
          if (stats[1]=='Likes'){
            YoutubeLikes.push(stats[2]);
            YoutubeLikesTime.push(stats[3]);
          };
          if (stats[1]=='Dislikes'){
            YoutubeDislikes.push(stats[2]);
            YoutubeDislikesTime.push(stats[3]);
          };
        };
      });
      for (var i = 0; i<YoutubeSubscriptors.length; i++){
        var obj = {x:YoutubeSubscriptorsTime[i],y:YoutubeSubscriptors[i]};
        YoutubeSubscriptorsArray.push(obj);
      };
      for (var i = 0; i<YoutubeViews.length; i++){
        var obj = {x:YoutubeViewsTime[i],y:YoutubeViews[i]};
        YoutubeViewsArray.push(obj);
      };
      for (var i = 0; i<YoutubeLikes.length; i++){
        var obj = {x:YoutubeLikesTime[i],y:YoutubeLikes[i]};
        YoutubeLikesArray.push(obj);
      };
      for (var i = 0; i<YoutubeDislikes.length; i++){
        var obj = {x:YoutubeDislikesTime[i],y:YoutubeDislikes[i]};
        YoutubeDislikesArray.push(obj);
      };
        scatterChartData.datasets[0].data = YoutubeSubscriptorsArray;
        scatterChartData.datasets[1].data = YoutubeViewsArray;
        scatterChartData.datasets[2].data = YoutubeLikesArray;
        scatterChartData.datasets[3].data = YoutubeDislikesArray;
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
  YoutubeSubscriptors = [];
  YoutubeSubscriptorsTime = [];
  YoutubeSubscriptorsArray = [];

  YoutubeViews = [];
  YoutubeViewsTime = [];
  YoutubeViewsArray = [];

  YoutubeLikes = [];
  YoutubeLikesTime = [];
  YoutubeLikesArray = [];

  YoutubeDislikes = [];
  YoutubeDislikesTime = [];
  YoutubeDislikesArray = [];

  fetch('js/logs/weekly.txt')
    .then(yt => yt.text())
    .then(content => {
      let lines = content.split(/\n/);
      lines.forEach(function(line){
        let stats = line.split('-');
        if (stats[0]=='Youtube'){
          if (stats[1]=='Subscriptors'){
            YoutubeSubscriptors.push(stats[2]);
            YoutubeSubscriptorsTime.push(stats[3]);
          };
          if (stats[1]=='Views'){
            YoutubeViews.push(stats[2]);
            YoutubeViewsTime.push(stats[3]);
          };
          if (stats[1]=='Likes'){
            YoutubeLikes.push(stats[2]);
            YoutubeLikesTime.push(stats[3]);
          };
          if (stats[1]=='Dislikes'){
            YoutubeDislikes.push(stats[2]);
            YoutubeDislikesTime.push(stats[3]);
          };
        };
      });
      for (var i = 0; i<YoutubeSubscriptors.length; i++){
        var obj = {x:YoutubeSubscriptorsTime[i],y:YoutubeSubscriptors[i]};
        YoutubeSubscriptorsArray.push(obj);
      };
      for (var i = 0; i<YoutubeViews.length; i++){
        var obj = {x:YoutubeViewsTime[i],y:YoutubeViews[i]};
        YoutubeViewsArray.push(obj);
      };
      for (var i = 0; i<YoutubeLikes.length; i++){
        var obj = {x:YoutubeLikesTime[i],y:YoutubeLikes[i]};
        YoutubeLikesArray.push(obj);
      };
      for (var i = 0; i<YoutubeDislikes.length; i++){
        var obj = {x:YoutubeDislikesTime[i],y:YoutubeDislikes[i]};
        YoutubeDislikesArray.push(obj);
      };
        scatterChartData.datasets[0].data = YoutubeSubscriptorsArray;
        scatterChartData.datasets[1].data = YoutubeViewsArray;
        scatterChartData.datasets[2].data = YoutubeLikesArray;
        scatterChartData.datasets[3].data = YoutubeDislikesArray;
      window.myScatter.update();
    });
  });
