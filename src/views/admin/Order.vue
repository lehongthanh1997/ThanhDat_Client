<template>
	<div class="order-list">
		<h4 class="pt-3 pb-2 list-title">Order</h4>
		<select v-model="listSelect" class="list-select">
			<option value="tour">Du lịch</option>
			<option value="car">Thuê Xe</option>			
		</select>
		<table class="table table-hover text-center" cellpadding="10">
		<thead>
			<tr>
			<th scope="col">Số TT</th>
			<th scope="col">Tên khách hàng</th>
			<th v-if="listSelect=='tour'" scope="col">Tên Tour</th>
			<th v-if="listSelect=='car'" scope="col">Tên Xe</th>
			<th scope="col">Mùa</th>
			<th scope="col">Trạng Thái</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="(order, index) in orders" v-bind:key="index">
				<th scope="row">{{index + 1}}</th>
				<td>{{order.userName}}</td>
				<td v-if="listSelect=='tour'">{{order.tourName}}</td>
				<td v-if="listSelect=='car'">{{order.carName}}</td>
				<td>{{order.season}}</td>
				<td v-if="order.status == 0"><span style="color:red">Đang xử lý</span></td>
				<td v-if="order.status == 2"><span style="color:#008a00">Đã thanh toán</span></td>
			</tr>
		</tbody>
		</table>

		<!-- <div class="row mt-5">
			<div class="col text-center">
				<div class="block-27">
				<ul>
					<li v-if="page > 0"><a href="javascript:void(0)">&lt;</a></li>
					<li v-bind:class="{'active' : page==n-1}" v-for="n in totalPages" v-bind:key="n">
						<a v-on:click="page=n-1" href="javascript:void(0)">{{n}}</a>
					</li>
					<li v-if="page < totalPages-1"><a href="javascript:void(0)">&gt;</a></li>
				</ul>
				</div>
			</div>
		</div> -->
	</div>
</template>

<style lang="less" scoped>
	.order-list .table {
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
			orders: [
				{
					userName: '',
					tourName: '',
					carName: '',
					season: '',
					status: ''
				}
			],
			config: {
				headers: {
					Authorization: '',
				}
			},
			listSelect: 'tour',
			page: 0,
			totalPages: '',
			totalItems: '',
		}
	},
	methods: {
		init: function(name) {
			this.config.headers.Authorization = 'Bearer ' + this.token;
			if (name=='tour') {
				axios.get(this.baseUrl + '/api/orderTour/getAll?page=0&limit=50', this.config)
				.then((response) => {
			
					this.orders = response.data.data;
						console.log("dddđ",response);
					// this.totalPages = response.data.pagination.totalPages;
					// this.totalItems = response.data.pagination.totalItems;
				})
				.catch(function (error) {
					console.log(error);
				});
			}
			if (name=='car') {
				axios.get(this.baseUrl + '/api/orderCar/getAll?page=0&limit=50', this.config)
				.then((response) => {
					console.log("fff",response)
					this.orders = response.data.data;
					// this.totalPages = response.data.pagination.totalPages;
					// this.totalItems = response.data.pagination.totalItems;
				})
				.catch(function (error) {
					console.log(error);
				});
			}
		}
	},
	created: function() {
		if (this.$route.params.id == undefined) {
			this.$router.push("/admin/order/tour");
		} else {
			this.listSelect = this.$route.params.id;
		}
		this.init(this.$route.params.id);
	},
	watch: {
		listSelect: function() {
			this.$router.push("/admin/order/" + this.listSelect).catch(err => {});
			this.init(this.listSelect);
		},
		// page: function() {
		// 	axios.get(this.baseUrl + '/api/orderTour/getAll?page=' + this.page + '&limit=15', this.config)
		// 	.then((response) => {
		// 		this.orders = response.data.data;
		// 		this.totalPages = response.data.pagination.totalPages;
		// 		this.totalItems = response.data.pagination.totalItems;
		// 	})
		// 	.catch(function (error) {
		// 		console.log(error);
		// 	});
		// }
	}
}
</script>