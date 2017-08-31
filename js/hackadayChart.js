var color = Chart.helpers.color;
var HackadayFollowers = [];
var HackadayFollowersTime = [];
var HackadayFollowersArray = [];

var HackadayLikes = [];
var HackadayLikesTime = [];
var HackadayLikesArray = [];

var HackadayViews = [];
var HackadayViewsTime = [];
var HackadayViewsArray = [];

var HackadaySubscritions = [];
var HackadaySubscritionsTime = [];
var HackadaySubscritionsArray = [];

var HackadayComments = [];
var HackadayCommentsTime = [];
var HackadayCommentsArray = [];

var scatterChartData = {
    datasets: [{
        label: "Hackaday Followers",
        borderColor: window.chartColors.blue,
        backgroundColor: color(window.chartColors.blue).alpha(0.2).rgbString(),
        data: HackadayFollowersArray
    },{
        label: "Hackaday Likes",
        borderColor: window.chartColors.orange,
        backgroundColor: color(window.chartColors.orange).alpha(0.2).rgbString(),
        data: HackadayLikesArray
    },{
        label: "Hackaday Views",
        borderColor: window.chartColors.green,
        backgroundColor: color(window.chartColors.green).alpha(0.2).rgbString(),
        data: HackadayViewsArray
    },{
        label: "Hackaday Subscritions",
        borderColor: window.chartColors.red,
        backgroundColor: color(window.chartColors.red).alpha(0.2).rgbString(),
        data: HackadaySubscritionsArray
    },{
        label: "Hackaday Comments",
        borderColor: window.chartColors.purple,
        backgroundColor: color(window.chartColors.red).alpha(0.2).rgbString(),
        data: HackadayCommentsArray
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
                text: 'Hackaday Stats - Daily'
            },
            legend: {
                display: true,
                position: 'bottom'
            }
        }
    });

    HackadayFollowers = [];
    HackadayFollowersTime = [];
    HackadayFollowersArray = [];

    HackadayLikes = [];
    HackadayLikesTime = [];
    HackadayLikesArray = [];

    HackadayViews = [];
    HackadayViewsTime = [];
    HackadayViewsArray = [];

    HackadaySubscritions = [];
    HackadaySubscritionsTime = [];
    HackadaySubscritionsArray = [];

    HackadayComments = [];
    HackadayCommentsTime = [];
    HackadayCommentsArray = [];

    fetch('js/logs/daily.txt')
      .then(yt => yt.text())
      .then(content => {
        let lines = content.split(/\n/);
        lines.forEach(function(line){
          let stats = line.split('-');
          if (stats[0]=='Hackaday'){
            if (stats[1]=='Followers'){
              HackadayFollowers.push(stats[2]);
              HackadayFollowersTime.push(stats[3]);
            };
            if (stats[1]=='Likes'){
              HackadayLikes.push(stats[2]);
              HackadayLikesTime.push(stats[3]);
            };
            if (stats[1]=='Views'){
              HackadayViews.push(stats[2]);
              HackadayViewsTime.push(stats[3]);
            };
            if (stats[1]=='Subscritions'){
              HackadaySubscritions.push(stats[2]);
              HackadaySubscritionsTime.push(stats[3]);
            };
            if (stats[1]=='Comments'){
              HackadayComments.push(stats[2]);
              HackadayCommentsTime.push(stats[3]);
            };
          };
        });
        for (var i = 0; i<HackadayFollowers.length; i++){
          var obj = {x:HackadayFollowersTime[i],y:HackadayFollowers[i]};
          HackadayFollowersArray.push(obj);
        };
        for (var i = 0; i<HackadayLikes.length; i++){
          var obj = {x:HackadayLikesTime[i],y:HackadayLikes[i]};
          HackadayLikesArray.push(obj);
        };
        for (var i = 0; i<HackadayViews.length; i++){
          var obj = {x:HackadayViewsTime[i],y:HackadayViews[i]};
          HackadayViewsArray.push(obj);
        };
        for (var i = 0; i<HackadaySubscritions.length; i++){
          var obj = {x:HackadaySubscritionsTime[i],y:HackadaySubscritions[i]};
          HackadaySubscritionsArray.push(obj);
        };
        for (var i = 0; i<HackadayComments.length; i++){
          var obj = {x:HackadayCommentsTime[i],y:HackadayComments[i]};
          HackadayCommentsArray.push(obj);
        };
          scatterChartData.datasets[0].data = HackadayFollowersArray;
          scatterChartData.datasets[1].data = HackadayLikesArray;
          scatterChartData.datasets[2].data = HackadayViewsArray;
          scatterChartData.datasets[3].data = HackadaySubscritionsArray;
          scatterChartData.datasets[4].data = HackadayCommentsArray;
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
              text: 'Hackaday Stats - Daily'
          },
          legend: {
              display: true,
              position: 'bottom'
          }
      }
  });

  HackadayFollowers = [];
  HackadayFollowersTime = [];
  HackadayFollowersArray = [];

  HackadayLikes = [];
  HackadayLikesTime = [];
  HackadayLikesArray = [];

  HackadayViews = [];
  HackadayViewsTime = [];
  HackadayViewsArray = [];

  HackadaySubscritions = [];
  HackadaySubscritionsTime = [];
  HackadaySubscritionsArray = [];

  HackadayComments = [];
  HackadayCommentsTime = [];
  HackadayCommentsArray = [];

  fetch('js/logs/daily.txt')
    .then(yt => yt.text())
    .then(content => {
      let lines = content.split(/\n/);
      lines.forEach(function(line){
        let stats = line.split('-');
        if (stats[0]=='Hackaday'){
          if (stats[1]=='Followers'){
            HackadayFollowers.push(stats[2]);
            HackadayFollowersTime.push(stats[3]);
          };
          if (stats[1]=='Likes'){
            HackadayLikes.push(stats[2]);
            HackadayLikesTime.push(stats[3]);
          };
          if (stats[1]=='Views'){
            HackadayViews.push(stats[2]);
            HackadayViewsTime.push(stats[3]);
          };
          if (stats[1]=='Subscritions'){
            HackadaySubscritions.push(stats[2]);
            HackadaySubscritionsTime.push(stats[3]);
          };
          if (stats[1]=='Comments'){
            HackadayComments.push(stats[2]);
            HackadayCommentsTime.push(stats[3]);
          };
        };
      });
      for (var i = 0; i<HackadayFollowers.length; i++){
        var obj = {x:HackadayFollowersTime[i],y:HackadayFollowers[i]};
        HackadayFollowersArray.push(obj);
      };
      for (var i = 0; i<HackadayLikes.length; i++){
        var obj = {x:HackadayLikesTime[i],y:HackadayLikes[i]};
        HackadayLikesArray.push(obj);
      };
      for (var i = 0; i<HackadayViews.length; i++){
        var obj = {x:HackadayViewsTime[i],y:HackadayViews[i]};
        HackadayViewsArray.push(obj);
      };
      for (var i = 0; i<HackadaySubscritions.length; i++){
        var obj = {x:HackadaySubscritionsTime[i],y:HackadaySubscritions[i]};
        HackadaySubscritionsArray.push(obj);
      };
      for (var i = 0; i<HackadayComments.length; i++){
        var obj = {x:HackadayCommentsTime[i],y:HackadayComments[i]};
        HackadayCommentsArray.push(obj);
      };
        scatterChartData.datasets[0].data = HackadayFollowersArray;
        scatterChartData.datasets[1].data = HackadayLikesArray;
        scatterChartData.datasets[2].data = HackadayViewsArray;
        scatterChartData.datasets[3].data = HackadaySubscritionsArray;
        scatterChartData.datasets[4].data = HackadayCommentsArray;
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
              text: 'Hackaday Stats - Weekly'
          },
          legend: {
              display: true,
              position: 'bottom'
          }
      }
  });
  HackadayFollowers = [];
  HackadayFollowersTime = [];
  HackadayFollowersArray = [];

  HackadayLikes = [];
  HackadayLikesTime = [];
  HackadayLikesArray = [];

  HackadayViews = [];
  HackadayViewsTime = [];
  HackadayViewsArray = [];

  HackadaySubscritions = [];
  HackadaySubscritionsTime = [];
  HackadaySubscritionsArray = [];

  HackadayComments = [];
  HackadayCommentsTime = [];
  HackadayCommentsArray = [];

  fetch('js/logs/weekly.txt')
    .then(yt => yt.text())
    .then(content => {
      let lines = content.split(/\n/);
      lines.forEach(function(line){
        let stats = line.split('-');
        if (stats[0]=='Hackaday'){
          if (stats[1]=='Followers'){
            HackadayFollowers.push(stats[2]);
            HackadayFollowersTime.push(stats[3]);
          };
          if (stats[1]=='Likes'){
            HackadayLikes.push(stats[2]);
            HackadayLikesTime.push(stats[3]);
          };
          if (stats[1]=='Views'){
            HackadayViews.push(stats[2]);
            HackadayViewsTime.push(stats[3]);
          };
          if (stats[1]=='Subscritions'){
            HackadaySubscritions.push(stats[2]);
            HackadaySubscritionsTime.push(stats[3]);
          };
          if (stats[1]=='Comments'){
            HackadayComments.push(stats[2]);
            HackadayCommentsTime.push(stats[3]);
          };
        };
      });
      for (var i = 0; i<HackadayFollowers.length; i++){
        var obj = {x:HackadayFollowersTime[i],y:HackadayFollowers[i]};
        HackadayFollowersArray.push(obj);
      };
      for (var i = 0; i<HackadayLikes.length; i++){
        var obj = {x:HackadayLikesTime[i],y:HackadayLikes[i]};
        HackadayLikesArray.push(obj);
      };
      for (var i = 0; i<HackadayViews.length; i++){
        var obj = {x:HackadayViewsTime[i],y:HackadayViews[i]};
        HackadayViewsArray.push(obj);
      };
      for (var i = 0; i<HackadaySubscritions.length; i++){
        var obj = {x:HackadaySubscritionsTime[i],y:HackadaySubscritions[i]};
        HackadaySubscritionsArray.push(obj);
      };
      for (var i = 0; i<HackadayComments.length; i++){
        var obj = {x:HackadayCommentsTime[i],y:HackadayComments[i]};
        HackadayCommentsArray.push(obj);
      };
        scatterChartData.datasets[0].data = HackadayFollowersArray;
        scatterChartData.datasets[1].data = HackadayLikesArray;
        scatterChartData.datasets[2].data = HackadayViewsArray;
        scatterChartData.datasets[3].data = HackadaySubscritionsArray;
        scatterChartData.datasets[4].data = HackadayCommentsArray;
      window.myScatter.update();
    });
  });
