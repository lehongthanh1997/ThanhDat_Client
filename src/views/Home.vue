<template>
  <div class="home">
    <div class="hero-wrap js-fullheight" style="background-image: url('images/bg_1.jpg');">
      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text js-fullheight align-items-center justify-content-start" data-scrollax-parent="true">
          <div class="col-md-9 ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
            <h1 class="mb-4" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"><strong>KHÁM PHÁ <br></strong> thành phố tuyệt vời của bạn</h1>
            <p data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Tìm những nơi tuyệt vời để ở, ăn, mua sắm hoặc ghé thăm từ các chuyên gia địa phương</p>
            <p>Hoặc duyệt qua các điểm nổi bật</p>
            <p class="browse d-md-flex">
            	<span class="d-flex justify-content-md-center align-items-md-center"><a href="/tour"><i class="fas fa-torii-gate"></i>Du Lịch</a></span>
				<span class="d-flex justify-content-md-center align-items-md-center"><a href="/car"><i class="fas fa-car"></i>Thuê Xe</a></span> 
            	<span class="d-flex justify-content-md-center align-items-md-center"><a href="/hotel"><i class="fas fa-hotel"></i>Thuê Khách Sạn</a></span> 
            	<span class="d-flex justify-content-md-center align-items-md-center"><a href="/flight"><i class="fas fa-plane-departure"></i>Chuyến Bay</a></span>
            </p>
          </div>
        </div>
      </div>
    </div>

    <section class="ftco-section services-section bg-light">
      <div class="container">
        <div class="row d-flex">
          <div class="col-md-3 d-flex align-self-stretch ftco-animate">
            <div class="media block-6 services d-block text-center">
              <div class="d-flex justify-content-center"><div class="icon"><span class="flaticon-guarantee"></span></div></div>
              <div class="media-body p-2 mt-2">
                <h3 class="heading mb-3">Đảm bảo giá tốt nhất</h3>
                <p>Mang lại những trải nghiệm tốt nhất an toàn nhất cho khách hàng</p>
              </div>
            </div>      
          </div>
          <div class="col-md-3 d-flex align-self-stretch ftco-animate">
            <div class="media block-6 services d-block text-center">
              <div class="d-flex justify-content-center"><div class="icon"><span class="flaticon-like"></span></div></div>
              <div class="media-body p-2 mt-2">
                <h3 class="heading mb-3">Du khách yêu chúng tôi</h3>
                <p>Du khách sẽ ngưỡi mộ sự nhiệt tình của chúng tôi</p>
              </div>
            </div>    
          </div>
          <div class="col-md-3 d-flex align-self-stretch ftco-animate">
            <div class="media block-6 services d-block text-center">
              <div class="d-flex justify-content-center"><div class="icon"><span class="flaticon-detective"></span></div></div>
              <div class="media-body p-2 mt-2">
                <h3 class="heading mb-3">Đại lý du lịch tốt nhất</h3>
                <p>Đại lý du lịch tốt nhất sẽ làm du khách hài lòng với dịch vụ của chúng tôi</p>
              </div>
            </div>      
          </div>
          <div class="col-md-3 d-flex align-self-stretch ftco-animate">
            <div class="media block-6 services d-block text-center">
              <div class="d-flex justify-content-center"><div class="icon"><span class="flaticon-support"></span></div></div>
              <div class="media-body p-2 mt-2">
                <h3 class="heading mb-3">Hỗ trợ tận tâm của chúng tôi</h3>
                <p>Chúng tôi có dịch vụ hỗ trợ tận tâm chu đáo các du khách </p>
              </div>
            </div>      
          </div>
        </div>
      </div>
    </section>
    
    <section class="ftco-section ftco-destination">
    	<div class="container">
    		<div class="row justify-content-start mb-5 pb-3">
          <div class="col-md-7 heading-section ftco-animate">
          	<span class="subheading">Đặc Sắc</span>
            <h2 class="mb-4"><strong></strong>Địa Điểm Du Lịch Đắc Sắc</h2>
          </div>
        </div>
    		<div class="row">
    			<div v-for="(tour, index) in tours" v-bind:key="index" class="col-md-3 ftco-animate fadeInUp ftco-animated">
							<div class="destination">
								<a :href="'/tour/' + tour.id" class="img img-2 d-flex justify-content-center align-items-center" v-bind:style="'background-image: url(' + tour.image + ')'">
									<div class="icon d-flex justify-content-center align-items-center">
										<span class="icon-search2"></span>
									</div>
								</a>
								<div class="text p-3">
									<div class="d-flex">
										<div class="one">
											<h3><a :href="'/tour/' + tour.id">{{tour.title}}</a></h3>
											<p class="rate">
												<i class="icon-star"></i>
												<i class="icon-star"></i>
												<i class="icon-star"></i>
												<i class="icon-star"></i>
												<i class="icon-star-o"></i>
												<span>8 Sao</span>
											</p>
										</div>
										<div class="two">
											<span class="price">${{tour.price}}</span>
										</div>
									</div>
									<p><b>Dịch vụ đồ ăn: </b> {{tour.food}}</p>
									<p  v-for="(hotel, index) in tour.hotels" v-bind:key="index"><b>Khách sạn liên quan: </b> {{hotel.name}}</p>
									<p  v-for="(flight, index) in tour.flights" v-bind:key="index"><b>Chuyến bay có sẵn: </b> {{flight.name}}</p>
									<p class="days"><span>{{tour.duration}}</span></p>
									<hr>
									<p class="bottom-area d-flex">
										<span><i class="icon-map-o"></i> {{tour.location}}</span> 
										<span class="ml-auto"><a :href="'/tour/' + tour.id">Discover</a></span>
									</p>
								</div>
							</div>
						</div>
    		</div>
    	</div>
    </section>

    <section class="ftco-section bg-light">
    	<div class="container">
				<div class="row justify-content-start mb-5 pb-3">
          <div class="col-md-7 heading-section ftco-animate">
          	<span class="subheading">Ưu Đãi Đặc Biệt</span>
            <h2 class="mb-4"><strong>Tour Nổi Bật</strong>	</h2>
          </div>
        </div>    		
    	</div>
    	<div class="container-fluid">
    		<div class="row">
    			<div v-for="(tour, index) in ftours" v-bind:key="index" class="col-md-3 ftco-animate fadeInUp ftco-animated" style="width:20%;max-width:20%">
							<div class="destination">
								<a :href="'/tour/' + tour.id" class="img img-2 d-flex justify-content-center align-items-center" v-bind:style="'background-image: url(' + tour.image + ')'">
									<div class="icon d-flex justify-content-center align-items-center">
										<span class="icon-search2"></span>
									</div>
								</a>
								<div class="text p-3">
									<div class="d-flex">
										<div class="one">
											<h3><a :href="'/tour/' + tour.id">{{tour.title}}</a></h3>
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
											<span class="price">${{tour.price}}</span>
										</div>
									</div>
									<p><b>Food serving: </b> {{tour.food}}</p>
									<p  v-for="(hotel, index) in tour.hotels" v-bind:key="index"><b>Hotels related: </b> {{hotel.name}}</p>
									<p  v-for="(flight, index) in tour.flights" v-bind:key="index"><b>Flights available: </b> {{flight.name}}</p>
									<p class="days"><span>{{tour.duration}}</span></p>
									<hr>
									<p class="bottom-area d-flex">
										<span><i class="icon-map-o"></i> {{tour.location}}</span> 
										<span class="ml-auto"><a :href="'/tour/' + tour.id">Discover</a></span>
									</p>
								</div>
							</div>
						</div>
    		</div>
    	</div>
    </section>

    <section class="ftco-section ftco-counter img" id="section-counter" style="background-image: url(images/bg_1.jpg);">
    	<div class="container">
    		<div class="row justify-content-center mb-5 pb-3">
          <div class="col-md-7 text-center heading-section heading-section-white ftco-animate">
            <h2 class="mb-4">Some fun facts</h2>
            <span class="subheading">More than 100,000 websites hosted</span>
          </div>
        </div>
    		<div class="row justify-content-center">
    			<div class="col-md-10">
		    		<div class="row">
		          <div class="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
		            <div class="block-18 text-center">
		              <div class="text">
		                <strong class="number" data-number="100000">0</strong>
		                <span>Happy Customers</span>
		              </div>
		            </div>
		          </div>
		          <div class="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
		            <div class="block-18 text-center">
		              <div class="text">
		                <strong class="number" data-number="40000">0</strong>
		                <span>Destination Places</span>
		              </div>
		            </div>
		          </div>
		          <div class="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
		            <div class="block-18 text-center">
		              <div class="text">
		                <strong class="number" data-number="87000">0</strong>
		                <span>Hotels</span>
		              </div>
		            </div>
		          </div>
		          <div class="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
		            <div class="block-18 text-center">
		              <div class="text">
		                <strong class="number" data-number="56400">0</strong>
		                <span>Restaurant</span>
		              </div>
		            </div>
		          </div>
		        </div>
	        </div>
        </div>
    	</div>
    </section>


    <section class="ftco-section">
    	<div class="container">
				<div class="row justify-content-start mb-5 pb-3">
          <div class="col-md-7 heading-section ftco-animate">
          	<span class="subheading">Ưu đãi đặc biệt</span>
            <h2 class="mb-4"><strong>Xe phổ biến</strong></h2>
          </div>
        </div>    		
    	</div>
    	<div class="container-fluid">
    		<div class="row">
    			<div v-for="(car, index) in cars" v-bind:key="index" class="col-md-4 ftco-animate fadeInUp ftco-animated" style="max-width:20%">
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
    </section>

    <section class="ftco-section testimony-section bg-light">
      <div class="container">
        <div class="row justify-content-start">
          <div class="col-md-5 heading-section ftco-animate">
          	<span class="subheading">Best Directory Website</span>
            <h2 class="mb-4 pb-3"><strong>Why</strong> Choose Us?</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.</p>
            <p><a href="#" class="btn btn-primary btn-outline-primary mt-4 px-4 py-3">Read more</a></p>
          </div>
					<div class="col-md-1"></div>
          <div class="col-md-6 heading-section ftco-animate">
          	<span class="subheading">Testimony</span>
            <h2 class="mb-4 pb-3"><strong>Our</strong> Guests Says</h2>
          	<div class="row ftco-animate">
		          <div class="col-md-12">
		            <div class="carousel-testimony owl-carousel">
		              <div class="item">
		                <div class="testimony-wrap d-flex">
		                  <div class="user-img mb-5" style="background-image: url(images/person_1.jpg)">
		                    <span class="quote d-flex align-items-center justify-content-center">
		                      <i class="icon-quote-left"></i>
		                    </span>
		                  </div>
		                  <div class="text ml-md-4">
		                    <p class="mb-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
		                    <p class="name">Dennis Green</p>
		                    <span class="position">Guest from italy</span>
		                  </div>
		                </div>
		              </div>
		              <div class="item">
		                <div class="testimony-wrap d-flex">
		                  <div class="user-img mb-5" style="background-image: url(images/person_2.jpg)">
		                    <span class="quote d-flex align-items-center justify-content-center">
		                      <i class="icon-quote-left"></i>
		                    </span>
		                  </div>
		                  <div class="text ml-md-4">
		                    <p class="mb-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
		                    <p class="name">Dennis Green</p>
		                    <span class="position">Guest from London</span>
		                  </div>
		                </div>
		              </div>
		              <div class="item">
		                <div class="testimony-wrap d-flex">
		                  <div class="user-img mb-5" style="background-image: url(images/person_3.jpg)">
		                    <span class="quote d-flex align-items-center justify-content-center">
		                      <i class="icon-quote-left"></i>
		                    </span>
		                  </div>
		                  <div class="text ml-md-4">
		                    <p class="mb-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
		                    <p class="name">Dennis Green</p>
		                    <span class="position">Guest from Philippines</span>
		                  </div>
		                </div>
		              </div>
		            </div>
		          </div>
		        </div>
          </div>
        </div>
      </div>
    </section>

    <section class="ftco-section">
    	<div class="container">
				<div class="row justify-content-start mb-5 pb-3">
          <div class="col-md-7 heading-section ftco-animate">
          	<span class="subheading">Ưu đãi đặc biệt</span>
            <h2 class="mb-4"><strong>Khách sạn và phòng phổ biến</strong></h2>
          </div>
        </div>    		
    		<div class="row">
    			<div v-for="(hotel, index) in hotels" v-bind:key="index" class="col-md-3 ftco-animate fadeInUp ftco-animated">
							<div class="destination">
								<a href="javascript:void(0)" class="img img-2 d-flex justify-content-center align-items-center" v-bind:style="'background-image: url(' + hotel.image + ')'">
									<div class="icon d-flex justify-content-center align-items-center">
										<span class="icon-search2"></span>
									</div>
								</a>
								<div class="text p-3">
									<div class="d-flex">
										<div class="one">
											<h3><a href="javascript:void(0)">{{hotel.name}}</a></h3>
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
											<span class="price">${{hotel.price}}</span>
										</div>
									</div>
									<p v-html="hotel.service"></p>
									<hr>
									<p class="bottom-area d-flex">
										<span><i class="icon-map-o"></i> {{hotel.tourName}}</span> 
									</p>
								</div>
							</div>
						</div>
    		</div>
    	</div>
    </section>
		
	<section class="ftco-section-parallax">
      <div class="parallax-img d-flex align-items-center">
        <div class="container">
          <div class="row d-flex justify-content-center">
            <div class="col-md-7 text-center heading-section heading-section-white ftco-animate">
              <h2>Subcribe to our Newsletter</h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>
              <div class="row d-flex justify-content-center mt-5">
                <div class="col-md-8">
                  <form action="#" class="subscribe-form">
                    <div class="form-group d-flex">
                      <input type="text" class="form-control" placeholder="Enter email address">
                      <input type="submit" value="Subscribe" class="submit px-3">
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
	data: function() {
		return {
			tours: [
				{
					id: '',
					title: '',
					duration: '',
					food: '',
					description: '',
					tourType: '',
					tourTypeName: '',
					image: '',
					flights: [
						{
							id: '',
							name: '',
						}
					],
					hotels: [
						{
							id: '',
							name: ''
						}
					],
				}
			],
			ftours: [
				{
					id: '',
					title: '',
					duration: '',
					food: '',
					description: '',
					tourType: '',
					tourTypeName: '',
					image: '',
					hotel: '',
				}
			],
			hotels: [
				{
					name: '',
					price: '',
					service: '',
					image: '',
					tourName: '',
					tourId: ''
				}
			],
			cars: [
				{
					name: '',
					size: '',
					seatingCapacity: '',
					driver: 1,
					airConditioner: 1,
					price: '',
					image: '',
					model: 1
				}
			],
		}
	},
	created: function() {
		axios.get(this.baseUrl + '/api/orderTour/getFavoriteOrder')
		.then((response) => {
			this.ftours = response.data.data;
			this.totalPages = response.data.pagination.totalPages;
			this.totalItems = response.data.pagination.totalItems;
		})
		.catch(function (error) {
			console.log(error);
		});

		axios.get(this.baseUrl + '/api/orderCar/getFavoriteOrder')
		.then((response) => {
			this.cars = response.data.data;
			this.totalPages = response.data.pagination.totalPages;
			this.totalItems = response.data.pagination.totalItems;
		})
		.catch(function (error) {
			console.log(error);
		});

		axios.get(this.baseUrl + '/api/tour/getAll?page=0&limit=4')
		.then((response) => {
			this.tours = response.data.data;
			console.log(response);
		})
		
		.catch(function (error) {
			console.log(error);
		});

		axios.get(this.baseUrl + '/api/hotel/getAll?page=0&limit=4')
		.then((response) => {
			this.hotels = response.data.data;
			this.totalPages = response.data.pagination.totalPages;
			this.totalItems = response.data.pagination.totalItems;
		})
		.catch(function (error) {
			console.log(error);
		});
	},
}
</script>
