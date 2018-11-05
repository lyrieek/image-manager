<template>
	<router-view></router-view>
</template>

<script>
	import Nav from './components/Nav.vue'
	import Login from './views/Login.vue'

	export default {
		name: 'app',
		data: {},
		beforeCreate() {
			if (this.$route.path !== '/login') {
				this.$router.push({ path: '/login' })
			}
		}
	}

</script>
