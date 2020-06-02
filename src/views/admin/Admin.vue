<template>
  	<div class="admin pr-4">
		<div class="left-sidebar">
			<div class="left-sidebar-top">
				<span><img src="/favicon.ico" alt=""></span>
				<a href="javascript:void(0)"><i class="fas fa-bars"></i></a>	  
			</div>
			<ul class="nav flex-column">
				<router-link
					to="/admin/dashboard"
					v-slot="{ href, navigate, isActive }"
				>
					<li :class="[isActive && 'active']" class="nav-item">
						<a class="nav-link" :href="href" @click="navigate">Dashboard 
							<i class="fas fa-tachometer-alt"></i></a>
					</li>
				</router-link>
				<router-link
					to="/admin/create"
					v-slot="{ href, navigate, isActive }"
				>
					<li :class="[isActive && 'active']" class="nav-item">
						<a class="nav-link" :href="href" @click="navigate">Create 
							<i class="fas fa-folder-plus"></i></a>
					</li>
				</router-link>
				<router-link
					to="/admin/list"
					v-slot="{ href, navigate, isActive }"
				>
					<li :class="[isActive && 'active']" class="nav-item">
						<a class="nav-link" :href="href" @click="navigate">List 
							<i class="fas fa-list"></i></a>
					</li>
				</router-link>
				<router-link
					to="/admin/order"
					v-slot="{ href, navigate, isActive }"
				>
					<li :class="[isActive && 'active']" class="nav-item">
						<a class="nav-link" :href="href" @click="navigate">Order 
							<i class="fas fa-history"></i></a>
					</li>
				</router-link>
			</ul>
		</div>
		<router-view/>
	</div>
</template>

<style lang="less" scoped>
	.admin {
		padding-left: 90px;
		margin-top: 40px;
		.left-sidebar {
			z-index: 99;
			background: #2b2f3a;
			width: 260px;
			height: 100%;
			position: fixed;
			left: -200px;
			transition: all 0.5s ease;
			&:hover {
				left: 0;
			}
			.left-sidebar-top {
				padding: 16px 25px 16px 15px;
				border-color: transparent;
				background: rgba(0, 0, 0, 0.3);
				margin-bottom: 15px;
				a {
					float: right;
					padding-top: 5px;
					color: rgb(117, 187, 117);
				}
			}
			li.nav-item {
				margin: 6px 0;
				&:hover {
					background: rgba(247, 239, 239, 0.2);
				}
				&.active {
					a, span {
						color: #fff;
					}
				}
				a {
					font-family: "Rubik", sans-serif;
					font-size: 15px;
					color: #a1a8c0;
					i {
						float: right;
						padding-right: 8px;
						padding-top: 6px;
					}
				}
			}
		}	
	}
</style>

<script>
   export default{
		data: function() {
			return {
				role: '',
				config: {
					headers: {
						Authorization: '',
					}
				},
			}
		},
		created: function(){
			if (this.token) {
				this.config.headers.Authorization = 'Bearer ' + this.token;
				axios.get(this.baseUrl + '/api/user', this.config)
				.then((response) => {
					if (response.data.data.authorities[0].authority == 'ROLE_USER' && response.data.data.authorities.length == 1) {
						this.role = 'user'
					} else {
						this.role = 'admin'
					}
				})
				.catch((error) => {
					this.role = 'user'
				})
				.finally(() => {
					if (this.role != 'admin') {
						location.href = "/";
					} else {
						var url = new URL(window.location).pathname;
						if (url == '/admin') {
							this.$router.push("/admin/dashboard");
						}	
					}
				});
			}
			else {
			   location.href = "/";
			}
		}
	}
</script>
