(function ($) {
  'use strict';
  const results = window.chartData.results;
    const payments = window.chartData.payments;
    const rentalCategory = window.chartData.rentalCategory;
    const rentalCountry = window.chartData.rentalCountry;
    const revenueStore = window.chartData.revenueStore;
    const rentalActor = window.chartData.rentalActor;



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
          labels: ['MAY', 'JUN', 'JUL', 'AUG', 'FEB'],  // Label di sumbu X
          datasets: [{
              label: "Revenue",
              borderColor: gradientStrokeViolet,
              backgroundColor: gradientStrokeViolet,
              fillColor: bgColor1,
              hoverBackgroundColor: gradientStrokeViolet,
              pointRadius: 0,
              fill: false,
              borderWidth: 1,
              fill: 'origin',
              data: [
                  payments[1].total_payment, 
                  payments[2].total_payment, 
                  payments[3].total_payment, 
                  payments[4].total_payment, 
                  payments[0].total_payment
              ],
              barPercentage: 0.5,
              categoryPercentage: 0.5,
          }]
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
                  display: true,  // Menampilkan sumbu Y
                  title: {
                      display: true,  // Menampilkan label pada sumbu Y
                      text: 'Revenue ($)',  // Label sumbu Y
                      font: {
                          size: 14
                      }
                  },
                  ticks: {
                      callback: function(value, index, values) {
                          return '$' + value;  // Menampilkan nilai dalam bentuk dolar
                      }
                  },
                  grid: {
                      display: true,  // Menampilkan grid di sumbu Y
                      drawOnChartArea: true,
                      drawTicks: true,
                  }
              },
              x: {
                  display: true,
                  grid: {
                      display: false,  // Tidak menampilkan grid di sumbu X
                  },
              }
          },
          plugins: {
              legend: {
                  display: false,  // Tidak menampilkan legend secara default
              }
          }
      },
      plugins: [{
          afterDatasetUpdate: function (chart, args, options) {
              const chartId = chart.canvas.id;
              const legendId = `${chartId}-legend`;
              const ul = document.createElement('ul');
              for (let i = 0; i < chart.data.datasets.length; i++) {
                  ul.innerHTML += `
                      <li>
                          <span style="background-color: ${chart.data.datasets[i].fillColor}"></span>
                          ${chart.data.datasets[i].label}
                      </li>
                  `;
              }
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

// Teal Gradient
var gradientStrokeTeal = graphGradient.createLinearGradient(0, 0, 0, 140);
gradientStrokeTeal.addColorStop(0, 'rgba(0, 128, 128, 1)');
gradientStrokeTeal.addColorStop(1, 'rgba(64, 224, 208, 1)');
var gradientLegendTeal = 'rgba(0, 128, 128, 1)';

// Brown Gradient
var gradientStrokeBrown = graphGradient.createLinearGradient(0, 0, 0, 200);
gradientStrokeBrown.addColorStop(0, 'rgba(139, 69, 19, 1)');
gradientStrokeBrown.addColorStop(1, 'rgba(210, 105, 30, 1)');
var gradientLegendBrown = 'rgba(139, 69, 19, 1)';

// Cyan Gradient
var gradientStrokeCyan = graphGradient.createLinearGradient(0, 0, 0, 220);
gradientStrokeCyan.addColorStop(0, 'rgba(0, 255, 255, 1)');
gradientStrokeCyan.addColorStop(1, 'rgba(0, 206, 209, 1)');
var gradientLegendCyan = 'rgba(0, 255, 255, 1)';

// Lime Gradient
var gradientStrokeLime = graphGradient.createLinearGradient(0, 0, 0, 190);
gradientStrokeLime.addColorStop(0, 'rgba(50, 205, 50, 1)');
gradientStrokeLime.addColorStop(1, 'rgba(124, 252, 0, 1)');
var gradientLegendLime = 'rgba(50, 205, 50, 1)';

// Indigo Gradient
var gradientStrokeIndigo = graphGradient.createLinearGradient(0, 0, 0, 130);
gradientStrokeIndigo.addColorStop(0, 'rgba(75, 0, 130, 1)');
gradientStrokeIndigo.addColorStop(1, 'rgba(138, 43, 226, 1)');
var gradientLegendIndigo = 'rgba(75, 0, 130, 1)';

// Silver Gradient
var gradientStrokeSilver = graphGradient.createLinearGradient(0, 0, 0, 240);
gradientStrokeSilver.addColorStop(0, 'rgba(192, 192, 192, 1)');
gradientStrokeSilver.addColorStop(1, 'rgba(169, 169, 169, 1)');
var gradientLegendSilver = 'rgba(192, 192, 192, 1)';

// Gold Gradient
var gradientStrokeGold = graphGradient.createLinearGradient(0, 0, 0, 250);
gradientStrokeGold.addColorStop(0, 'rgba(255, 215, 0, 1)');
gradientStrokeGold.addColorStop(1, 'rgba(218, 165, 32, 1)');
var gradientLegendGold = 'rgba(255, 215, 0, 1)';

// Magenta Gradient
var gradientStrokeMagenta = graphGradient.createLinearGradient(0, 0, 0, 270);
gradientStrokeMagenta.addColorStop(0, 'rgba(255, 0, 255, 1)');
gradientStrokeMagenta.addColorStop(1, 'rgba(199, 21, 133, 1)');
var gradientLegendMagenta = 'rgba(255, 0, 255, 1)';

// New Gradient: Turquoise Gradient
var gradientStrokeTurquoise = graphGradient.createLinearGradient(0, 0, 0, 180);
gradientStrokeTurquoise.addColorStop(0, 'rgba(64, 224, 208, 1)');
gradientStrokeTurquoise.addColorStop(1, 'rgba(72, 209, 204, 1)');
var gradientLegendTurquoise = 'rgba(64, 224, 208, 1)';
    

    // const bgColor1 = ["rgba(54, 215, 232, 1)"];
    // const bgColor2 = ["rgba(255, 191, 150, 1"];
    // const bgColor3 = ["rgba(6, 185, 157, 1)"];

    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: rentalCategory.map(category => category.category_name),
        datasets: [{
          data: rentalCategory.map(category => category.percentage),
          backgroundColor: [gradientStrokeBlue, gradientStrokeGreen, gradientStrokeRed, gradientStrokePink, gradientStrokePurple, gradientStrokeOrange, gradientStrokeYellow, gradientStrokeBrown, gradientStrokeTeal, gradientStrokeCyan, gradientStrokeLime, gradientStrokeIndigo,gradientStrokeSilver, gradientStrokeGold, gradientStrokeMagenta, gradientStrokeTurquoise],
          hoverBackgroundColor: [
            gradientStrokeBlue,
            gradientStrokeGreen,
            gradientStrokeRed,
            gradientStrokePink, 
            gradientStrokePurple, 
            gradientStrokeOrange, 
            gradientStrokeYellow,
            gradientStrokeBrown, 
            gradientStrokeTeal, 
            gradientStrokeCyan, 
            gradientStrokeLime, 
            gradientStrokeIndigo,
            gradientStrokeSilver, 
            gradientStrokeGold, 
            gradientStrokeMagenta, 
            gradientStrokeTurquoise
          ],
          borderColor: [
            gradientStrokeBlue,
            gradientStrokeGreen,
            gradientStrokeRed,
            gradientStrokePink, 
            gradientStrokePurple, 
            gradientStrokeOrange, 
            gradientStrokeYellow,
            gradientStrokeBrown, 
            gradientStrokeTeal, 
            gradientStrokeCyan, 
            gradientStrokeLime, 
            gradientStrokeIndigo,
            gradientStrokeSilver, 
            gradientStrokeGold, 
            gradientStrokeMagenta, 
            gradientStrokeTurquoise
          ],
          legendColor: [
            gradientLegendBlue,
            gradientLegendGreen,
            gradientLegendRed,
            gradientLegendPink,
            gradientLegendPurple, 
            gradientLegendOrange,
            gradientLegendYellow,
            gradientLegendBrown, 
            gradientLegendTeal, 
            gradientLegendCyan, 
            gradientLegendLime, 
            gradientLegendIndigo,
            gradientLegendSilver, 
            gradientLegendGold, 
            gradientLegendMagenta, 
            gradientLegendTurquoise
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
          const legendId = `${chartId}-legend`;
      
          // Pastikan untuk menghapus elemen legend sebelumnya jika ada
          const existingLegend = document.getElementById(legendId);
          if (existingLegend) {
            existingLegend.innerHTML = ''; // Kosongkan sebelum menambahkan item baru
          }
      
          const ul = document.createElement('ul');
          ul.style.display = 'flex'; 
          ul.style.flexWrap = 'wrap';
      
          for (let i = 0; i < chart.data.datasets[0].data.length; i++) {
            ul.innerHTML += `
              <li style="flex-basis: calc(33.33% - 10px); margin-right: 10px; margin-bottom: 10px;">
                <span style="background-color: ${chart.data.datasets[0].legendColor[i]}; width: 10px; height: 10px; display: inline-block;"></span>
                ${chart.data.labels[i]}
              </li>
            `;
          }
      
          return document.getElementById(legendId).appendChild(ul);
        }
      }]      
      
    });
  }

  // Data untuk chart
