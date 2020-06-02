<template>
  <div id="app">
    <div v-if="ordering"><div class="loader"></div></div>
    <div v-if="!ordering">
      <div v-if="role == 'admin'" class="link-nav pl-3 pr-3">
      <img src="/lol.ico" width="30px" height="30px" alt="">
      <a class="nav-link" href="/">My site <i class="fas fa-home"></i></a>
      <a class="nav-link" href="/admin">My admin <i class="fas fa-users-cog"></i></a> 
      <a v-on:click="logout" class="log-out" href="javascript:void(0)"><i class="fas fa-sign-out-alt"></i>Logout</a>
    </div>
    <div v-if="currentPage!='admin'" id="nav" v-bind:class="{ 'has-token': role == 'admin' }">
      <nav v-bind:class="{ 'has-token': role == 'admin' }" class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
        <div class="container">
          <a class="navbar-brand" href="/">ThanhDatTouries</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="oi oi-menu"></span> Menu
          </button>

          <div class="collapse navbar-collapse" id="ftco-nav">
            <ul class="navbar-nav ml-auto">
              <li  class="nav-item"><a href="/" class="nav-link">Trang Chủ</a></li>
              <li  class="nav-item"><a href="/tour" class="nav-link">Du Lịch</a></li>
              <li  class="nav-item"><a href="/car" class="nav-link">Thuê Xe </a></li>
              <li  class="nav-item"><a href="/hotel" class="nav-link">Thuê Khách Sạn</a></li>
              <li  class="nav-item"><a href="/flight" class="nav-link">Thuê Chuyến Bay</a></li>
              <li  class="nav-item"><a href="/about" class="nav-link">Tin Tức</a></li>
              <li  class="nav-item"><a href="/contact" class="nav-link">Liên Hệ</a></li>
              <li v-if="!token" class="nav-item  cta"><router-link to="/login" class="nav-link"><span><i class="fas fa-sign-in-alt"></i> Đăng Nhập</span></router-link></li>
              <li v-if="token" class="nav-item cta"><router-link to="/account" class="nav-link"><span><i class="far fa-user"></i> Account</span></router-link></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <router-view/>

    <footer v-if="currentPage!='admin'" class="ftco-footer ftco-bg-dark ftco-section">
      <div class="container">
        <div class="row mb-5">
          <div class="col-md">
            <div class="ftco-footer-widget mb-4">
              <h2 class="ftco-heading-2">dirEngine</h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              <ul class="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                <li class="ftco-animate"><a href="#"><span class="icon-twitter"></span></a></li>
                <li class="ftco-animate"><a href="#"><span class="icon-facebook"></span></a></li>
                <li class="ftco-animate"><a href="#"><span class="icon-instagram"></span></a></li>
              </ul>
            </div>
          </div>
          <div class="col-md">
            <div class="ftco-footer-widget mb-4 ml-md-5">
              <h2 class="ftco-heading-2">Information</h2>
              <ul class="list-unstyled">
                <li><a href="#" class="py-2 d-block">About</a></li>
                <li><a href="#" class="py-2 d-block">Service</a></li>
                <li><a href="#" class="py-2 d-block">Terms and Conditions</a></li>
                <li><a href="#" class="py-2 d-block">Become a partner</a></li>
                <li><a href="#" class="py-2 d-block">Best Price Guarantee</a></li>
                <li><a href="#" class="py-2 d-block">Privacy and Policy</a></li>
              </ul>
            </div>
          </div>
          <div class="col-md">
             <div class="ftco-footer-widget mb-4">
              <h2 class="ftco-heading-2">Customer Support</h2>
              <ul class="list-unstyled">
                <li><a href="#" class="py-2 d-block">FAQ</a></li>
                <li><a href="#" class="py-2 d-block">Payment Option</a></li>
                <li><a href="#" class="py-2 d-block">Booking Tips</a></li>
                <li><a href="#" class="py-2 d-block">How it works</a></li>
                <li><a href="#" class="py-2 d-block">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div class="col-md">
            <div class="ftco-footer-widget mb-4">
            	<h2 class="ftco-heading-2">Have a Questions?</h2>
            	<div class="block-23 mb-3">
	              <ul>
	                <li><span class="icon icon-map-marker"></span><span class="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
	                <li><a href="#"><span class="icon icon-phone"></span><span class="text">+2 392 3929 210</span></a></li>
	                <li><a href="#"><span class="icon icon-envelope"></span><span class="text">info@yourdomain.com</span></a></li>
	              </ul>
	            </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 text-center">

            <p><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
  Copyright &copy; All rights reserved | This template is made with <i class="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
  <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --></p>
          </div>
        </div>
      </div>
    </footer>
    </div>
  </div>
</template>

<style lang="less">
  #nav.has-token, .ftco-navbar-light.has-token {
    margin-top: 40px;
  }
  .ftco-navbar-light.scrolled.awake.has-token {
    top: 36px;
  }
  .link-nav {
    position: fixed;
    top: 0;
    width: 100%;
    background: rgb(39, 38, 38);
    z-index: 9999;
    a {
      display: inline-block;
      color: #fff;
      &.log-out{
        color: #c0c1c5;
        float: right;
        padding-top: 8px;
        padding-right: 15px;
      }
    }
  }
  .loader {
  position: absolute;
  top: 40%;
  left: 45%;
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */  
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>

<script>
export default {
  data: function() {
    return {
      pages: {
        TrangChu: '', 
        DuLich: 'tour',
        Oto: 'car',
        KhachSan: 'hotel',
        ChuyenBay: 'flight',
        TinTuc: 'about',
        LienHe: 'contact'
      },
      ordering: false,
      currentPage: '',
      role: 'user',
      config: {
				headers: {
					Authorization: '',
				}
			},
    }
  },
  created: function() {
    var url = new URL(window.location).pathname;
    this.currentPage = url.split("/")[1];
    if (this.token) {
      this.config.headers.Authorization = 'Bearer ' + this.token;
      axios.get(this.baseUrl + '/api/user', this.config)
      .then((response) => {
        if (response.data.data.authorities[0].authority == 'ROLE_USER' && response.data.data.authorities.length == 1) {
          this.role = 'user';
        } else {
          this.role = 'admin'
        }
      })
      .catch(function (error) {
        console.log(error);
      });

      if (window.location.href.indexOf("?") > -1) {
        this.ordering = true;
        var param = window.location.href.split("?")[1];
        axios.get(this.baseUrl + '/paypal/complete/payment?' + param, this.config)
        .then((response) => {
          location.href = "/account"
        })
        .catch(function (error) {
          console.log(error);
        });
      }
    }
  },
  methods: {
    logout: function() {
      document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      location.href = "/";
    }
  }
}
</script>
