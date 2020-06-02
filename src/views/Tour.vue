<template>
	<div class="tour">
		<div class="hero-wrap js-fullheight" style="background-image: url('images/bg_3.jpg');">
			<div class="overlay"></div>
			<div class="container">
				<div class="row no-gutters slider-text js-fullheight align-items-center justify-content-center" data-scrollax-parent="true">
				<div class="col-md-9 ftco-animate text-center" data-scrollax=" properties: { translateY: '70%' }">
					<p class="breadcrumbs" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"><span class="mr-2"><a href="/">Trang chủ</a></span> <span>Tour</span></p>
					<h1 class="mb-3 bread" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Destination</h1>
				</div>
				</div>
			</div>
		</div>

		<section class="ftco-section ftco-degree-bg">
		<div class="container">
			<div class="row">
				<div class="col-lg-3 sidebar ftco-animate">
					<div class="sidebar-wrap bg-light ftco-animate">
						<h3 class="heading mb-4">Tìm kiếm Tour</h3>
						<form action="#">
						<div class="fields">
						<div class="form-group">
							<input v-model="title" type="text" class="form-control" placeholder="Tên Tour">
						</div>
						<div class="form-group">
							<input v-model="location" type="text" class="form-control" placeholder="Nơi Đến, Thành Phố">
						</div>
						<div class="form-group">
							<input v-model="priceMin" type="number" class="form-control" placeholder="Gía Từ">
						</div>
						<div class="form-group">
							<input v-model="priceMax" type="number" class="form-control" placeholder="Đến Gía">
						</div>
						<div class="form-group">
							<input v-if="!searching" v-on:click="doSearch" type="button" value="Search" class="btn btn-primary py-3 px-5">
							<input v-if="searching" disabled type="button" value="Searching..." class="btn btn-primary py-3 px-5">
						</div>
						</div>
					</form>
					</div>
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
						<div v-if="notFound" style="font-size:18px"><b>Tour not found.</b></div>
						<div v-for="(tour, index) in tours" v-bind:key="index" class="col-md-4 ftco-animate fadeInUp ftco-animated">
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
					<div class="row mt-5">
						<div class="col text-center">
							<div class="block-27">
							<ul>
								<li v-if="page > 0"><a v-on:click="page=page-1" href="javascript:void(0)">&lt;</a></li>
								<li v-bind:class="{'active' : page==n-1}" v-for="n in totalPages" v-bind:key="n">
									<a v-on:click="page=n-1" href="javascript:void(0)">{{n}}</a>
								</li>
								<li v-if="page < totalPages-1"><a v-on:click="page=page+1" href="javascript:void(0)">&gt;</a></li>
							</ul>
							</div>
						</div>
					</div>
				</div> <!-- .col-md-8 -->
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
					hotel: '',
					flights: [
						{
							id: '',
							brand: '',
							description: '',
							name: '',
							price: '',
							schedule: ''
						}
					],
					location: '',
					image: '',
					price: ''
				}
			],
			tourTypes: [
				{
					id: '',
					name: ''
				}
			],
			location: '',
			tourType: '',
			title: '',
			priceMin: '',
			priceMax: '',
			page: 0,
			totalPages: '',
			totalItems: '',
			searching: false,
			notFound: false,
		}
	},
	methods: {
		doSearch: function() {
			this.searching = true;
			var location = 'location=' + this.location; 
			var title = 'title=' + this.title;
			var priceMin;
			this.priceMin != '' ? priceMin = 'priceMin=' + this.priceMin : priceMin = '';
			var priceMax;
			this.priceMax != '' ? priceMax = 'priceMax=' + this.priceMax : priceMax = '';
			axios.get(this.baseUrl + '/api/tour/search-test?page=1&limit=6&' + location + '&' + title + '&' + priceMin + '&' + priceMax)
			.then((response) => {
				this.tours = response.data.data;
				this.totalPages = response.data.pagination.totalPages;
				this.totalItems = response.data.pagination.totalItems;
				if (response.data.data.length < 1) {
					this.notFound = true;
				} else {
					this.notFound = false;
				}
				this.searching = false;
			})
			.catch(function (error) {
				console.log(error);
			});
		}
	},
	created: function() {
		axios.get(this.baseUrl + '/api/tour/getAll?page=0&limit=6')
		.then((response) => {
			this.tours = response.data.data;
			this.totalPages = response.data.pagination.totalPages;
			this.totalItems = response.data.pagination.totalItems;
		})
		.catch(function (error) {
			console.log(error);
		});

		axios.get(this.baseUrl + '/api/tourType/getAll')
		.then((response) => {
			this.tourTypes = response.data.data;
		})
		.catch(function (error) {
			console.log(error);
		});
	},
	watch: {
		page: function() {
			if (this.location!='' || this.title!= '' || this.priceMin!='' || this.priceMax!='') {
				var location = 'location=' + this.location;
				var title = 'title=' + this.title;
				var priceMin = 'priceMin=' + this.priceMin;
				var priceMax = 'priceMax=' + this.priceMax;
				axios.get(this.baseUrl + '/api/tour/search-test?page=' + this.page + '&limit=6&' + location + '&' + title  + '&' + priceMin + '&' + priceMax)
				.then((response) => {
					this.tours = response.data.data;
					this.totalPages = response.data.pagination.totalPages;
					this.totalItems = response.data.pagination.totalItems;
				})
				.catch(function (error) {
					console.log(error);
				});
			} else if (this.tourType!='') {
				axios.get(this.baseUrl + '/api/tour/tourType/' + this.tourType + '?page=' + this.page + '&limit=6')
				.then((response) => {
					this.tours = response.data.data;
					this.totalPages = response.data.pagination.totalPages;
					this.totalItems = response.data.pagination.totalItems;
				})
				.catch(function (error) {
					console.log(error);
				});
			} else {
				axios.get(this.baseUrl + '/api/tour/getAll?page=' + this.page + '&limit=6')
				.then((response) => {
					this.tours = response.data.data;
					this.totalPages = response.data.pagination.totalPages;
					this.totalItems = response.data.pagination.totalItems;
				})
				.catch(function (error) {
					console.log(error);
				});
			}
		},

		tourType: function() {
			axios.get(this.baseUrl + '/api/tour/tourType/' + this.tourType + '?page=0&limit=6')
			.then((response) => {
				this.tours = response.data.data;
				this.totalPages = response.data.pagination.totalPages;
				this.totalItems = response.data.pagination.totalItems;
			})
			.catch(function (error) {
				console.log(error);
			});
		}
	},
}
</script>