var multiLineData = {
  labels: ["May 2005", "June 2005", "July 2005", "August 2005", "Feb 2006"],
  datasets: [
      {
          label: 'Store 1',
          data: [revenueStore[1].total_amount, revenueStore[2].total_amount, revenueStore[3].total_amount, revenueStore[4].total_amount, revenueStore[0].total_amount],
          borderColor: '#587ce4',
          borderWidth: 2,
          fill: false
      },
      {
          label: 'Store 2',
          data: [revenueStore[6].total_amount,revenueStore[7].total_amount,revenueStore[8].total_amount,revenueStore[9].total_amount,revenueStore[5].total_amount],
          borderColor: '#f44252',
          borderWidth: 2,
          fill: false
      }
  ]
};

// Opsi untuk chart
var options = {
  scales: {
      y: {
          beginAtZero: true,
          ticks: {
              stepSize: 5
          }
      }
  },
  plugins: {
      legend: {
          display: true // Set to true to show the legend
      }
  },
  elements: {
      line: {
          tension: 0.5 // Set tension to create smooth lines
      },
      point: {
          radius: 4 // Radius of data points
      }
  }
};

// Inisialisasi Chart jika elemen ada
if ($("#linechart-multi").length) {
  var multiLineCanvas = $("#linechart-multi").get(0).getContext("2d");

  // Membuat line chart dengan Chart.js
  var lineChart = new Chart(multiLineCanvas, {
      type: 'line',
      data: multiLineData,
      options: options
  });
}

