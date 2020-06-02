<template>
  	<div class="admin-list">
		<h4 class="pt-3 pb-2 list-title">Danh sách</h4>
		<select v-model="listSelect" class="list-select">
			<option value="car">Thuê xe</option>
			<option value="tour">Du lịch</option>
			<option value="flight">Chuyến bay</option>
			<option value="hotel">Khách sạn</option>
		</select>
		<table v-if="$route.params.id == 'car'" class="table table-hover text-center" cellpadding="10">
		<thead>
			<tr>
			<th scope="col">#</th>
			<th scope="col">Tên</th>
			<th scope="col">Hãng</th>
			<th scope="col">Kích cỡ</th>
			<th scope="col">Chỗ ngồi</th>
			<th scope="col">Máy điều hòa</th>
			<th scope="col">Lái xe</th>
			<th scope="col">Gía($)</th>
			<th scope="col">Hành động</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="(car, index) in cars" v-bind:key="index">
			<th scope="row">{{!pageLoad ? index + page*5 + 1 : ''}}</th>
			<td>{{car.name}}</td>
			<td>{{car.model}}</td>
			<td>{{car.size}}</td>
			<td>{{car.seatingCapacity}}</td>
			<td>{{car.airConditioner == 1 ? 'required' : 'not required'}}</td>
			<td>{{car.driver == 1 ? 'required' : 'not required'}}</td>
			<td>{{car.price}}</td>
			<td><router-link style="color: #007bff" v-bind:to="'/admin/edit/car/' + car.id">Sửa</router-link><span> / </span><a href="javascript:void(0)" v-on:click="del(car.id, 'car')">Xóa</a></td>
			</tr>
		</tbody>
		</table>

		<table v-if="$route.params.id == 'tour'" class="table table-hover text-center" cellpadding="10">
		<thead>
			<tr>
			<th scope="col">#</th>
			<th scope="col">Tên tour</th>
			<th scope="col">Đồ ăn</th>
			<th scope="col">Loại</th>
			<th scope="col">Địa điểm</th>
			<th scope="col">Khách sạn</th>
			<th scope="col">Chuyến bay</th>
			<th scope="col">Gía($)</th>
			<th scope="col">Hành động</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="(tour, index) in tours" v-bind:key="index">
			<th scope="row">{{!pageLoad ? index + page*5 + 1 : ''}}</th>
			<td>{{tour.title}}</td>
			<td>{{tour.food}}</td>
			<td>{{tour.tourTypeName}}</td>
			<td>{{tour.location}}</td>
			<td>
				<a style="margin-right:15px;color:#007bff" href="javascript:void(0)" v-for="(hotel, index) in tour.hotels" v-bind:key="index">{{hotel.name}}</a>
			</td>
			<td>
				<a style="margin-right:15px;color:#007bff" href="javascript:void(0)" v-for="(flight, index) in tour.flights" v-bind:key="index">{{flight.name}}</a>
			</td>
			<td>{{tour.price}}</td>
			<td><router-link style="color: #007bff" v-bind:to="'/admin/edit/tour/' + tour.id">Sửa</router-link><span> / </span><a href="javascript:void(0)" v-on:click="del(tour.id, 'tour')">Xóa</a></td>
			</tr>
		</tbody>
		</table>

		<table v-if="$route.params.id == 'flight'" class="table table-hover text-center" cellpadding="10">
		<thead>
			<tr>
			<th scope="col">#</th>
			<th scope="col">Tên </th>
			<th scope="col">Nhãn hiệu</th>
			<th scope="col">Tour</th>
			<th scope="col">Miêu tả</th>
			<th scope="col">Gía($)</th>
			<th scope="col">Hành động</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="(flight, index) in flights" v-bind:key="index">
			<th scope="row">{{!pageLoad ? index + page*5 + 1 : ''}}</th>
			<td>{{flight.name}}</td>
			<td>{{flight.brand}}</td>
			<td style="color:#007bff">{{flight.tourName}}</td>
			<td>{{flight.description}}</td>
			<td>{{flight.price}}</td>
			<td><router-link style="color: #007bff" v-bind:to="'/admin/edit/flight/' + flight.id">Sửa</router-link><span> / </span><a href="javascript:void(0)" v-on:click="del(flight.id, 'flight')">Xóa</a></td>
			</tr>
		</tbody>
		</table>

		<table v-if="$route.params.id == 'hotel'" class="table table-hover text-center" cellpadding="10">
		<thead>
			<tr>
			<th scope="col">#</th>
			<th scope="col">Tên</th>
			<th scope="col">Tour</th>
			<th scope="col">Gía($)</th>
			<th scope="col">Hành động</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="(hotel, index) in hotels" v-bind:key="index">
			<th scope="row">{{!pageLoad ? index + page*5 + 1 : ''}}</th>
			<td>{{hotel.name}}</td>
			<td style="color:#007bff">{{hotel.tourName}}</td>
			<td>{{hotel.price}}</td>
			<td><router-link style="color: #007bff" v-bind:to="'/admin/edit/hotel/' + hotel.id">Sửa</router-link><span> / </span><a href="javascript:void(0)" v-on:click="del(hotel.id, 'hotel')">Xóa</a></td>
			</tr>
		</tbody>
		</table>

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
	</div>
