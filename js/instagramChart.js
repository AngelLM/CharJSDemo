var color = Chart.helpers.color;
var InstagramFollowers = [];
var InstagramFollowersTime = [];
var InstagramFollowersArray = [];

var InstagramLikes = [];
var InstagramLikesTime = [];
var InstagramLikesArray = [];

var InstagramReproductions = [];
var InstagramReproductionsTime = [];
var InstagramReproductionsArray = [];

var InstagramComments = [];
var InstagramCommentsTime = [];
var InstagramCommentsArray = [];
var scatterChartData = {
    datasets: [{
        label: "Instagram Followers",
        borderColor: window.chartColors.blue,
        backgroundColor: color(window.chartColors.blue).alpha(0.2).rgbString(),
        data: InstagramFollowersArray
    },{
        label: "Instagram Likes",
        borderColor: window.chartColors.orange,
        backgroundColor: color(window.chartColors.orange).alpha(0.2).rgbString(),
        data: InstagramLikesArray
    },{
        label: "Instagram Reproductions",
        borderColor: window.chartColors.green,
        backgroundColor: color(window.chartColors.green).alpha(0.2).rgbString(),
        data: InstagramReproductionsArray
    },{
        label: "Instagram Comments",
        borderColor: window.chartColors.red,
        backgroundColor: color(window.chartColors.red).alpha(0.2).rgbString(),
        data: InstagramCommentsArray
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
                text: 'Instagram Stats - Daily'
            },
            legend: {
                display: true,
                position: 'bottom'
            }
        }
    });

    InstagramFollowers = [];
    InstagramFollowersTime = [];
    InstagramFollowersArray = [];

    InstagramLikes = [];
    InstagramLikesTime = [];
    InstagramLikesArray = [];

    InstagramReproductions = [];
    InstagramReproductionsTime = [];
    InstagramReproductionsArray = [];

    InstagramComments = [];
    InstagramCommentsTime = [];
    InstagramCommentsArray = [];

    fetch('js/logs/daily.txt')
      .then(yt => yt.text())
      .then(content => {
        let lines = content.split(/\n/);
        lines.forEach(function(line){
          let stats = line.split('-');
          if (stats[0]=='Instagram'){
            if (stats[1]=='Followers'){
              InstagramFollowers.push(stats[2]);
              InstagramFollowersTime.push(stats[3]);
            };
            if (stats[1]=='Likes'){
              InstagramLikes.push(stats[2]);
              InstagramLikesTime.push(stats[3]);
            };
            if (stats[1]=='Reproductions'){
              InstagramReproductions.push(stats[2]);
              InstagramReproductionsTime.push(stats[3]);
            };
            if (stats[1]=='Comments'){
              InstagramComments.push(stats[2]);
              InstagramCommentsTime.push(stats[3]);
            };
          };
        });
        for (var i = 0; i<InstagramFollowers.length; i++){
          var obj = {x:InstagramFollowersTime[i],y:InstagramFollowers[i]};
          InstagramFollowersArray.push(obj);
        };
        for (var i = 0; i<InstagramLikes.length; i++){
          var obj = {x:InstagramLikesTime[i],y:InstagramLikes[i]};
          InstagramLikesArray.push(obj);
        };
        for (var i = 0; i<InstagramReproductions.length; i++){
          var obj = {x:InstagramReproductionsTime[i],y:InstagramReproductions[i]};
          InstagramReproductionsArray.push(obj);
        };
        for (var i = 0; i<InstagramComments.length; i++){
          var obj = {x:InstagramCommentsTime[i],y:InstagramComments[i]};
          InstagramCommentsArray.push(obj);
        };
          scatterChartData.datasets[0].data = InstagramFollowersArray;
          scatterChartData.datasets[1].data = InstagramLikesArray;
          scatterChartData.datasets[2].data = InstagramReproductionsArray;
          scatterChartData.datasets[3].data = InstagramCommentsArray;
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
              text: 'Instagram Stats - Daily'
          },
          legend: {
              display: true,
              position: 'bottom'
          }
      }
  });

  InstagramFollowers = [];
  InstagramFollowersTime = [];
  InstagramFollowersArray = [];

  InstagramLikes = [];
  InstagramLikesTime = [];
  InstagramLikesArray = [];

  InstagramReproductions = [];
  InstagramReproductionsTime = [];
  InstagramReproductionsArray = [];

  InstagramComments = [];
  InstagramCommentsTime = [];
  InstagramCommentsArray = [];

  fetch('js/logs/daily.txt')
    .then(yt => yt.text())
    .then(content => {
      let lines = content.split(/\n/);
      lines.forEach(function(line){
        let stats = line.split('-');
        if (stats[0]=='Instagram'){
          if (stats[1]=='Followers'){
            InstagramFollowers.push(stats[2]);
            InstagramFollowersTime.push(stats[3]);
          };
          if (stats[1]=='Likes'){
            InstagramLikes.push(stats[2]);
            InstagramLikesTime.push(stats[3]);
          };
          if (stats[1]=='Reproductions'){
            InstagramReproductions.push(stats[2]);
            InstagramReproductionsTime.push(stats[3]);
          };
          if (stats[1]=='Comments'){
            InstagramComments.push(stats[2]);
            InstagramCommentsTime.push(stats[3]);
          };
        };
      });
      for (var i = 0; i<InstagramFollowers.length; i++){
        var obj = {x:InstagramFollowersTime[i],y:InstagramFollowers[i]};
        InstagramFollowersArray.push(obj);
      };
      for (var i = 0; i<InstagramLikes.length; i++){
        var obj = {x:InstagramLikesTime[i],y:InstagramLikes[i]};
        InstagramLikesArray.push(obj);
      };
      for (var i = 0; i<InstagramReproductions.length; i++){
        var obj = {x:InstagramReproductionsTime[i],y:InstagramReproductions[i]};
        InstagramReproductionsArray.push(obj);
      };
      for (var i = 0; i<InstagramComments.length; i++){
        var obj = {x:InstagramCommentsTime[i],y:InstagramComments[i]};
        InstagramCommentsArray.push(obj);
      };
        scatterChartData.datasets[0].data = InstagramFollowersArray;
        scatterChartData.datasets[1].data = InstagramLikesArray;
        scatterChartData.datasets[2].data = InstagramReproductionsArray;
        scatterChartData.datasets[3].data = InstagramCommentsArray;
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
              text: 'Instagram Stats - Weekly'
          },
          legend: {
              display: true,
              position: 'bottom'
          }
      }
  });
  InstagramFollowers = [];
  InstagramFollowersTime = [];
  InstagramFollowersArray = [];

  InstagramLikes = [];
  InstagramLikesTime = [];
  InstagramLikesArray = [];

  InstagramReproductions = [];
  InstagramReproductionsTime = [];
  InstagramReproductionsArray = [];

  InstagramComments = [];
  InstagramCommentsTime = [];
  InstagramCommentsArray = [];

  fetch('js/logs/weekly.txt')
    .then(yt => yt.text())
    .then(content => {
      let lines = content.split(/\n/);
      lines.forEach(function(line){
        let stats = line.split('-');
        if (stats[0]=='Instagram'){
          if (stats[1]=='Followers'){
            InstagramFollowers.push(stats[2]);
            InstagramFollowersTime.push(stats[3]);
          };
          if (stats[1]=='Likes'){
            InstagramLikes.push(stats[2]);
            InstagramLikesTime.push(stats[3]);
          };
          if (stats[1]=='Reproductions'){
            InstagramReproductions.push(stats[2]);
            InstagramReproductionsTime.push(stats[3]);
          };
          if (stats[1]=='Comments'){
            InstagramComments.push(stats[2]);
            InstagramCommentsTime.push(stats[3]);
          };
        };
      });
      for (var i = 0; i<InstagramFollowers.length; i++){
        var obj = {x:InstagramFollowersTime[i],y:InstagramFollowers[i]};
        InstagramFollowersArray.push(obj);
      };
      for (var i = 0; i<InstagramLikes.length; i++){
        var obj = {x:InstagramLikesTime[i],y:InstagramLikes[i]};
        InstagramLikesArray.push(obj);
      };
      for (var i = 0; i<InstagramReproductions.length; i++){
        var obj = {x:InstagramReproductionsTime[i],y:InstagramReproductions[i]};
        InstagramReproductionsArray.push(obj);
      };
      for (var i = 0; i<InstagramComments.length; i++){
        var obj = {x:InstagramCommentsTime[i],y:InstagramComments[i]};
        InstagramCommentsArray.push(obj);
      };
        scatterChartData.datasets[0].data = InstagramFollowersArray;
        scatterChartData.datasets[1].data = InstagramLikesArray;
        scatterChartData.datasets[2].data = InstagramReproductionsArray;
        scatterChartData.datasets[3].data = InstagramCommentsArray;
      window.myScatter.update();
    });
  });