//Data Donut
var doughnutPieData = {
  datasets: [{
    data: rentalCountry.map(country =>country.percentage),
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
    'Australia',
    'Canada'
  ]
};
var doughnutData = {
  datasets: [{
    data: rentalActor.map(Actor => Actor.total_rental),
    backgroundColor: [
      'rgba(255, 99, 132, 0.5)',    // Merah muda
      'rgba(54, 162, 235, 0.5)',    // Biru
      'rgba(255, 206, 86, 0.5)',    // Kuning
      'rgba(75, 192, 192, 0.5)',    // Hijau pudar
      'rgba(153, 102, 255, 0.5)',   // Ungu
      'rgba(255, 159, 64, 0.5)',    // Oranye
      'rgba(199, 199, 199, 0.5)',   // Abu-abu muda
      'rgba(255, 99, 255, 0.5)',    // Pink terang
      'rgba(132, 255, 99, 0.5)',    // Hijau terang
      'rgba(99, 132, 255, 0.5)'     // Biru terang
    ],
    
    borderColor: [
      'rgba(255, 99, 132, 1)',    // Merah muda
      'rgba(54, 162, 235, 1)',    // Biru
      'rgba(255, 206, 86, 1)',    // Kuning
      'rgba(75, 192, 192, 1)',    // Hijau pudar
      'rgba(153, 102, 255, 1)',   // Ungu
      'rgba(255, 159, 64, 1)',    // Oranye
      'rgba(199, 199, 199, 1)',   // Abu-abu muda
      'rgba(255, 99, 255, 1)',    // Pink terang
      'rgba(132, 255, 99, 1)',    // Hijau terang
      'rgba(99, 132, 255, 1)'     // Biru terang
    ],    
  }],

  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: rentalActor.map(Actor => Actor.full_name)
};
var pieOptions = {
  responsive: true,
  animation: {
    animateScale: true,
    animateRotate: true
  }
};
var doughnutPieOptions = {
  responsive: true,
  animation: {
    animateScale: true,
    animateRotate: true
  },
  cutoutPercentage: 60,  // Adjust the size of the doughnut's center hole for more space
  plugins: {
    legend: {
      display: false, // Menonaktifkan legend dari chart.js
    },
    tooltip: {
      enabled: true, // Tooltip tetap diaktifkan
      callbacks: {
        label: function(tooltipItem) {
          var currentValue = tooltipItem.raw;
          return tooltipItem.label + ': ' + currentValue; // Menampilkan nilai aktual
        }
      }
    }
  }
};

if ($("#doughnutChart").length) {
  var doughnutChartCanvas = $("#doughnutChart").get(0).getContext("2d");
  var doughnutChart = new Chart(doughnutChartCanvas, {
    type: 'doughnut',
    data: doughnutData,
    options: doughnutPieOptions
  });

  // Menambahkan inline CSS untuk chart container
  $('#chartContainer').css({
    'display': 'flex',
    'align-items': 'center' // Align secara vertikal agar tengah
  });

    // Generate custom legend
    var legendContainer = $('#legendContainer');
    legendContainer.css({
      'margin-left': '50px', // Jarak antara chart dan legend
      'display': 'grid',     // Menggunakan grid layout
      'grid-template-columns': 'repeat(2, 1fr)', // 2 kolom yang rata
      'gap': '10px'          // Jarak antar elemen di grid
    });
  
    var legendHtml = '';
    doughnutData.labels.forEach(function(label, index) {
      legendHtml += `<div style="display: flex; align-items: center;">
                       <span style="display:inline-block; width: 10px; height: 10px; background-color: ${doughnutData.datasets[0].backgroundColor[index]}; margin-right: 5px;"></span>
                       ${label}
                     </div>`;
    });
    legendContainer.html(legendHtml);// Menambahkan legend kustom ke dalam kontainer
}


if ($("#pieChart").length) {
  var pieChartCanvas = $("#pieChart").get(0).getContext("2d");
  var pieChart = new Chart(pieChartCanvas, {
    type: 'pie',
    data: doughnutPieData,
    options: pieOptions
  });
}

})(jQuery);