var color = Chart.helpers.color;
var TwitterFollowers = [];
var TwitterFollowersTime = [];
var TwitterFollowersArray = [];

var TwitterLikes = [];
var TwitterLikesTime = [];
var TwitterLikesArray = [];

var TwitterRetweets = [];
var TwitterRetweetsTime = [];
var TwitterRetweetsArray = [];

var TwitterComments = [];
var TwitterCommentsTime = [];
var TwitterCommentsArray = [];
var scatterChartData = {
    datasets: [{
        label: "Twitter Followers",
        borderColor: window.chartColors.blue,
        backgroundColor: color(window.chartColors.blue).alpha(0.2).rgbString(),
        data: TwitterFollowersArray
    },{
        label: "Twitter Likes",
        borderColor: window.chartColors.orange,
        backgroundColor: color(window.chartColors.orange).alpha(0.2).rgbString(),
        data: TwitterLikesArray
    },{
        label: "Twitter Retweets",
        borderColor: window.chartColors.green,
        backgroundColor: color(window.chartColors.green).alpha(0.2).rgbString(),
        data: TwitterRetweetsArray
    },{
        label: "Twitter Comments",
        borderColor: window.chartColors.red,
        backgroundColor: color(window.chartColors.red).alpha(0.2).rgbString(),
        data: TwitterCommentsArray
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
                text: 'Twitter Stats - Daily'
            },
            legend: {
                display: true,
                position: 'bottom'
            }
        }
    });

    TwitterFollowers = [];
    TwitterFollowersTime = [];
    TwitterFollowersArray = [];

    TwitterLikes = [];
    TwitterLikesTime = [];
    TwitterLikesArray = [];

    TwitterRetweets = [];
    TwitterRetweetsTime = [];
    TwitterRetweetsArray = [];

    TwitterComments = [];
    TwitterCommentsTime = [];
    TwitterCommentsArray = [];

    fetch('js/logs/daily.txt')
      .then(yt => yt.text())
      .then(content => {
        let lines = content.split(/\n/);
        lines.forEach(function(line){
          let stats = line.split('-');
          if (stats[0]=='Twitter'){
            if (stats[1]=='Followers'){
              TwitterFollowers.push(stats[2]);
              TwitterFollowersTime.push(stats[3]);
            };
            if (stats[1]=='Likes'){
              TwitterLikes.push(stats[2]);
              TwitterLikesTime.push(stats[3]);
            };
            if (stats[1]=='Retweets'){
              TwitterRetweets.push(stats[2]);
              TwitterRetweetsTime.push(stats[3]);
            };
            if (stats[1]=='Comments'){
              TwitterComments.push(stats[2]);
              TwitterCommentsTime.push(stats[3]);
            };
          };
        });
        for (var i = 0; i<TwitterFollowers.length; i++){
          var obj = {x:TwitterFollowersTime[i],y:TwitterFollowers[i]};
          TwitterFollowersArray.push(obj);
        };
        for (var i = 0; i<TwitterLikes.length; i++){
          var obj = {x:TwitterLikesTime[i],y:TwitterLikes[i]};
          TwitterLikesArray.push(obj);
        };
        for (var i = 0; i<TwitterRetweets.length; i++){
          var obj = {x:TwitterRetweetsTime[i],y:TwitterRetweets[i]};
          TwitterRetweetsArray.push(obj);
        };
        for (var i = 0; i<TwitterComments.length; i++){
          var obj = {x:TwitterCommentsTime[i],y:TwitterComments[i]};
          TwitterCommentsArray.push(obj);
        };
          scatterChartData.datasets[0].data = TwitterFollowersArray;
          scatterChartData.datasets[1].data = TwitterLikesArray;
          scatterChartData.datasets[2].data = TwitterRetweetsArray;
          scatterChartData.datasets[3].data = TwitterCommentsArray;
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
              text: 'Twitter Stats - Daily'
          },
          legend: {
              display: true,
              position: 'bottom'
          }
      }
  });

  TwitterFollowers = [];
  TwitterFollowersTime = [];
  TwitterFollowersArray = [];

  TwitterLikes = [];
  TwitterLikesTime = [];
  TwitterLikesArray = [];

  TwitterRetweets = [];
  TwitterRetweetsTime = [];
  TwitterRetweetsArray = [];

  TwitterComments = [];
  TwitterCommentsTime = [];
  TwitterCommentsArray = [];

  fetch('js/logs/daily.txt')
    .then(yt => yt.text())
    .then(content => {
      let lines = content.split(/\n/);
      lines.forEach(function(line){
        let stats = line.split('-');
        if (stats[0]=='Twitter'){
          if (stats[1]=='Followers'){
            TwitterFollowers.push(stats[2]);
            TwitterFollowersTime.push(stats[3]);
          };
          if (stats[1]=='Likes'){
            TwitterLikes.push(stats[2]);
            TwitterLikesTime.push(stats[3]);
          };
          if (stats[1]=='Retweets'){
            TwitterRetweets.push(stats[2]);
            TwitterRetweetsTime.push(stats[3]);
          };
          if (stats[1]=='Comments'){
            TwitterComments.push(stats[2]);
            TwitterCommentsTime.push(stats[3]);
          };
        };
      });
      for (var i = 0; i<TwitterFollowers.length; i++){
        var obj = {x:TwitterFollowersTime[i],y:TwitterFollowers[i]};
        TwitterFollowersArray.push(obj);
      };
      for (var i = 0; i<TwitterLikes.length; i++){
        var obj = {x:TwitterLikesTime[i],y:TwitterLikes[i]};
        TwitterLikesArray.push(obj);
      };
      for (var i = 0; i<TwitterRetweets.length; i++){
        var obj = {x:TwitterRetweetsTime[i],y:TwitterRetweets[i]};
        TwitterRetweetsArray.push(obj);
      };
      for (var i = 0; i<TwitterComments.length; i++){
        var obj = {x:TwitterCommentsTime[i],y:TwitterComments[i]};
        TwitterCommentsArray.push(obj);
      };
        scatterChartData.datasets[0].data = TwitterFollowersArray;
        scatterChartData.datasets[1].data = TwitterLikesArray;
        scatterChartData.datasets[2].data = TwitterRetweetsArray;
        scatterChartData.datasets[3].data = TwitterCommentsArray;
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
              text: 'Twitter Stats - Weekly'
          },
          legend: {
              display: true,
              position: 'bottom'
          }
      }
  });
  TwitterFollowers = [];
  TwitterFollowersTime = [];
  TwitterFollowersArray = [];

  TwitterLikes = [];
  TwitterLikesTime = [];
  TwitterLikesArray = [];

  TwitterRetweets = [];
  TwitterRetweetsTime = [];
  TwitterRetweetsArray = [];

  TwitterComments = [];
  TwitterCommentsTime = [];
  TwitterCommentsArray = [];

  fetch('js/logs/weekly.txt')
    .then(yt => yt.text())
    .then(content => {
      let lines = content.split(/\n/);
      lines.forEach(function(line){
        let stats = line.split('-');
        if (stats[0]=='Twitter'){
          if (stats[1]=='Followers'){
            TwitterFollowers.push(stats[2]);
            TwitterFollowersTime.push(stats[3]);
          };
          if (stats[1]=='Likes'){
            TwitterLikes.push(stats[2]);
            TwitterLikesTime.push(stats[3]);
          };
          if (stats[1]=='Retweets'){
            TwitterRetweets.push(stats[2]);
            TwitterRetweetsTime.push(stats[3]);
          };
          if (stats[1]=='Comments'){
            TwitterComments.push(stats[2]);
            TwitterCommentsTime.push(stats[3]);
          };
        };
      });
      for (var i = 0; i<TwitterFollowers.length; i++){
        var obj = {x:TwitterFollowersTime[i],y:TwitterFollowers[i]};
        TwitterFollowersArray.push(obj);
      };
      for (var i = 0; i<TwitterLikes.length; i++){
        var obj = {x:TwitterLikesTime[i],y:TwitterLikes[i]};
        TwitterLikesArray.push(obj);
      };
      for (var i = 0; i<TwitterRetweets.length; i++){
        var obj = {x:TwitterRetweetsTime[i],y:TwitterRetweets[i]};
        TwitterRetweetsArray.push(obj);
      };
      for (var i = 0; i<TwitterComments.length; i++){
        var obj = {x:TwitterCommentsTime[i],y:TwitterComments[i]};
        TwitterCommentsArray.push(obj);
      };
        scatterChartData.datasets[0].data = TwitterFollowersArray;
        scatterChartData.datasets[1].data = TwitterLikesArray;
        scatterChartData.datasets[2].data = TwitterRetweetsArray;
        scatterChartData.datasets[3].data = TwitterCommentsArray;
      window.myScatter.update();
    });
  });
