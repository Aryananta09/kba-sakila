<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Dashboard Sakila</title>
    <!-- plugins:css -->
    <link rel="stylesheet" href="{{ asset('adminkba/assets/vendors/mdi/css/materialdesignicons.min.css')}}">
    <link rel="stylesheet" href="{{ asset('adminkba/assets/vendors/ti-icons/css/themify-icons.css')}}">
    <link rel="stylesheet" href="{{ asset('adminkba/assets/vendors/css/vendor.bundle.base.css')}}">
    <link rel="stylesheet" href="{{ asset('adminkba/assets/vendors/font-awesome/css/font-awesome.min.css')}}">
    <!-- endinject -->
    <!-- Plugin css for this page -->
    <link rel="stylesheet" href="{{ asset('adminkba/assets/vendors/font-awesome/css/font-awesome.min.css')}}" />
    <link rel="stylesheet" href="{{ asset('adminkba/assets/vendors/bootstrap-datepicker/bootstrap-datepicker.min.css')}}">
    <!-- End plugin css for this page -->
    <!-- inject:css -->
    <!-- endinject -->
    <!-- Layout styles -->
    <link rel="stylesheet" href="{{ asset('adminkba/assets/css/style.css')}}">
    <!-- End layout styles -->
    <link rel="shortcut icon" href="{{ asset('adminkba/assets/images/favicon.png')}}" />
    
  </head>
  
  <body>
    
    <x-layout></x-layout>

<!-- <h1>tes</h1> -->
    <div>
          <div class="content-wrapper">
            <div class="page-header">
              <h3 class="page-title">
                <span class="page-title-icon bg-gradient-primary text-white me-2">
                  <i class="mdi mdi-home"></i>
                </span> Dashboard
              </h3>
              <nav aria-label="breadcrumb">
                <ul class="breadcrumb">
                  <li class="breadcrumb-item active" aria-current="page">
                    <span></span>Overview <i class="mdi mdi-alert-circle-outline icon-sm text-primary align-middle"></i>
                  </li>
                </ul>
              </nav>
            </div>
            <div class="row">
              <div class="col-md-4 stretch-card grid-margin">
                <div class="card bg-gradient-danger card-img-holder text-white">
                  <div class="card-body">
                    <img src="{{ asset('adminkba/assets/images/dashboard/circle.svg')}}" class="card-img-absolute" alt="circle-image" />
                    <h4 class="font-weight-normal mb-3">Yearly Revenue <i class="mdi mdi-chart-line mdi-24px float-end"></i>
                    </h4>
                    <h2 class="mb-5">$ XX,XXX</h2>
                    <h6 class="card-text">Increased by XX%</h6>
                  </div>
                </div>
              </div>
              <div class="col-md-4 stretch-card grid-margin">
                <div class="card bg-gradient-info card-img-holder text-white">
                  <div class="card-body">
                    <img src="{{ asset('adminkba/assets/images/dashboard/circle.svg')}}" class="card-img-absolute" alt="circle-image" />
                    <h4 class="font-weight-normal mb-3">Yearly Orders <i class="mdi mdi-bookmark-outline mdi-24px float-end"></i>
                    </h4>
                    <h2 class="mb-5">X,XXX</h2>
                    <h6 class="card-text">Decreased by -%</h6>
                  </div>
                </div>
              </div>
              <div class="col-md-4 stretch-card grid-margin">
                <div class="card bg-gradient-success card-img-holder text-white">
                  <div class="card-body">
                    <img src="{{ asset('adminkba/assets/images/dashboard/circle.svg')}}" class="card-img-absolute" alt="circle-image" />
                    <h4 class="font-weight-normal mb-3">Revenue Per Order<i class="mdi mdi-diamond mdi-24px float-end"></i>
                    </h4>
                    <h2 class="mb-5">$X.XXX</h2>
                    <h6 class="card-text">Increased by -%</h6>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-7 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <div class="clearfix">
                      <h4 class="card-title float-start">Total Revenue Monthly Statistics</h4>
                      <div id="visit-sale-chart-legend" class="rounded-legend legend-horizontal legend-top-right float-end"></div>
                    </div>
                    <canvas id="visit-sale-chart" class="mt-4"></canvas>
                  </div>
                </div>
              </div>
              <div class="col-md-5 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Genre Trend</h4>
                    <div class="doughnutjs-wrapper d-flex justify-content-center">
                      <canvas id="traffic-chart"></canvas>
                    </div>
                    <div id="traffic-chart-legend" class="rounded-legend legend-vertical legend-bottom-left pt-4"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
                <div class="col-lg-6 grid-margin stretch-card">
                  <div class="card">
                    <div class="card-body">
                      <h4 class="card-title">Rental by Country</h4>
                      <div class="doughnutjs-wrapper d-flex justify-content-center">
                        <canvas id="pieChart"></canvas>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 grid-margin stretch-card">
                    <div class="card">
                      <div class="card-body">
                        <h4 class="card-title">Store Comparation</h4>
                        <canvas id="linechart-multi" style="height:250px"></canvas>
                      </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6 grid-margin stretch-card">
                        <div class="card">
                          <div class="card-body">
                            <h4 class="card-title">Most Rental by Actor</h4>
                            <div class="doughnutjs-wrapper d-flex justify-content-center">
                              <canvas id="doughnutChart"></canvas>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                </div>
      <!-- plugins:js -->
    <script src="{{ asset('adminkba/assets/vendors/js/vendor.bundle.base.js')}}"></script>
    <!-- endinject -->
    <!-- Plugin js for this page -->
    <script src="{{ asset('adminkba/assets/vendors/chart.js/chart.umd.js')}}"></script>
    <script src="{{ asset('adminkba/assets/vendors/bootstrap-datepicker/bootstrap-datepicker.min.js')}}"></script>
    <!-- End plugin js for this page -->
    <!-- inject:js -->
    <script src="{{ asset('adminkba/assets/js/off-canvas.js')}}"></script>
    <script src="{{ asset('adminkba/assets/js/misc.js')}}"></script>
    <script src="{{ asset('adminkba/assets/js/settings.js')}}"></script>
    <script src="{{ asset('adminkba/assets/js/todolist.js')}}"></script>
    <script src="{{ asset('adminkba/assets/js/jquery.cookie.js')}}"></script>
    <!-- endinject -->
    <!-- Custom js for this page -->
    <script src="{{ asset('adminkba/assets/js/dashboard.js')}}"></script>
    <script src="{{ asset('../resources/js/chart.js')}}"></script>
    <script>
        var multiLineData = {
    labels: ["PPP", "Blue", "Yellow", "Green", "Purple", "Orange"],
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
  if ($("#linechart-multi").length) {
    var multiLineCanvas = $("#linechart-multi").get(0).getContext("2d");
    if (window.linechart-multi) {
      window.linechart-multi.destroy();
  }  
    var lineChart = new Chart(multiLineCanvas, {
      type: 'line',
      data: multiLineData,
      options: options
    });
  }
    </script>
    
    <!-- End custom js for this page -->
      
    </body>
