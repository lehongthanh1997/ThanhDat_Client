<template>
  	<div class="admin-create">
		<h4 class="pt-3 pb-2 create-title">Sửa</h4>
		<!-- car -->
		<form @submit="editCar" v-if="$route.params.id == 'car'" class="create-form">
		<div class="form-row">
			<div class="form-group col-md-6">
			<label for="name">Tên</label>
			<input v-model="car.name" type="text" class="form-control" id="name" placeholder="Tên" required>
			</div>
			<div class="form-group col-md-6">
			<label for="price">Gía ($)</label>
			<input v-model="car.price" type="number" class="form-control" id="price" placeholder="Gía" required>
			</div>
		</div>
		<div class="form-row">
			<div class="form-group col-md-6">
			<label for="size">Kích cỡ</label>
			<input v-model="car.size" type="text" class="form-control" id="size" placeholder="Kích cỡ" required>
			</div>
			<div class="form-group col-md-6">
			<label for="seatingCapacity">Chỗ ngồi</label>
			<input v-model="car.seatingCapacity" type="number" class="form-control" id="seatingCapacity" placeholder="Chỗ ngồi" required>
			</div>
		</div>
		<div class="form-row">
			<div class="form-group col-md-4">
			<label for="image">Hình ảnh</label>
			<input v-model="car.image" type="text" class="form-control" id="image" placeholder="Hình ảnh" required>
			</div>
			<div class="form-group col-md-2">
			<label for="model">Hãng</label>
			<select v-model="car.model" class="form-control" id="model">
				<option v-for="(model, index) in modelCars" v-bind:key="index" :value="model.id">{{model.name}}</option>
			</select>
			</div>
			<div class="form-group col-md-3">
			<label for="air">Máy điều hòa</label>
			<select v-model="car.airConditioner" class="form-control" id="air">
				<option value="1">Có</option>
				<option value="0">Không</option>
			</select>
			</div>
			<div class="form-group col-md-3">
			<label for="driver">Lái xe</label>
			<select v-model="car.driver" class="form-control" id="driver">
				<option value="1">Có</option>
				<option value="0">Không</option>
			</select>
			</div>
		</div>
		<input style="width: 100px" type="submit" class="btn btn-primary" value="Submit">
		</form>
		<!-- tour -->
		<form @submit="editTour" v-if="$route.params.id == 'tour'" class="create-form">
		<div class="form-row">
			<div class="form-group col-md-6">
			<label for="title">Title</label>
			<input v-model="tour.title" type="text" class="form-control" id="title" placeholder="Title">
			</div>
			<div class="form-group col-md-6">
			<label for="price">Price ($)</label>
			<input v-model="tour.price" type="number" class="form-control" id="price" placeholder="Price">
			</div>
		</div>
		<div class="form-row">
			<div class="form-group col-md-6">
			<label for="localTravel">Local Travel</label>
			<input v-model="tour.location" type="text" class="form-control" id="localTravel" placeholder="Local travel">
			</div>
			<div class="form-group col-md-6">
			<label for="food">Food</label>
			<input v-model="tour.food" type="text" class="form-control" id="food" placeholder="Food">
			</div>
		</div>
		<div class="form-row">
			<div class="form-group col-md-5">
			<label for="image">Image</label>
			<input v-model="tour.image" type="text" class="form-control" id="image" placeholder="Image">
			</div>
			<div class="form-group col-md-4">
			<label for="duration">Duration</label>
			<input v-model="tour.duration" type="text" class="form-control" id="duration" placeholder="Duration">
			</div>
			<div class="form-group col-md-3">
			<label for="type">Tour Type</label>
			<select v-model="tour.tourType" class="form-control" id="type">
				<option disabled selected value="">Choose</option>
				<option v-for="(type, index) in tourTypes" v-bind:key="index" :value="type.id">{{type.name}}</option>
			</select>
			</div>
		</div>
		<div class="form-row">
			<div class="form-group col-md-12">
			<label>Tour Arrangements</label>
			<ckeditor :editor="editor" v-model="tour.arrangements"></ckeditor>
			</div>
		</div>
		<input style="width: 100px" type="submit" class="btn btn-primary" value="Submit">
		</form>
		<!-- hotel -->
		<form @submit="editHotel" v-if="$route.params.id == 'hotel'" class="create-form">
		<div class="form-row">
			<div class="form-group col-md-6">
			<label for="name">Name</label>
			<input v-model="hotel.name" type="text" class="form-control" id="name" placeholder="Name">
			</div>
			<div class="form-group col-md-6">
			<label for="price">Price ($)</label>
			<input v-model="hotel.price" type="number" class="form-control" id="price" placeholder="Price">
			</div>
		</div>
		<div class="form-row">
			<div class="form-group col-md-6">
			<label for="image">Image</label>
			<input v-model="hotel.image" type="text" class="form-control" id="image" placeholder="Image">
			</div>
			<div class="form-group col-md-6">
			<label for="tour">Tour</label>
			<input v-model="hotel.tourId" placeholder="Select a tour" class="form-control" id="tour" list="brow">
			<datalist id="brow">
				<option v-for="(t,index) in tours" v-bind:key="index" :value="t.id">{{t.title}}</option>
			</datalist>
			</div>
		</div>
		<div class="form-row">
			<div class="form-group col-md-12">
			<label>Hotel Services</label>
			<ckeditor :editor="editor" v-model="hotel.service"></ckeditor>
			</div>
		</div>
		<input style="width: 100px" type="submit" class="btn btn-primary" value="Submit">
		</form>
		<!-- flight -->
		<form @submit="editFlight" v-if="$route.params.id == 'flight'" class="create-form">
		<div class="form-row">
			<div class="form-group col-md-6">
			<label for="name">Name</label>
			<input v-model="flight.name" type="text" class="form-control" id="name" placeholder="Name">
			</div>
			<div class="form-group col-md-6">
			<label for="price">Price ($)</label>
			<input v-model="flight.price" type="number" class="form-control" id="price" placeholder="Price">
			</div>
		</div>
		<div class="form-row">
			<div class="form-group col-md-6">
			<label for="image">Image</label>
			<input v-model="flight.image" type="text" class="form-control" id="image" placeholder="Image">
			</div>
			<div class="form-group col-md-6">
			<label for="tour">Tour</label>
			<input v-model="flight.tour" placeholder="Select a tour" class="form-control" id="tour" list="brow">
			<datalist id="brow">
				<option v-for="(t,index) in tours" v-bind:key="index" :value="t.id">{{t.title}}</option>
			</datalist>  
			</div>
		</div>
		<div class="form-row">
			<div class="form-group col-md-6">
			<label for="description">Description</label>
			<input v-model="flight.description" type="text" class="form-control" id="description" placeholder="Description">
			</div>
			<div class="form-group col-md-6">
			<label for="brand">Brand</label>
			<input v-model="flight.brand" type="text" class="form-control" id="brand" placeholder="Brand">
			</div>
		</div>
		<div class="form-row">
			<div class="form-group col-md-12">
			<label>Schedule</label>
			<ckeditor :editor="editor" v-model="flight.schedule"></ckeditor>
			</div>
		</div>
		<input style="width: 100px" type="submit" class="btn btn-primary" value="Submit">
		</form>
	</div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default {
	data: function() {
		return {
			modelCars: [
				{
				id: '',
				name: ''
				}
			],
			car: {
				name: '',
				size: '',
				seatingCapacity: '',
				driver: 1,
				airConditioner: 1,
				price: '',
				image: '',
				model: 1
			},
			tourTypes: [
				{
				id: '',
				name: ''
				}
			],
			tour: {
				title: '',
				arrangements: '',
				food: '',
				tourType: '',
				location: '',
				price: '',
				duration: '',
				image: ''
			},
			tours: [
				{
					id: '',
					title: ''
				}
			],
			hotel: {
				name: '',
				price: '',
				service: '',
				image: '',
				tourId: ''
			},
			flight: {
				name: '',
				price: '',
				description: '',
				image: '',
				tour: '',
				brand: '',
				schedule: '',
			},
			config: {
				headers: {
					'Content-Type': 'application/json',
					Authorization: '',
				}
			},
			editor: ClassicEditor,
		}
	},
	created: function() {
		if (this.$route.params.id=='car') {
			axios.get(this.baseUrl + '/api/model-car/getAll')
			.then((response) => {
				this.modelCars = response.data.data;
			})
			.catch(function (error) {
				console.log(error);
			});
		}
		if (this.$route.params.id=='tour') {
			axios.get(this.baseUrl + '/api/tourType/getAll')
			.then((response) => {
				this.tourTypes = response.data.data;
			})
			.catch(function (error) {
				console.log(error);
			});
		}

		axios.get(this.baseUrl + '/api/' + this.$route.params.id + '/getOne/' + this.$route.params.edit_id, this.config)
		.then((response) => {
			this.car = this.tour = this.flight = this.hotel = response.data.data;
		})
		.catch((error) => {
			console.log(error)
		});

		axios.get(this.baseUrl + '/api/tour/getAll-test')
		.then((response) => {
			this.tours = response.data.data;
		})
	},
	methods: {
		editCar: function(e) {
			e.preventDefault();
			this.car.driver = parseInt(this.car.driver);
			this.car.airConditioner = parseInt(this.car.airConditioner);
			this.config.headers.Authorization = 'Bearer ' + this.token;
			axios.put(this.baseUrl + '/api/car/edit/' + this.$route.params.edit_id, JSON.stringify(this.car), this.config)
			.then((response) => {
				this.$swal.fire({
					position: 'center',
					type: 'success',
					title: 'Edit successfully!',
					showConfirmButton: false,
					timer: 1500
				}).then(() =>{
					location.href = "/admin/list/" + this.$route.params.id
				})
			})
			.catch((error) => {
				this.$swal.fire({
					type: 'error',
					title: 'Oops...',
					text: 'Something went wrong!',
				})
				console.log(error);
			});
		},
		editTour: function(e) {
			e.preventDefault();
			this.config.headers.Authorization = 'Bearer ' + this.token;
			axios.put(this.baseUrl + '/api/tour/edit/' + this.$route.params.edit_id, JSON.stringify(this.tour), this.config)
			.then((response) => {
				this.$swal.fire({
					position: 'center',
					type: 'success',
					title: 'Edit successfully!',
					showConfirmButton: false,
					timer: 1500
				}).then(() =>{
					location.href = "/admin/list/" + this.$route.params.id
				})
			})
			.catch((error) => {
				this.$swal.fire({
					type: 'error',
					title: 'Oops...',
					text: 'Something went wrong!',
				})
				console.log(error);
			});
		},
		editFlight: function(e) {
			e.preventDefault();
			this.config.headers.Authorization = 'Bearer ' + this.token;
			axios.put(this.baseUrl + '/api/flight/edit/' + this.$route.params.edit_id, JSON.stringify(this.flight), this.config)
			.then((response) => {
				this.$swal.fire({
					position: 'center',
					type: 'success',
					title: 'Edit successfully!',
					showConfirmButton: false,
					timer: 1500
				}).then(() =>{
					location.href = "/admin/list/" + this.$route.params.id
				})
			})
			.catch((error) => {
				this.$swal.fire({
					type: 'error',
					title: 'Oops...',
					text: 'Something went wrong!',
				})
				console.log(error);
			});
		},
		editHotel: function(e) {
			e.preventDefault();
			this.config.headers.Authorization = 'Bearer ' + this.token;
			axios.put(this.baseUrl + '/api/hotel/edit/' + this.$route.params.edit_id, JSON.stringify(this.hotel), this.config)
			.then((response) => {
				this.$swal.fire({
					position: 'center',
					type: 'success',
					title: 'Edit successfully!',
					showConfirmButton: false,
					timer: 1500
				}).then(() =>{
					location.href = "/admin/list/" + this.$route.params.id
				})
			})
			.catch((error) => {
				this.$swal.fire({
					type: 'error',
					title: 'Oops...',
					text: 'Something went wrong!',
				})
				console.log(error);
			});
		}
	}
}
</script>