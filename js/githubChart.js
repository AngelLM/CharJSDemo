var color = Chart.helpers.color;
var GithubFollowers = [];
var GithubFollowersTime = [];
var GithubFollowersArray = [];

var GithubWatchers = [];
var GithubWatchersTime = [];
var GithubWatchersArray = [];

var GithubStars = [];
var GithubStarsTime = [];
var GithubStarsArray = [];

var GithubForks = [];
var GithubForksTime = [];
var GithubForksArray = [];

var GithubContributors = [];
var GithubContributorsTime = [];
var GithubContributorsArray = [];

var scatterChartData = {
    datasets: [{
        label: "Github Followers",
        borderColor: window.chartColors.blue,
        backgroundColor: color(window.chartColors.blue).alpha(0.2).rgbString(),
        data: GithubFollowersArray
    },{
        label: "Github Watchers",
        borderColor: window.chartColors.orange,
        backgroundColor: color(window.chartColors.orange).alpha(0.2).rgbString(),
        data: GithubWatchersArray
    },{
        label: "Github Stars",
        borderColor: window.chartColors.green,
        backgroundColor: color(window.chartColors.green).alpha(0.2).rgbString(),
        data: GithubStarsArray
    },{
        label: "Github Forks",
        borderColor: window.chartColors.red,
        backgroundColor: color(window.chartColors.red).alpha(0.2).rgbString(),
        data: GithubForksArray
    },{
        label: "Github Contributors",
        borderColor: window.chartColors.purple,
        backgroundColor: color(window.chartColors.red).alpha(0.2).rgbString(),
        data: GithubContributorsArray
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
                text: 'Github Stats - Daily'
            },
            legend: {
                display: true,
                position: 'bottom'
            }
        }
    });

    GithubFollowers = [];
    GithubFollowersTime = [];
    GithubFollowersArray = [];

    GithubWatchers = [];
    GithubWatchersTime = [];
    GithubWatchersArray = [];

    GithubStars = [];
    GithubStarsTime = [];
    GithubStarsArray = [];

    GithubForks = [];
    GithubForksTime = [];
    GithubForksArray = [];

    GithubContributors = [];
    GithubContributorsTime = [];
    GithubContributorsArray = [];

    fetch('js/logs/daily.txt')
      .then(yt => yt.text())
      .then(content => {
        let lines = content.split(/\n/);
        lines.forEach(function(line){
          let stats = line.split('-');
          if (stats[0]=='Github'){
            if (stats[1]=='Followers'){
              GithubFollowers.push(stats[2]);
              GithubFollowersTime.push(stats[3]);
            };
            if (stats[1]=='Watchers'){
              GithubWatchers.push(stats[2]);
              GithubWatchersTime.push(stats[3]);
            };
            if (stats[1]=='Stars'){
              GithubStars.push(stats[2]);
              GithubStarsTime.push(stats[3]);
            };
            if (stats[1]=='Forks'){
              GithubForks.push(stats[2]);
              GithubForksTime.push(stats[3]);
            };
            if (stats[1]=='Contributors'){
              GithubContributors.push(stats[2]);
              GithubContributorsTime.push(stats[3]);
            };
          };
        });
        for (var i = 0; i<GithubFollowers.length; i++){
          var obj = {x:GithubFollowersTime[i],y:GithubFollowers[i]};
          GithubFollowersArray.push(obj);
        };
        for (var i = 0; i<GithubWatchers.length; i++){
          var obj = {x:GithubWatchersTime[i],y:GithubWatchers[i]};
          GithubWatchersArray.push(obj);
        };
        for (var i = 0; i<GithubStars.length; i++){
          var obj = {x:GithubStarsTime[i],y:GithubStars[i]};
          GithubStarsArray.push(obj);
        };
        for (var i = 0; i<GithubForks.length; i++){
          var obj = {x:GithubForksTime[i],y:GithubForks[i]};
          GithubForksArray.push(obj);
        };
        for (var i = 0; i<GithubContributors.length; i++){
          var obj = {x:GithubContributorsTime[i],y:GithubContributors[i]};
          GithubContributorsArray.push(obj);
        };
          scatterChartData.datasets[0].data = GithubFollowersArray;
          scatterChartData.datasets[1].data = GithubWatchersArray;
          scatterChartData.datasets[2].data = GithubStarsArray;
          scatterChartData.datasets[3].data = GithubForksArray;
          scatterChartData.datasets[4].data = GithubContributorsArray;
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
              text: 'Github Stats - Daily'
          },
          legend: {
              display: true,
              position: 'bottom'
          }
      }
  });

  GithubFollowers = [];
  GithubFollowersTime = [];
  GithubFollowersArray = [];

  GithubWatchers = [];
  GithubWatchersTime = [];
  GithubWatchersArray = [];

  GithubStars = [];
  GithubStarsTime = [];
  GithubStarsArray = [];

  GithubForks = [];
  GithubForksTime = [];
  GithubForksArray = [];

  GithubContributors = [];
  GithubContributorsTime = [];
  GithubContributorsArray = [];

  fetch('js/logs/daily.txt')
    .then(yt => yt.text())
    .then(content => {
      let lines = content.split(/\n/);
      lines.forEach(function(line){
        let stats = line.split('-');
        if (stats[0]=='Github'){
          if (stats[1]=='Followers'){
            GithubFollowers.push(stats[2]);
            GithubFollowersTime.push(stats[3]);
          };
          if (stats[1]=='Watchers'){
            GithubWatchers.push(stats[2]);
            GithubWatchersTime.push(stats[3]);
          };
          if (stats[1]=='Stars'){
            GithubStars.push(stats[2]);
            GithubStarsTime.push(stats[3]);
          };
          if (stats[1]=='Forks'){
            GithubForks.push(stats[2]);
            GithubForksTime.push(stats[3]);
          };
          if (stats[1]=='Contributors'){
            GithubContributors.push(stats[2]);
            GithubContributorsTime.push(stats[3]);
          };
        };
      });
      for (var i = 0; i<GithubFollowers.length; i++){
        var obj = {x:GithubFollowersTime[i],y:GithubFollowers[i]};
        GithubFollowersArray.push(obj);
      };
      for (var i = 0; i<GithubWatchers.length; i++){
        var obj = {x:GithubWatchersTime[i],y:GithubWatchers[i]};
        GithubWatchersArray.push(obj);
      };
      for (var i = 0; i<GithubStars.length; i++){
        var obj = {x:GithubStarsTime[i],y:GithubStars[i]};
        GithubStarsArray.push(obj);
      };
      for (var i = 0; i<GithubForks.length; i++){
        var obj = {x:GithubForksTime[i],y:GithubForks[i]};
        GithubForksArray.push(obj);
      };
      for (var i = 0; i<GithubContributors.length; i++){
        var obj = {x:GithubContributorsTime[i],y:GithubContributors[i]};
        GithubContributorsArray.push(obj);
      };
        scatterChartData.datasets[0].data = GithubFollowersArray;
        scatterChartData.datasets[1].data = GithubWatchersArray;
        scatterChartData.datasets[2].data = GithubStarsArray;
        scatterChartData.datasets[3].data = GithubForksArray;
        scatterChartData.datasets[4].data = GithubContributorsArray;
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
              text: 'Github Stats - Weekly'
          },
          legend: {
              display: true,
              position: 'bottom'
          }
      }
  });
  GithubFollowers = [];
  GithubFollowersTime = [];
  GithubFollowersArray = [];

  GithubWatchers = [];
  GithubWatchersTime = [];
  GithubWatchersArray = [];

  GithubStars = [];
  GithubStarsTime = [];
  GithubStarsArray = [];

  GithubForks = [];
  GithubForksTime = [];
  GithubForksArray = [];

  GithubContributors = [];
  GithubContributorsTime = [];
  GithubContributorsArray = [];

  fetch('js/logs/weekly.txt')
    .then(yt => yt.text())
    .then(content => {
      let lines = content.split(/\n/);
      lines.forEach(function(line){
        let stats = line.split('-');
        if (stats[0]=='Github'){
          if (stats[1]=='Followers'){
            GithubFollowers.push(stats[2]);
            GithubFollowersTime.push(stats[3]);
          };
          if (stats[1]=='Watchers'){
            GithubWatchers.push(stats[2]);
            GithubWatchersTime.push(stats[3]);
          };
          if (stats[1]=='Stars'){
            GithubStars.push(stats[2]);
            GithubStarsTime.push(stats[3]);
          };
          if (stats[1]=='Forks'){
            GithubForks.push(stats[2]);
            GithubForksTime.push(stats[3]);
          };
          if (stats[1]=='Contributors'){
            GithubContributors.push(stats[2]);
            GithubContributorsTime.push(stats[3]);
          };
        };
      });
      for (var i = 0; i<GithubFollowers.length; i++){
        var obj = {x:GithubFollowersTime[i],y:GithubFollowers[i]};
        GithubFollowersArray.push(obj);
      };
      for (var i = 0; i<GithubWatchers.length; i++){
        var obj = {x:GithubWatchersTime[i],y:GithubWatchers[i]};
        GithubWatchersArray.push(obj);
      };
      for (var i = 0; i<GithubStars.length; i++){
        var obj = {x:GithubStarsTime[i],y:GithubStars[i]};
        GithubStarsArray.push(obj);
      };
      for (var i = 0; i<GithubForks.length; i++){
        var obj = {x:GithubForksTime[i],y:GithubForks[i]};
        GithubForksArray.push(obj);
      };
      for (var i = 0; i<GithubContributors.length; i++){
        var obj = {x:GithubContributorsTime[i],y:GithubContributors[i]};
        GithubContributorsArray.push(obj);
      };
        scatterChartData.datasets[0].data = GithubFollowersArray;
        scatterChartData.datasets[1].data = GithubWatchersArray;
        scatterChartData.datasets[2].data = GithubStarsArray;
        scatterChartData.datasets[3].data = GithubForksArray;
        scatterChartData.datasets[4].data = GithubContributorsArray;
      window.myScatter.update();
    });
  });
