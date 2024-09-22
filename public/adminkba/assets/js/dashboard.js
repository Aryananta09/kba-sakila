(function ($) {
  'use strict';
  if ($("#visit-sale-chart").length) {
    const ctx = document.getElementById('visit-sale-chart');

    var graphGradient1 = document.getElementById('visit-sale-chart').getContext("2d");
    var graphGradient2 = document.getElementById('visit-sale-chart').getContext("2d");
    var graphGradient3 = document.getElementById('visit-sale-chart').getContext("2d");

    var gradientStrokeViolet = graphGradient1.createLinearGradient(0, 0, 0, 181);
    gradientStrokeViolet.addColorStop(0, 'rgba(218, 140, 255, 1)');
    gradientStrokeViolet.addColorStop(1, 'rgba(154, 85, 255, 1)');
    var gradientLegendViolet = 'linear-gradient(to right, rgba(218, 140, 255, 1), rgba(154, 85, 255, 1))';

    var gradientStrokeBlue = graphGradient2.createLinearGradient(0, 0, 0, 360);
    gradientStrokeBlue.addColorStop(0, 'rgba(54, 215, 232, 1)');
    gradientStrokeBlue.addColorStop(1, 'rgba(177, 148, 250, 1)');
    var gradientLegendBlue = 'linear-gradient(to right, rgba(54, 215, 232, 1), rgba(177, 148, 250, 1))';

    var gradientStrokeRed = graphGradient3.createLinearGradient(0, 0, 0, 300);
    gradientStrokeRed.addColorStop(0, 'rgba(255, 191, 150, 1)');
    gradientStrokeRed.addColorStop(1, 'rgba(254, 112, 150, 1)');
    var gradientLegendRed = 'linear-gradient(to right, rgba(255, 191, 150, 1), rgba(254, 112, 150, 1))';
    const bgColor1 = ["rgba(218, 140, 255, 1)"];
    const bgColor2 = ["rgba(54, 215, 232, 1"];
    const bgColor3 = ["rgba(255, 191, 150, 1)"];

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
        datasets: [{
          label: "2022",
          borderColor: gradientStrokeViolet,
          backgroundColor: gradientStrokeViolet,
          fillColor: bgColor1,
          hoverBackgroundColor: gradientStrokeViolet,
          pointRadius: 0,
          fill: false,
          borderWidth: 1,
          fill: 'origin',
          data: [20, 40, 15, 35, 25, 50, 30, 20, 25, 30, 40,15],
          barPercentage: 0.5,
          categoryPercentage: 0.5,
        },
        {
          label: "2023",
          borderColor: gradientStrokeBlue,
          backgroundColor: gradientStrokeBlue,
          hoverBackgroundColor: gradientStrokeBlue,
          fillColor: bgColor2,
          pointRadius: 0,
          fill: false,
          borderWidth: 1,
          fill: 'origin',
          data: [40, 30, 20, 10, 50, 15, 35, 40, 40, 50, 45, 45],
          barPercentage: 0.5,
          categoryPercentage: 0.5,
        }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        elements: {
          line: {
            tension: 0.4,
          },
        },
        scales: {
          y: {
            display: false,
            grid: {
              display: true,
              drawOnChartArea: true,
              drawTicks: false,
            },
          },
          x: {
            display: true,
            grid: {
              display: false,
            },
          }
        },
        plugins: {
          legend: {
            display: false,
          }
        }
      },
      plugins: [{
        afterDatasetUpdate: function (chart, args, options) {
          const chartId = chart.canvas.id;
          var i;
          const legendId = `${chartId}-legend`;
          const ul = document.createElement('ul');
          for (i = 0; i < chart.data.datasets.length; i++) {
            ul.innerHTML += `
              <li>
                <span style="background-color: ${chart.data.datasets[i].fillColor}"></span>
                ${chart.data.datasets[i].label}
              </li>
            `;
          }
          // alert(chart.data.datasets[0].backgroundColor);
          return document.getElementById(legendId).appendChild(ul);
        }
      }]
    });
  }

  
  document.addEventListener('DOMContentLoaded', function () {
    // Cek apakah canvas tersedia
    if (document.getElementById("linechart-multi1")) {
        const ctx = document.getElementById('linechart-multi1').getContext('2d');

        // Inisialisasi grafik multiline
        new Chart(ctx, {
            type: 'line', // Tipe grafik multiline
            data: {
                labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
                datasets: [{
                    label: 'Store A',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    fill: true,
                    data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
                    borderWidth: 2,
                    tension: 0.4, // Menambahkan efek kelengkungan
                },
                {
                    label: 'Store B',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    fill: true,
                    data: [20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130],
                    borderWidth: 2,
                    tension: 0.4, // Menambahkan efek kelengkungan
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true, // Memulai skala Y dari nol
                    }
                },
                plugins: {
                    legend: {
                        display: true, // Menampilkan legenda
                    },
                },
            }
        });
    }
});


  if ($("#traffic-chart").length) {
    const ctx = document.getElementById('traffic-chart');
    var graphGradient = ctx.getContext('2d');

    // Blue Gradient
    var gradientStrokeBlue = graphGradient.createLinearGradient(0, 0, 0, 181);
    gradientStrokeBlue.addColorStop(0, 'rgba(54, 215, 232, 1)');
    gradientStrokeBlue.addColorStop(1, 'rgba(177, 148, 250, 1)');
    var gradientLegendBlue = 'rgba(54, 215, 232, 1)';

    // Red Gradient
    var gradientStrokeRed = graphGradient.createLinearGradient(0, 0, 0, 50);
    gradientStrokeRed.addColorStop(0, 'rgba(255, 191, 150, 1)');
    gradientStrokeRed.addColorStop(1, 'rgba(254, 112, 150, 1)');
    var gradientLegendRed = 'rgba(254, 112, 150, 1)';

    // Green Gradient
    var gradientStrokeGreen = graphGradient.createLinearGradient(0, 0, 0, 300);
    gradientStrokeGreen.addColorStop(0, 'rgba(6, 185, 157, 1)');
    gradientStrokeGreen.addColorStop(1, 'rgba(132, 217, 210, 1)');
    var gradientLegendGreen = 'rgba(6, 185, 157, 1)';

    // Purple Gradient
    var gradientStrokePurple = graphGradient.createLinearGradient(0, 0, 0, 100);
    gradientStrokePurple.addColorStop(0, 'rgba(200, 75, 250, 1)');
    gradientStrokePurple.addColorStop(1, 'rgba(150, 50, 250, 1)');
    var gradientLegendPurple = 'rgba(200, 75, 250, 1)';

    // Orange Gradient
    var gradientStrokeOrange = graphGradient.createLinearGradient(0, 0, 0, 120);
    gradientStrokeOrange.addColorStop(0, 'rgba(255, 165, 0, 1)');
    gradientStrokeOrange.addColorStop(1, 'rgba(255, 140, 0, 1)');
    var gradientLegendOrange = 'rgba(255, 165, 0, 1)';

    // Yellow Gradient
    var gradientStrokeYellow = graphGradient.createLinearGradient(0, 0, 0, 80);
    gradientStrokeYellow.addColorStop(0, 'rgba(255, 255, 0, 1)');
    gradientStrokeYellow.addColorStop(1, 'rgba(255, 215, 0, 1)');
    var gradientLegendYellow = 'rgba(255, 255, 0, 1)';

    // Pink Gradient
    var gradientStrokePink = graphGradient.createLinearGradient(0, 0, 0, 160);
    gradientStrokePink.addColorStop(0, 'rgba(255, 105, 180, 1)');
    gradientStrokePink.addColorStop(1, 'rgba(255, 20, 147, 1)');
    var gradientLegendPink = 'rgba(255, 105, 180, 1)';

    

    // const bgColor1 = ["rgba(54, 215, 232, 1)"];
    // const bgColor2 = ["rgba(255, 191, 150, 1"];
    // const bgColor3 = ["rgba(6, 185, 157, 1)"];

    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Action', 'Animation', 'Documentary','Drama', 'Family', 'Sci-Fi', 'Sports' ],
        datasets: [{
          data: [ 14.32,15.02,13.52,13.65,14.12,14.18, 15.19],
          backgroundColor: [gradientStrokeBlue, gradientStrokeGreen, gradientStrokeRed, gradientStrokePink, gradientStrokePurple, gradientStrokeOrange, gradientLegendYellow],
          hoverBackgroundColor: [
            gradientStrokeBlue,
            gradientStrokeGreen,
            gradientStrokeRed,
            gradientStrokePink, 
            gradientStrokePurple, 
            gradientStrokeOrange, 
            gradientLegendYellow
          ],
          borderColor: [
            gradientStrokeBlue,
            gradientStrokeGreen,
            gradientStrokeRed,
            gradientStrokePink, 
            gradientStrokePurple, 
            gradientStrokeOrange, 
            gradientLegendYellow
          ],
          legendColor: [
            gradientLegendBlue,
            gradientLegendGreen,
            gradientLegendRed,
            gradientLegendPink,
            gradientLegendPurple, 
            gradientLegendOrange,
            gradientLegendYellow
          ]
        }]
      },
      options: {
        cutout: 50,
        animationEasing: "easeOutBounce",
        animateRotate: true,
        animateScale: false,
        responsive: true,
        maintainAspectRatio: true,
        showScale: true,
        legend: false,
        plugins: {
          legend: {
            display: false,
          }
        }
      },
      plugins: [{
        afterDatasetUpdate: function (chart, args, options) {
          const chartId = chart.canvas.id;
          var i;
          const legendId = `${chartId}-legend`;
          const ul = document.createElement('ul');
          for (i = 0; i < chart.data.datasets[0].data.length; i++) {
            ul.innerHTML += `
                <li>
                  <span style="background-color: ${chart.data.datasets[0].legendColor[i]}"></span>
                  ${chart.data.labels[i]}
                </li>
              `;
          }
          return document.getElementById(legendId).appendChild(ul);
        }
      }]
    });
  }

  if ($("#actor-chart").length) {
    const ctx = document.getElementById('actor-chart');
    var graphGradient = ctx.getContext('2d');

    // Blue Gradient
    var gradientStrokeBlue = graphGradient.createLinearGradient(0, 0, 0, 181);
    gradientStrokeBlue.addColorStop(0, 'rgba(54, 215, 232, 1)');
    gradientStrokeBlue.addColorStop(1, 'rgba(177, 148, 250, 1)');
    var gradientLegendBlue = 'rgba(54, 215, 232, 1)';

    // Red Gradient
    var gradientStrokeRed = graphGradient.createLinearGradient(0, 0, 0, 50);
    gradientStrokeRed.addColorStop(0, 'rgba(255, 191, 150, 1)');
    gradientStrokeRed.addColorStop(1, 'rgba(254, 112, 150, 1)');
    var gradientLegendRed = 'rgba(254, 112, 150, 1)';

    // Green Gradient
    var gradientStrokeGreen = graphGradient.createLinearGradient(0, 0, 0, 300);
    gradientStrokeGreen.addColorStop(0, 'rgba(6, 185, 157, 1)');
    gradientStrokeGreen.addColorStop(1, 'rgba(132, 217, 210, 1)');
    var gradientLegendGreen = 'rgba(6, 185, 157, 1)';

    // Purple Gradient
    var gradientStrokePurple = graphGradient.createLinearGradient(0, 0, 0, 100);
    gradientStrokePurple.addColorStop(0, 'rgba(200, 75, 250, 1)');
    gradientStrokePurple.addColorStop(1, 'rgba(150, 50, 250, 1)');
    var gradientLegendPurple = 'rgba(200, 75, 250, 1)';

    // Orange Gradient
    var gradientStrokeOrange = graphGradient.createLinearGradient(0, 0, 0, 120);
    gradientStrokeOrange.addColorStop(0, 'rgba(255, 165, 0, 1)');
    gradientStrokeOrange.addColorStop(1, 'rgba(255, 140, 0, 1)');
    var gradientLegendOrange = 'rgba(255, 165, 0, 1)';

    // Yellow Gradient
    var gradientStrokeYellow = graphGradient.createLinearGradient(0, 0, 0, 80);
    gradientStrokeYellow.addColorStop(0, 'rgba(255, 255, 0, 1)');
    gradientStrokeYellow.addColorStop(1, 'rgba(255, 215, 0, 1)');
    var gradientLegendYellow = 'rgba(255, 255, 0, 1)';

    // Pink Gradient
    var gradientStrokePink = graphGradient.createLinearGradient(0, 0, 0, 160);
    gradientStrokePink.addColorStop(0, 'rgba(255, 105, 180, 1)');
    gradientStrokePink.addColorStop(1, 'rgba(255, 20, 147, 1)');
    var gradientLegendPink = 'rgba(255, 105, 180, 1)';

    

    // const bgColor1 = ["rgba(54, 215, 232, 1)"];
    // const bgColor2 = ["rgba(255, 191, 150, 1"];
    // const bgColor3 = ["rgba(6, 185, 157, 1)"];

    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Action', 'Animation', 'Documentary','Drama', 'Family', 'Sci-Fi', 'Sports' ],
        datasets: [{
          data: [ 14.32,15.02,13.52,13.65,14.12,14.18, 15.19],
          backgroundColor: [gradientStrokeBlue, gradientStrokeGreen, gradientStrokeRed, gradientStrokePink, gradientStrokePurple, gradientStrokeOrange, gradientLegendYellow],
          hoverBackgroundColor: [
            gradientStrokeBlue,
            gradientStrokeGreen,
            gradientStrokeRed,
            gradientStrokePink, 
            gradientStrokePurple, 
            gradientStrokeOrange, 
            gradientLegendYellow
          ],
          borderColor: [
            gradientStrokeBlue,
            gradientStrokeGreen,
            gradientStrokeRed,
            gradientStrokePink, 
            gradientStrokePurple, 
            gradientStrokeOrange, 
            gradientLegendYellow
          ],
          legendColor: [
            gradientLegendBlue,
            gradientLegendGreen,
            gradientLegendRed,
            gradientLegendPink,
            gradientLegendPurple, 
            gradientLegendOrange,
            gradientLegendYellow
          ]
        }]
      },
      options: {
        cutout: 50,
        animationEasing: "easeOutBounce",
        animateRotate: true,
        animateScale: false,
        responsive: true,
        maintainAspectRatio: true,
        showScale: true,
        legend: false,
        plugins: {
          legend: {
            display: false,
          }
        }
      },
      plugins: [{
        afterDatasetUpdate: function (chart, args, options) {
          const chartId = chart.canvas.id;
          var i;
          const legendId = `${chartId}-legend`;
          const ul = document.createElement('ul');
          for (i = 0; i < chart.data.datasets[0].data.length; i++) {
            ul.innerHTML += `
                <li>
                  <span style="background-color: ${chart.data.datasets[0].legendColor[i]}"></span>
                  ${chart.data.labels[i]}
                </li>
              `;
          }
          return document.getElementById(legendId).appendChild(ul);
        }
      }]
    });
  }

  if ($("#barChart").length) {
    var barChartCanvas = $("#barChart").get(0).getContext("2d");
    // This will get the first returned node in the jQuery collection.
    var barChart = new Chart(barChartCanvas, {
      type: 'bar',
      data: data,
      options: options
    });
  }

  if ($("#lineChart").length) {
    var lineChartCanvas = $("#lineChart").get(0).getContext("2d");
    var lineChart = new Chart(lineChartCanvas, {
      type: 'line',
      data: data,
      options: options
    });
  }

  if ($("#linechart-multi1").length) {
    var multiLineCanvas = $("#linechart-multi1").get(0).getContext("2d");
    var lineChart = new Chart(multiLineCanvas, {
      type: 'line',
      data: multiLineData,
      options: options
    });
  }

  if ($("#areachart-multi").length) {
    var multiAreaCanvas = $("#areachart-multi1").get(0).getContext("2d");
    var multiAreaChart = new Chart(multiAreaCanvas, {
      type: 'line',
      data: multiAreaData,
      options: multiAreaOptions
    });
  }

  if ($("#doughnutChart1").length) {
    var doughnutChartCanvas = $("#doughnutChart1").get(0).getContext("2d");
    var doughnutChart = new Chart(doughnutChartCanvas, {
      type: 'doughnut',
      data: doughnutPieData,
      options: doughnutPieOptions
    });
  }

  if ($("#pieChart1").length) {
    var pieChartCanvas = $("#pieChart").get(0).getContext("2d");
    var pieChart = new Chart(pieChartCanvas, {
      type: 'pie',
      data: doughnutPieData,
      options: doughnutPieOptions
    });
  }

  var data = {
    labels: ["May 2005", "June 2005", "July 2005", "August 2005", "Feb 2006"],
    datasets: [{
      label: '# of Votes',
      data: [8, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1,
      fill: false
    }]
  };
  var multiLineData = {
    labels: ["APA", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [{
      label: 'Dataset 1',
      data: [12, 19, 3, 5, 2, 3],
      borderColor: [
        '#587ce4'
      ],
      borderWidth: 2,
      fill: false
    },
    {
      label: 'Dataset 2',
      data: [5, 23, 7, 12, 42, 23],
      borderColor: [
        '#ede190'
      ],
      borderWidth: 2,
      fill: false
    },
    {
      label: 'Dataset 3',
      data: [15, 10, 21, 32, 12, 33],
      borderColor: [
        '#f44252'
      ],
      borderWidth: 2,
      fill: false
    }
    ]
  };
  var options = {
    scales: {
      y: {
        ticks: {
          beginAtZero: true
        }
      }
    },
    legend: {
      display: false
    },
    elements: {
      line: {
        tension: 0.5
      },
      point: {
        radius: 0
      }
    }

  };
  var doughnutPieData = {
    datasets: [{
      data: [20,20,20,40],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
      'PPP',
      'Blue',
      'Yellow',
    ]
  };
  var doughnutPieOptions = {
    responsive: true,
    animation: {
      animateScale: true,
      animateRotate: true
    }
  };



  if ($("#inline-datepicker").length) {
    $('#inline-datepicker').datepicker({
      enableOnReadonly: true,
      todayHighlight: true,
    });
  }
  if ($.cookie('purple-pro-banner') != "true") {
    document.querySelector('#proBanner').classList.add('d-flex');
    document.querySelector('.navbar').classList.remove('fixed-top');
  } else {
    document.querySelector('#proBanner').classList.add('d-none');
    document.querySelector('.navbar').classList.add('fixed-top');
  }

  if ($(".navbar").hasClass("fixed-top")) {
    document.querySelector('.page-body-wrapper').classList.remove('pt-0');
    document.querySelector('.navbar').classList.remove('pt-5');
  } else {
    document.querySelector('.page-body-wrapper').classList.add('pt-0');
    document.querySelector('.navbar').classList.add('pt-5');
    document.querySelector('.navbar').classList.add('mt-3');

  }
  document.querySelector('#bannerClose').addEventListener('click', function () {
    document.querySelector('#proBanner').classList.add('d-none');
    document.querySelector('#proBanner').classList.remove('d-flex');
    document.querySelector('.navbar').classList.remove('pt-5');
    document.querySelector('.navbar').classList.add('fixed-top');
    document.querySelector('.page-body-wrapper').classList.add('proBanner-padding-top');
    document.querySelector('.navbar').classList.remove('mt-3');
    var date = new Date();
    date.setTime(date.getTime() + 24 * 60 * 60 * 1000);
    $.cookie('purple-pro-banner', "true", {
      expires: date
    });
  });
})(jQuery);