<template>
	<div class="tour-single">
		<div class="hero-wrap js-fullheight" style="background-image: url('/car.jpg');">
		<div class="overlay"></div>
		<div class="container">
			<div class="row no-gutters slider-text js-fullheight align-items-center justify-content-center" data-scrollax-parent="true">
			<div class="col-md-9 ftco-animate text-center" data-scrollax=" properties: { translateY: '70%' }">
				<p class="breadcrumbs" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"><span class="mr-2"><a href="/">Trang chủ</a></span> <span class="mr-2"><a href="/car">Car</a></span> <span>Car Single</span></p>
				<h1 class="mb-3 bread" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Car Details</h1>
			</div>
			</div>
		</div>
	</div>

    <section class="ftco-section ftco-degree-bg">
      <div class="container">
        <div class="row">
        	<div class="col-lg-3 sidebar">
        		<div class="sidebar-wrap bg-light ftco-animate">
        			<h3 class="heading mb-4">Star Rating</h3>
        			<form method="post" class="star-rating">
							<div class="form-check">
									<input type="checkbox" class="form-check-input" id="exampleCheck1">
									<label class="form-check-label" for="exampleCheck1">
										<p class="rate"><span><i class="icon-star"></i><i class="icon-star"></i><i class="icon-star"></i><i class="icon-star"></i><i class="icon-star"></i></span></p>
									</label>
							  </div>
							  <div class="form-check">
						      <input type="checkbox" class="form-check-input" id="exampleCheck1">
						      <label class="form-check-label" for="exampleCheck1">
						    	   <p class="rate"><span><i class="icon-star"></i><i class="icon-star"></i><i class="icon-star"></i><i class="icon-star"></i><i class="icon-star-o"></i></span></p>
						      </label>
							  </div>
							  <div class="form-check">
						      <input type="checkbox" class="form-check-input" id="exampleCheck1">
						      <label class="form-check-label" for="exampleCheck1">
						      	<p class="rate"><span><i class="icon-star"></i><i class="icon-star"></i><i class="icon-star"></i><i class="icon-star-o"></i><i class="icon-star-o"></i></span></p>
						     </label>
							  </div>
							  <div class="form-check">
							    <input type="checkbox" class="form-check-input" id="exampleCheck1">
						      <label class="form-check-label" for="exampleCheck1">
						      	<p class="rate"><span><i class="icon-star"></i><i class="icon-star"></i><i class="icon-star-o"></i><i class="icon-star-o"></i><i class="icon-star-o"></i></span></p>
						      </label>
							  </div>
							  <div class="form-check">
						      <input type="checkbox" class="form-check-input" id="exampleCheck1">
						      <label class="form-check-label" for="exampleCheck1">
						      	<p class="rate"><span><i class="icon-star"></i><i class="icon-star-o"></i><i class="icon-star-o"></i><i class="icon-star-o"></i><i class="icon-star-o"></i></span></p>
							    </label>
							  </div>
							</form>
        		</div>
          </div>
          <div class="col-lg-9">
          	<div class="row">
          		<div class="col-md-12 ftco-animate">
          			<div class="single-slider owl-carousel">
          				<div class="item">
          					<div class="hotel-img" v-bind:style="'background-image: url(' + car.image +')'"></div>
          				</div>
          				<div class="item">
          					<div class="hotel-img" v-bind:style="'background-image: url(' + car.image +'); -webkit-transform: scaleX(-1); transform: scaleX(-1)'"></div>
          				</div>
          			</div>
          		</div>
          		<div class="col-md-12 hotel-single mt-4 mb-5 ftco-animate">
          			<span>Our Best Cars sponsored by wLink</span>
          			<h2>{{car.name}}</h2>
          			<p class="rate mb-5">
          				<span class="loc"><a href="#"><i class="icon-map"></i> {{car.name}}</a></span>
          				<span class="star">
							<i class="icon-star"></i>
							<i class="icon-star"></i>
							<i class="icon-star"></i>
							<i class="icon-star"></i>
							<i class="icon-star-o"></i>
						8 Rating</span>
					</p>
					<p><b>Size: </b>{{car.size}}</p>
					<p><b>Seating Capacity: </b>{{car.seatingCapacity}}</p>
					<p><b>Air Conditioner: </b>{{car.airConditioner==1 ? 'required' : 'none'}}</p>
					<p><b>Driver: </b>{{car.driver==1 ? 'required' : 'none'}}</p>
          		</div>
          		<div v-if="token!=''" class="col-md-12 hotel-single ftco-animate mb-5 mt-4">
          			<h4 class="mb-5">Check Availability &amp; Booking</h4>
          			<div class="fields">
          				<div class="row">
				            <div class="col-md-12">
				              <div class="form-group">
				                <input v-if="!booking" v-on:click="bookCar" type="button" value="Book Now" class="btn btn-primary py-3">
								<input v-if="booking" type="button" value="Please wait..." class="btn btn-primary py-3" disabled>
				              </div>
			              </div>
		              </div>
		            </div>
          		</div>
				<h4 class="mb-3" style="color:red" v-if="token==''">Please login to book.</h4>
          		<div class="col-md-12 hotel-single ftco-animate mb-5 mt-4">
          			<h4 class="mb-4">Review &amp; Ratings</h4>
          			<div class="row">
          				<div class="col-md-6">
          					<form method="post" class="star-rating">
								<div class="form-check">
									<input type="checkbox" class="form-check-input" id="exampleCheck1">
									<label class="form-check-label" for="exampleCheck1">
										<p class="rate"><span><i class="icon-star"></i><i class="icon-star"></i><i class="icon-star"></i><i class="icon-star"></i><i class="icon-star"></i> 100 Ratings</span></p>
									</label>
								</div>
								<div class="form-check">
								<input type="checkbox" class="form-check-input" id="exampleCheck1">
								<label class="form-check-label" for="exampleCheck1">
									<p class="rate"><span><i class="icon-star"></i><i class="icon-star"></i><i class="icon-star"></i><i class="icon-star"></i><i class="icon-star-o"></i> 30 Ratings</span></p>
								</label>
								</div>
								<div class="form-check">
								<input type="checkbox" class="form-check-input" id="exampleCheck1">
								<label class="form-check-label" for="exampleCheck1">
								<p class="rate"><span><i class="icon-star"></i><i class="icon-star"></i><i class="icon-star"></i><i class="icon-star-o"></i><i class="icon-star-o"></i> 5 Ratings</span></p>
								</label>
								</div>
								<div class="form-check">
								<input type="checkbox" class="form-check-input" id="exampleCheck1">
								<label class="form-check-label" for="exampleCheck1">
								<p class="rate"><span><i class="icon-star"></i><i class="icon-star"></i><i class="icon-star-o"></i><i class="icon-star-o"></i><i class="icon-star-o"></i> 0 Ratings</span></p>
								</label>
								</div>
								<div class="form-check">
								<input type="checkbox" class="form-check-input" id="exampleCheck1">
								<label class="form-check-label" for="exampleCheck1">
								<p class="rate"><span><i class="icon-star"></i><i class="icon-star-o"></i><i class="icon-star-o"></i><i class="icon-star-o"></i><i class="icon-star-o"></i> 0 Ratings</span></p>
								</label>
								</div>
							</form>
          				</div>
          			</div>
          		</div>
          		<div class="col-md-12 hotel-single ftco-animate mb-5 mt-5">
          			<h4 class="mb-4">Other Cars</h4>
          			<div class="row">
          				<div v-for="(car, index) in cars" v-bind:key="index" class="col-md-4 ftco-animate fadeInUp ftco-animated">
							<div class="destination">
								<a :href="'/car/' + car.id" class="img img-2 d-flex justify-content-center align-items-center" v-bind:style="'background-image: url(' + car.image + ')'">
									<div class="icon d-flex justify-content-center align-items-center">
										<span class="icon-search2"></span>
									</div>
								</a>
								<div class="text p-3">
									<div class="d-flex">
										<div class="one">
											<h3><a :href="'/car/' + car.id">{{car.name}}</a></h3>
											<p class="rate">
												<i class="icon-star"></i>
												<i class="icon-star"></i>
												<i class="icon-star"></i>
												<i class="icon-star"></i>
												<i class="icon-star-o"></i>
												<span>8 Rating</span>
											</p>
										</div>
										<div class="two">
											<span class="price">${{car.price}}</span>
										</div>
									</div>
									<p><b>Seating: </b> {{car.seatingCapacity}}</p>
									<p><b>Driver: </b> {{car.driver==1 ? 'available' : 'none'}}</p>
									<p><b>Air Conditioner: </b> {{car.airConditioner ? 'available' : 'none'}}</p>
									<p class="days"><span>Size: {{car.size}}</span></p>
									<hr>
									<p class="bottom-area d-flex">
										<span><i class="far fa-check-circle"></i> Qualified</span> 
										<span class="ml-auto"><a :href="'/car/' + car.id">Book now</a></span>
									</p>
								</div>
							</div>
						</div>
          			</div>
          		</div>

          	</div>
          </div> <!-- .col-md-8 -->
        </div>
      </div>
    </section> <!-- .section -->
	</div>
