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