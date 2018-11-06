<template>
	<div>
		<div class="el-button" @click="login">Login</div>
		<router-link to="/list" class="el-icon-star-on" />
	</div>
</template>

<script>

	export default {
		methods: {
			login() {
				this.$router.go('/list')
			}
		}
	}

</script>
