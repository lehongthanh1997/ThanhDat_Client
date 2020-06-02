<template>
  	<div class="register">
		<div class="hero-wrap" style="background-image: url('/log4.jpg'); height: 100px;"></div>
		<h4 class="text-center mt-5">Register</h4>
		<div class="alert alert-danger mb-3" style="width:40%; margin:auto" v-if="errors.length">
			<li v-for="(error,index) in errors" v-bind:key="index">{{ error }}</li>
		</div>
		<form class="mt-2 mb-5 row">
			<div class="form-group col-md-6">
				<label for="username">Username</label>
				<input v-model="registerData.username" type="text" class="form-control" id="username" placeholder="Enter username">
			</div>
			<div class="form-group col-md-6">
				<label for="exampleInputPassword1">Password</label>
				<input v-model="registerData.password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
			</div>
			<div class="form-group col-md-6">
				<label for="firstname">First name</label>
				<input v-model="registerData.firstName" type="text" class="form-control" id="firstname" placeholder="Enter firstname">
			</div>
			<div class="form-group col-md-6">
				<label for="lastname">Last name</label>
				<input v-model="registerData.lastName" type="text" class="form-control" id="lastname" placeholder="Enter lastname">
			</div>
			<div class="form-group col-md-6">
				<label for="email">Email</label>
				<input v-model="registerData.email" type="text" class="form-control" id="email" placeholder="Enter email">
			</div>
			<div class="form-group col-md-6">
				<label for="phone">Phone number</label>
				<input v-model="registerData.phoneNumber" type="text" class="form-control" id="phone" placeholder="Enter phone">
			</div>
			<div class="form-group text-center col-md-12">
				<input v-on:click="register" type="button" class="submit-btn btn btn-primary mt-2" value="Submit">
			</div>
		</form>
	</div>
</template>

<style lang="less">
	.register {
		h4 {
			font-family: "Rubik", sans-serif;
		}
		form {
			width: 70%;
			margin: auto;
			.submit-btn {
				width: 200px;
			}
		}
	}
</style>

<script>
export default {
	data: function() {
		return {
			registerData: {
				username: '',
				password: '',
				firstName: '',
				lastName: '',
				email: '',
				phoneNumber: ''
			},
			errors: [],
			config: {
				headers: {
					'Content-Type': 'application/json',
				}
			},
		}
	},
	methods: {
		register: function() {
			this.errors = [];
			if (!this.registerData.username) {
				this.errors.push('Username required.');
			}
			if (!this.registerData.password) {
				this.errors.push('Password required.');
			}
			if (!this.registerData.email) {
				this.errors.push('Email required.');
			} else if (!this.validEmail(this.registerData.email)) {
				this.errors.push('Invalid email.');
			}
			if (this.registerData.username && this.registerData.password && this.registerData.email && this.validEmail(this.registerData.email)) {
				axios.post(this.baseUrl + '/api/user', JSON.stringify(this.registerData), this.config)
				.then((response) => {			
					location.href = "/login";
				})
				.catch((error) => {
					this.errors.push('Username has been taken.');
				});
			}
		},
		validEmail: function (email) {
			var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return re.test(email);
		}
	},
	created: function() {
		if (this.token) {
			location.href = "/";
		}
		var body = document.body; // For Safari
		var html = document.documentElement; // Chrome, Firefox, IE and Opera 
		body.scrollTop = 0; 
		html.scrollTop = 0;
	}
}
</script>