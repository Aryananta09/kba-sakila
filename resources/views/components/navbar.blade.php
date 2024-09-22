<!-- partial -->
<nav class="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
    <div class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-start">
      <a class="navbar-brand brand-logo" href=""><h2>Sakila</h2></a>
      <a class="navbar-brand brand-logo-mini" href=""><h2>Sakila</h2></a>
    </div>
    <div class="navbar-menu-wrapper d-flex">
      <ul class="navbar-nav justify-content-center">
        <li class="nav-item d-none d-lg-block">
          <a class="nav-link" id="home-link" style="color:black" href="/tes-app/public/">
            <h4>Home</h4>
          </a>
        </li>
        <li class="nav-item d-none d-lg-block">
          <a class="nav-link" id="about-link" style="color:black" href="/tes-app/public/about">
            <h4>About us</h4>
          </a>
        </li>
      </ul>
      <ul class="navbar-nav navbar-nav-right">
        <li class="nav-item nav-profile dropdown">
          <a class="nav-link dropdown-toggle" id="profileDropdown" href="#" data-bs-toggle="dropdown" aria-expanded="false">
            <div class="nav-profile-img">
              <img src="{{ asset('adminkba/assets/images/faces/face1.jpg ')}}" alt="image">
              <span class="availability-status online"></span>
            </div>
            <div class="nav-profile-text">
              <p class="mb-1 text-black">Kelompok 3</p>
            </div>
          </a>
          <div class="dropdown-menu navbar-dropdown" aria-labelledby="profileDropdown">
            <a class="dropdown-item" href="#">
              <i class="mdi mdi-cached me-2 text-success"></i> Activity Log </a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">
              <i class="mdi mdi-logout me-2 text-primary"></i> Signout </a>
          </div>
        </li>
      </ul>
      <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
        <span class="mdi mdi-menu"></span>
      </button>
    </div>
  </nav>