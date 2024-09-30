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
  
      // Gradient ungu (violet)
      var gradientStrokeViolet = graphGradient1.createLinearGradient(0, 0, 0, 181);
      gradientStrokeViolet.addColorStop(0, 'rgba(218, 140, 255, 1)');
      gradientStrokeViolet.addColorStop(1, 'rgba(154, 85, 255, 1)');
  
      // Gradient biru
      var gradientStrokeBlue = graphGradient1.createLinearGradient(0, 0, 0, 360);
      gradientStrokeBlue.addColorStop(0, 'rgba(54, 215, 232, 1)');
      gradientStrokeBlue.addColorStop(1, 'rgba(177, 148, 250, 1)');
  
      // Gradient merah
      var gradientStrokeRed = graphGradient1.createLinearGradient(0, 0, 0, 300);
      gradientStrokeRed.addColorStop(0, 'rgba(255, 191, 150, 1)');
      gradientStrokeRed.addColorStop(1, 'rgba(254, 112, 150, 1)');
  
      // Gradient hijau
      var gradientStrokeGreen = graphGradient1.createLinearGradient(0, 0, 0, 300);
      gradientStrokeGreen.addColorStop(0, 'rgba(0, 230, 64, 1)');
      gradientStrokeGreen.addColorStop(1, 'rgba(0, 177, 64, 1)');
  
      // Array warna background untuk setiap bar
      const bgColors = [
          gradientStrokeViolet,  // Warna ungu untuk bar pertama
          gradientStrokeGreen,    // Warna biru untuk bar kedua
          gradientStrokeGreen,     // Warna merah untuk bar ketiga
          gradientStrokeRed,   // Warna hijau untuk bar keempat
          gradientStrokeRed   // Warna ungu lagi untuk bar kelima
      ];
  
      new Chart(ctx, {
          type: 'bar',
          data: {
              labels: ['MAY', 'JUN', 'JUL', 'AUG', 'FEB'],  // Label di sumbu X
              datasets: [{
                  label: "Revenue Dasar",
                  backgroundColor: bgColors,  // Array dengan warna background
                  hoverBackgroundColor: bgColors,  // Warna ketika di-hover
                  data: [
                      payments[1].total_payment, 
                      payments[2].total_payment, 
                      payments[3].total_payment, 
                      payments[4].total_payment, 
                      payments[0].total_payment
                  ],
                  borderWidth: 1,
                  barPercentage: 0.5,
                  categoryPercentage: 0.5,
              }]
          },
          options: {
              responsive: true,
              maintainAspectRatio: true,
              scales: {
                  y: {
                      display: true,
                      title: {
                          display: true,
                          text: 'Revenue ($)',
                          font: {
                              size: 14
                          }
                      },
                      ticks: {
                          callback: function(value) {
                              return '$' + value;
                          }
                      },
                      grid: {
                          display: true,
                      }
                  },
                  x: {
                      display: true,
                      grid: {
                          display: false,
                      }
                  }
              },
              plugins: {
                legend: {
                    display: true,
                    labels: {
                        generateLabels: function(chart) {
                            var original = Chart.defaults.plugins.legend.labels.generateLabels(chart); // Mengambil label asli
                            
                            // Menambahkan label custom baru tanpa diagram baru
                            original.push({
                                text: 'Profit Naik >30%',  // Label baru
                                fillStyle: gradientStrokeGreen,  // Warna yang berbeda
                                strokeStyle: gradientStrokeGreen,  // Warna outline jika diinginkan
                                hidden: false,  // Untuk memastikan label ditampilkan
                            });
                            original.push({
                              text: 'Profit Turun',  // Label baru
                              fillStyle: gradientStrokeRed,  // Warna yang berbeda
                              strokeStyle: gradientStrokeRed,  // Warna outline jika diinginkan
                              hidden: false,  // Untuk memastikan label ditampilkan
                          });
    
                            return original;  // Mengembalikan array legend
                        }
                    }
                }
            }
          }
      });
  }
  

  if ($("#traffic-chart").length) {
    const ctx = document.getElementById('traffic-chart');
    var graphGradient = ctx.getContext('2d');

// Gradient Hijau-Biru (8 warna)
// Gradient Hijau (8 warna)
var gradientStrokeGreen1 = graphGradient1.createLinearGradient(0, 0, 0, 300);
gradientStrokeGreen1.addColorStop(0, 'rgba(204, 255, 204, 1)');   // Hijau sangat terang
gradientStrokeGreen1.addColorStop(1, 'rgba(179, 255, 179, 1)');   // Hijau pucat
var gradientLegendGreen1 = 'rgba(204, 255, 204, 1)';

var gradientStrokeGreen2 = graphGradient1.createLinearGradient(0, 0, 0, 300);
gradientStrokeGreen2.addColorStop(0, 'rgba(128, 255, 128, 1)');   // Hijau muda
gradientStrokeGreen2.addColorStop(1, 'rgba(102, 255, 102, 1)');   // Hijau cerah
var gradientLegendGreen2 ='rgba(128, 255, 128, 1)';

var gradientStrokeGreen3 = graphGradient1.createLinearGradient(0, 0, 0, 300);
gradientStrokeGreen3.addColorStop(0, 'rgba(51, 255, 51, 1)');     // Hijau terang
gradientStrokeGreen3.addColorStop(1, 'rgba(0, 255, 0, 1)');       // Hijau neon
var gradientLegendGreen3 = 'rgba(51, 255, 51, 1)';

var gradientStrokeGreen4 = graphGradient1.createLinearGradient(0, 0, 0, 300);
gradientStrokeGreen4.addColorStop(0, 'rgba(0, 230, 64, 1)');      // Hijau intens
gradientStrokeGreen4.addColorStop(1, 'rgba(0, 204, 51, 1)');      // Hijau normal
var gradientLegendGreen4 = 'rgba(0, 230, 64, 1)';

var gradientStrokeGreen5 = graphGradient1.createLinearGradient(0, 0, 0, 300);
gradientStrokeGreen5.addColorStop(0, 'rgba(0, 204, 0, 1)');       // Hijau murni
gradientStrokeGreen5.addColorStop(1, 'rgba(0, 179, 0, 1)');       // Hijau pekat
var gradientLegendGreen5 = 'rgba(0, 204, 0, 1)';

var gradientStrokeGreen6 = graphGradient1.createLinearGradient(0, 0, 0, 300);
gradientStrokeGreen6.addColorStop(0, 'rgba(0, 153, 51, 1)');      // Hijau daun
gradientStrokeGreen6.addColorStop(1, 'rgba(0, 128, 43, 1)');      // Hijau hutan
var gradientLegendGreen6 = 'rgba(0, 153, 51, 1)';

var gradientStrokeGreen7 = graphGradient1.createLinearGradient(0, 0, 0, 300);
gradientStrokeGreen7.addColorStop(0, 'rgba(0, 102, 34, 1)');      // Hijau gelap
gradientStrokeGreen7.addColorStop(1, 'rgba(0, 77, 26, 1)');       // Hijau zaitun
var gradientLegendGreen7 ='rgba(0, 102, 34, 1)';

var gradientStrokeGreen8 = graphGradient1.createLinearGradient(0, 0, 0, 300);
gradientStrokeGreen8.addColorStop(0, 'rgba(0, 51, 0, 1)');        // Hijau sangat tua
gradientStrokeGreen8.addColorStop(1, 'rgba(0, 38, 0, 1)');        // Hijau kehitaman
var gradientLegendGreen8 = 'rgba(0, 51, 0, 1)';

// Gradient Kuning (5 warna)
var gradientStrokeYellow1 = graphGradient1.createLinearGradient(0, 0, 0, 300);
gradientStrokeYellow1.addColorStop(0, 'rgba(255, 255, 128, 1)');  // Kuning terang
gradientStrokeYellow1.addColorStop(1, 'rgba(255, 255, 64, 1)');   // Kuning lebih terang
var gradientLegendYellow1 = 'rgba(255, 255, 128, 1)';

var gradientStrokeYellow2 = graphGradient1.createLinearGradient(0, 0, 0, 300);
gradientStrokeYellow2.addColorStop(0, 'rgba(255, 255, 0, 1)');    // Kuning standar
gradientStrokeYellow2.addColorStop(1, 'rgba(255, 230, 0, 1)');    // Kuning hangat
var gradientLegendYellow2 = 'rgba(255, 255, 0, 1)';

var gradientStrokeYellow3 = graphGradient1.createLinearGradient(0, 0, 0, 300);
gradientStrokeYellow3.addColorStop(0, 'rgba(255, 204, 0, 1)');    // Kuning emas
gradientStrokeYellow3.addColorStop(1, 'rgba(255, 191, 0, 1)');    // Kuning pekat
var gradientLegendYellow3 = 'rgba(255, 204, 0, 1)';

var gradientStrokeYellow4 = graphGradient1.createLinearGradient(0, 0, 0, 300);
gradientStrokeYellow4.addColorStop(0, 'rgba(255, 179, 0, 1)');    // Kuning oranye
gradientStrokeYellow4.addColorStop(1, 'rgba(255, 153, 0, 1)');    // Kuning sunset
var gradientLegendYellow4 = 'rgba(255, 179, 0, 1)';

var gradientStrokeYellow5 = graphGradient1.createLinearGradient(0, 0, 0, 300);
gradientStrokeYellow5.addColorStop(0, 'rgba(255, 140, 0, 1)');    // Oranye kekuningan
gradientStrokeYellow5.addColorStop(1, 'rgba(255, 128, 0, 1)');    // Oranye lembut
var gradientLegendYellow5 = 'rgba(255, 140, 0, 1)';

// Gradient Merah (3 warna)
var gradientStrokeRed1 = graphGradient1.createLinearGradient(0, 0, 0, 300);
gradientStrokeRed1.addColorStop(0, 'rgba(255, 102, 102, 1)');  // Merah muda terang
gradientStrokeRed1.addColorStop(1, 'rgba(255, 51, 51, 1)');    // Merah muda
var gradientLegendRed1 = 'rgba(255, 102, 102, 1)';

var gradientStrokeRed2 = graphGradient1.createLinearGradient(0, 0, 0, 300);
gradientStrokeRed2.addColorStop(0, 'rgba(255, 0, 0, 1)');      // Merah standar
gradientStrokeRed2.addColorStop(1, 'rgba(204, 0, 0, 1)');      // Merah lebih pekat
var gradientLegendRed2 = 'rgba(255, 0, 0, 1)';

var gradientStrokeRed3 = graphGradient1.createLinearGradient(0, 0, 0, 300);
gradientStrokeRed3.addColorStop(0, 'rgba(153, 0, 0, 1)');      // Merah tua
gradientStrokeRed3.addColorStop(1, 'rgba(128, 0, 0, 1)');      // Merah burgundy
var gradientLegendRed3 = 'rgba(153, 0, 0, 1)';

    

    // const bgColor1 = ["rgba(54, 215, 232, 1)"];
    // const bgColor2 = ["rgba(255, 191, 150, 1"];
    // const bgColor3 = ["rgba(6, 185, 157, 1)"];

    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: rentalCategory.map(category => category.category_name),
        datasets: [{
          data: rentalCategory.map(category => category.rental_count),
          backgroundColor: [gradientStrokeGreen8,gradientStrokeGreen7,gradientStrokeGreen6,gradientStrokeGreen5,gradientStrokeGreen4,gradientStrokeGreen3,gradientStrokeGreen2,gradientStrokeGreen1,gradientStrokeYellow1,gradientStrokeYellow2,gradientStrokeYellow3,gradientStrokeYellow4,gradientStrokeYellow5,gradientStrokeRed1,gradientStrokeRed2,gradientStrokeRed3 ],
          hoverBackgroundColor: [
            gradientStrokeGreen8,
            gradientStrokeGreen7,
            gradientStrokeGreen6,
            gradientStrokeGreen5,
            gradientStrokeGreen4,
            gradientStrokeGreen3,
            gradientStrokeGreen2,
            gradientStrokeGreen1,
            gradientStrokeYellow1,
            gradientStrokeYellow2,
            gradientStrokeYellow3,
            gradientStrokeYellow4,
            gradientStrokeYellow5,
            gradientStrokeRed1,
            gradientStrokeRed2,
            gradientStrokeRed3 
          ],
          borderColor: [
            gradientStrokeGreen8,
            gradientStrokeGreen7,
            gradientStrokeGreen6,
            gradientStrokeGreen5,
            gradientStrokeGreen4,
            gradientStrokeGreen3,
            gradientStrokeGreen2,
            gradientStrokeGreen1,
            gradientStrokeYellow1,
            gradientStrokeYellow2,
            gradientStrokeYellow3,
            gradientStrokeYellow4,
            gradientStrokeYellow5,
            gradientStrokeRed1,
            gradientStrokeRed2,
            gradientStrokeRed3 
          ],
          legendColor: [
            gradientLegendGreen8,
            gradientLegendGreen7,
            gradientLegendGreen6,
            gradientLegendGreen5,
            gradientLegendGreen4,
            gradientLegendGreen3,
            gradientLegendGreen2,
            gradientLegendGreen1,
            gradientLegendYellow1,
            gradientLegendYellow2,
            gradientLegendYellow3,
            gradientLegendYellow4,
            gradientLegendYellow5,
            gradientLegendRed1,
            gradientLegendRed2,
            gradientLegendRed3 
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