</template>

<style lang="less" scoped>
	.admin-list .table {
		box-shadow: 1px 1px 10px #dddada;
		padding: 0 10px;
	}
	.list-title {
    	display: inline-block;
    	margin-right: 5px;
	}
	.list-select {
		font-size: 16px;
	}
</style>

<script>
export default {
	data: function() {
		return {
			listSelect: 'car',
			cars: [
				{
					id: '',
					name: '',
					model: '',
					size: '',
					seatingCapacity: '',
					airConditioner: '',
					driver: '',
					price: ''
				}
			],
			tours: [
				{
					id: '',
					title: '',
					arrangements: '',
					food: '',
					tourType: '',
					tourTypeName: '',
					hotel: '',
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
					location: '',
					price: ''
				}
			],
			flights: [
				{
					id: '',
					brand: '',
					description: '',
					name: '',
					price: '',
					tourName: '',
					tourId: '',
					schedule: ''
				}
			],
			hotels: [
				{
					id: '',
					name: '',
					price: '',
					service: '',
					image: '',
					tourName: '',
					tourId: ''
				}
			],
			config: {
				headers: {
					Authorization: '',
				}
			},
			page: 0,
			totalPages: '',
			totalItems: '',
			pageLoad: false,
		}
	},
	methods: {
		init: function(name) {
			axios.get(this.baseUrl + '/api/' + name + '/getAll')
			.then((response) => {
				console.log(response)
				this.totalPages = response.data.pagination.totalPages;
				this.totalItems = response.data.pagination.totalItems;
				switch (name) {
					case 'car':
						this.cars = response.data.data;
						break;
					case 'tour':
						this.tours = response.data.data;
						break;
					case 'flight':
						this.flights = response.data.data;
						break;
					case 'hotel':
						this.hotels = response.data.data;
						break;
				}			
			})
			.catch(function (error) {
				console.log(error);
			});
		},
		del: function(id, item) {
			this.$swal.fire({
				title: 'Are you sure?',
				text: "You won't be able to revert this!",
				type: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Yes, delete it!'
				}).then((result) => {
				if (result.value) {
					this.config.headers.Authorization = 'Bearer ' + this.token;
					axios.delete(this.baseUrl + '/api/' + item + '/' + id, this.config, {data: {dt:''}})
					.then((response) => {
						this.$swal.fire(
							'Deleted!',
							'Your ' + item + ' has been deleted.',
							'success'
						).then(() =>{
							location.href = "/admin/list/" + this.$route.params.id
						})
					})
					.catch((error) => {
						this.$swal.fire({
							type: 'error',
							title: 'Oops...',
							text: 'Something went wrong!'
						})
					});
				}
			})
		}
	},
	created: function() {
		if (this.$route.params.id == undefined) {
			this.$router.push("/admin/list/car");
		} else {
			this.listSelect = this.$route.params.id;
		}
		this.init(this.$route.params.id);
	},
	watch: {
		listSelect: function() {
			this.$router.push("/admin/list/" + this.listSelect).catch(err => {});
			this.init(this.listSelect);
		},
		page: function() {
			this.pageLoad = true;
			axios.get(this.baseUrl + '/api/' + this.$route.params.id + '/getAll?page=' + this.page, this.config)
			.then((response) => {
				this.cars = this.tours = this.flights = this.hotels = response.data.data;
				this.totalPages = response.data.pagination.totalPages;
				this.totalItems = response.data.pagination.totalItems;
				this.pageLoad = false;
			})
			.catch(function (error) {
				console.log(error);
			});
		}
	}
}
</script>