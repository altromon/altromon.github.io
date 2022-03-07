
var ctx1 = document.getElementById("pieChartSoftwareEngineering");

var pieChart1 = new Chart(ctx1, {
    type: 'RoundedDoughnut',
    options: {
        cutoutPercentage: 75,
        legend: {
            position: 'left',
            labels: {
                boxWidth: 10,
                fontStyle: 'italic',
                fontColor: '#aaa',
                usePointStyle: true,
            }
        },

    },
    data: {
        labels: [
            "Requirements Definition",
            "Specification",
            "Architecture Design",
            "Development",
            "Validation"
        ],
        datasets: [
            {
                data: [200, 200, 250, 250, 100],
                borderWidth: 0,
                backgroundColor: [
                    Magenta,
                    LightBlue,
                    DarkBlue,
                    Green,
                    Yellow
                ],
                hoverBackgroundColor: [
                    Magenta,
                    LightBlue,
                    DarkBlue,
                    Green,
                    Yellow
                ]
            }]
        }
    });
