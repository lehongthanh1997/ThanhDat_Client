<template>
	<div class="my-account">
		<div class="hero-wrap" style="background-image: url('/acc.jpg'); height: 150px;"></div>
		<h4 class="text-center mt-5 mb-5">My Account</h4>
		<a href="javascript:void(0)"></a>
		<div class="acc-wrapper">
			<button v-on:click="tab=1" class="acc-tab" v-bind:class="{'active' : tab==1}">Info</button>
			<button v-on:click="tab=2" class="acc-tab" v-bind:class="{'active' : tab==2}">Tour Orders</button>
			<button v-on:click="tab=3" class="acc-tab" v-bind:class="{'active' : tab==3}">Car Orders</button>
			<a v-on:click="logout" class="log-out" href="javascript:void(0)"><i class="fas fa-sign-out-alt"></i>Logout</a>
			<div v-if="tab==1" class="mt-5 mb-5">
				<h4 class="mb-3">My Information</h4>
				<p>Username: {{user.username}}</p>
				<p>First name: {{user.firstName}}</p>
				<p>Last name: {{user.lastName}}</p>
				<p>Email: {{user.email}}</p>
				<p>Phone number: {{user.phoneNumber}}</p>
			</div>
			<div v-if="tab==2" class="mt-5 mb-5">
				<h4 class="mb-3">My tour Order</h4>
				<table class="table table-hover text-center" cellpadding="10">
				<thead>
					<tr>
					<th scope="col">#</th>
					<th scope="col">Customer Name</th>
					<th scope="col">Tour Name</th>
					<th scope="col">Season</th>
					<th scope="col">Group Type</th>
					<th scope="col">Date</th>
					<th scope="col">Price($)</th>
					<th scope="col">Status</th>
					<th scope="col">Action</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(order, index) in orders" v-bind:key="index">
						<th scope="row">{{index + 1}}</th>
						<td>{{order.userName}}</td>
						<td>{{order.tourName}}</td>
						<td>{{order.season}}</td>
						<td>{{order.groupTypeName}}</td>
						<td>{{new Date(order.date).toLocaleDateString()}}</td>
						<td>{{order.price}}</td>
						<td v-if="order.status == 0"><span style="color:red">Pending</span></td>
						<td v-if="order.status == 2"><span style="color:#008a00">Done</span></td>
						<td v-if="order.status == 2"><span style="color:#008a00">None</span></td>
						<td v-if="order.status == 0 && !booking"><a style="color: #007bff" v-on:click="bookTour(order.id, order.price)" href="javascript:void(0)">Pay</a></td>
						<td v-if="order.status == 0 && booking"><span style="color: #007bff">Waiting...</span></td>
					</tr>
				</tbody>
				</table>
			</div>

			<div v-if="tab==3" class="mt-5 mb-5">
				<h4 class="mb-3">My car Order</h4>
				<table class="table table-hover text-center" cellpadding="10">
				<thead>
					<tr>
					<th scope="col">#</th>
					<th scope="col">Customer Name</th>
					<th scope="col">Car Name</th>
					<th scope="col">Season</th>
					<th scope="col">Date</th>
					<th scope="col">Price($)</th>
					<th scope="col">Status</th>
					<th scope="col">Action</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(order, index) in carOrder" v-bind:key="index">
						<th scope="row">{{index + 1}}</th>
						<td>{{order.userName}}</td>
						<td>{{order.carName}}</td>
						<td>{{order.season}}</td>
						<td>{{new Date(order.date).toLocaleDateString()}}</td>
						<td>{{order.price}}</td>
						<td v-if="order.status == 0"><span style="color:red">Pending</span></td>
						<td v-if="order.status == 2"><span style="color:#008a00">Done</span></td>
						<td v-if="order.status == 0 && !booking"><a style="color: #007bff" v-on:click="bookCar(order.id, order.price)" href="javascript:void(0)">Pay</a></td>
						<td v-if="order.status == 2"><span style="color:#008a00">None</span></td>
						<td v-if="order.status == 0 && booking"><span style="color: #007bff">Waiting...</span></td>
					</tr>
				</tbody>
				</table>
			</div>
		</div>
	</div>
</template>

<style lang="less" scoped>
	.acc-wrapper {
		width: 65%;
		margin: auto;
		.acc-tab {
			padding: 5px 0;
			margin-right: 10px;
			width: 200px;
			font-size: 18px;
			color: rgb(183, 226, 247);;
			background: transparent;
			border: 2px solid rgb(183, 226, 247);
			cursor: pointer;
			&.active {
				color: rgb(11, 157, 224);
				border-color:rgb(3, 196, 255);
			}
			&:focus {
				outline: none;
			}
		}
		p {
			font-size: 16px;
		}
	}
	.log-out{
        float: right;
        padding-top: 15px;
		padding-right: 15px;
		font-size: 18px;
		&:hover {
			text-decoration: underline;
		}
	}