</template>

<style lang="less" scoped>
	.ellipsis {
		height: 100px;
		overflow: hidden;
	}
</style>

<script>
export default {
	data: function() {
		return {
			cars: [{
				name: '',
				size: '',
				seatingCapacity: '',
				driver: '',
				airConditioner: '',
				price: '',
				image: '',
				model: 1
			}],
			car: {
				name: '',
				size: '',
				seatingCapacity: '',
				driver: '',
				airConditioner: '',
				price: '',
				image: '',
				model: 1
			},
			order: {
				carId: '',
				groupTypeId: 1,
				season: 'Autumn'
			},
			booking: false,
			orderId: '',
			orderToken: '',
			redirect_url: '',
			config: {
				headers: {
					'Content-Type': 'application/json',
					Authorization: '',
				}
			},
		}
	},
	created: function() {
		axios.get(this.baseUrl + '/api/car/getOne/' + this.$route.params.id)
		.then((response) => {
			this.car = response.data.data;
		})
		.catch(function (error) {
			console.log(error);
		});

		axios.get(this.baseUrl + '/api/car/random')
		.then((response) => {
			this.cars = response.data.data;
		})
		.catch(function (error) {
			console.log(error);
		});
	},
	methods: {
		bookCar: function() {
			this.booking=true;		
			this.config.headers.Authorization = 'Bearer ' + this.token;
			this.order.carId = parseInt(this.$route.params.id);
			axios.post(this.baseUrl + '/api/orderCar/create', JSON.stringify(this.order), this.config)
			.then((response) => {
				this.orderId = response.data.data.id;
			})
			.catch(function (error) {
				console.log(error);
			});

			axios.post(this.baseUrl + '/paypal/make/payment?sum=' + this.car.price, [], this.config)
			.then((response) => {
				this.redirect_url = response.data.redirect_url;
				this.orderToken = response.data.redirect_url.split("&token=")[1];
			})
			.catch(function (error) {
				console.log(error);
			});
		}
	},
	mounted() {
		this.$watch(vm => [vm.orderId, vm.orderToken], val => {		
			if (this.orderId != '' && this.orderToken != '') {
				axios.get(this.baseUrl + '/api/orderCar/editToken/' + this.orderId + '?token=' + this.orderToken, this.config)
				.then((response) => {
					window.location.href = this.redirect_url;
				})
				.catch(function (error) {
					console.log(error);
				});
			}
		}, {immediate: true}) // run immediately
	}
}
</script>