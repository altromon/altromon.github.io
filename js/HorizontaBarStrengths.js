
var ctx1 = document.getElementById("pieChartStrengths");

var pieChart1 = new Chart(ctx1, {
    type: 'horizontalBar',
    options: {
        legend: {
            display: false
        },
        tooltips: {
            callbacks: {
               label: function(tooltipItem) {
                      return tooltipItem.xLabel;
               }
            }
        },
        scales: {
            xAxes: [{
                gridLines: {
                    display:false
                },
                ticks: {
                    display: false
                }
            }],
            yAxes: [{
                gridLines: {
                    display:false
                }   
            }]
        }
    },
    data: {
        labels: [
            ".NET",
            "RailML",
            "Team Leadership",
            "Database",
            "OPC",
            "JAVA",
        ],
        datasets: [
            {
                data: [950, 800, 700, 400, 300, 200, 0],
                borderWidth: 0,
                backgroundColor: [
                    Magenta,
                    LightBlue,
                    DarkBlue,
                    Green,
                    Yellow,
                    Orange
                ],
                hoverBackgroundColor: [
                    Magenta,
                    LightBlue,
                    DarkBlue,
                    Green,
                    Yellow,
                    Orange
                ]
            }]
    }
});