</style>

<script>
export default {
	data: function() {
		return {
			config: {
				headers: {
					Authorization: '',
				}
			},
			tab: 1,
			user: {
				username: '',
				firstName: '',
				lastName: '',
				email: '',
				phoneNumber: '',
			},
			orders: [
				{
					id: '',
					userName: '',
					tourName: '',
					groupTypeName: '',
					season: '',
					status: '',
					price: '',
					token: '',
					date: ''
				}
			],
			carOrder: [
				{
					id: '',
					userName: '',
					carName: '',
					season: '',
					status: '',
					price: '',
					token: '',
					date: ''
				}
			],
			registerData: {
				username: '',
				password: '',
				firstName: '',
				lastName: '',
				email: '',
				phone: ''
			},
			booking: false,
			orderId: '',
			orderToken: '',
			redirect_url: '',
			orderTour: {
				tourId: '',
				groupTypeId: 1,
				season: 'Autumn'
			},
			orderCar: {
				tourId: '',
				season: 'Autumn'
			},
			config: {
				headers: {
					'Content-Type': 'application/json',
					Authorization: '',
				}
			},
		}
	},
	created: function() {
		if (!this.token) {
			location.href = "/";
		}
		var body = document.body; // For Safari
		var html = document.documentElement; // Chrome, Firefox, IE and Opera 
		body.scrollTop = 0; 
		html.scrollTop = 0;
		
		this.config.headers.Authorization = 'Bearer ' + this.token;
		axios.get(this.baseUrl + '/api/user', this.config)
		.then((response) => {
			this.user = response.data.data;
		})
		.catch(function (error) {
			console.log(error);
		});

		axios.get(this.baseUrl + '/api/orderTour/getOrderByUser', this.config)
		.then((response) => {
			this.orders = response.data.data;
		})
		.catch(function (error) {
			console.log(error);
		});

		axios.get(this.baseUrl + '/api/orderCar/getOrderByUser', this.config)
		.then((response) => {
			this.carOrder = response.data.data;
		})
		.catch(function (error) {
			console.log(error);
		});
	},
	methods: {
		// delOrder: function(id) {
		// 	this.$swal.fire({
		// 		title: 'Are you sure?',
		// 		text: "You won't be able to revert this!",
		// 		type: 'warning',
		// 		showCancelButton: true,
		// 		confirmButtonColor: '#3085d6',
		// 		cancelButtonColor: '#d33',
		// 		confirmButtonText: 'Yes, delete it!'
		// 		}).then((result) => {
		// 		if (result.value) {
		// 			this.config.headers.Authorization = 'Bearer ' + this.token;
		// 			axios.delete(this.baseUrl + '/api/orderTour/delete/' + id, this.config, {data: {dt:''}})
		// 			.then((response) => {
		// 				this.$swal.fire(
		// 					'Deleted!',
		// 					'Your order has been deleted.',
		// 					'success'
		// 				)
		// 			})
		// 			.catch((error) => {
		// 				this.$swal.fire({
		// 					type: 'error',
		// 					title: 'Oops...',
		// 					text: 'Something went wrong!'
		// 				})
		// 			});
		// 		}
		// 	})
		// },
		logout: function() {
			document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
			location.href = "/";
		},
		bookTour: function(id, price) {
			this.booking = 'tour';
			this.config.headers.Authorization = 'Bearer ' + this.token;
			axios.post(this.baseUrl + '/paypal/make/payment?sum=' + price, [], this.config)
			.then((response) => {
				this.redirect_url = response.data.redirect_url;
				this.orderToken = response.data.redirect_url.split("&token=")[1];
				if (this.orderToken!='') {
					axios.get(this.baseUrl + '/api/orderTour/edit/' + id + '?token=' + this.orderToken, this.config)
					.then((response) => {
						window.location.href = this.redirect_url;
					})
					.catch(function (error) {
						console.log(error);
					});
				}
			})
			.catch(function (error) {
				console.log(error);
			});
		},
		bookCar: function(id, price) {
			this.booking='car';		
			this.config.headers.Authorization = 'Bearer ' + this.token;
			axios.post(this.baseUrl + '/paypal/make/payment?sum=' + price, [], this.config)
			.then((response) => {
				this.redirect_url = response.data.redirect_url;
				this.orderToken = response.data.redirect_url.split("&token=")[1];
				if (this.orderToken!='') {
					axios.get(this.baseUrl + '/api/orderCar/editToken/' + id + '?token=' + this.orderToken, this.config)
					.then((response) => {
						window.location.href = this.redirect_url;
					})
					.catch(function (error) {
						console.log(error);
					});
				}		
			})
			.catch(function (error) {
				console.log(error);
			});
		}
	},
}
</script>