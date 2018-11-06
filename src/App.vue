<template>
	<router-view></router-view>
</template>

<script>
	import Login from './views/Login.vue'

	export default {
		name: 'app',
		data: () => {
			return {
				time: +new Date()
			}
		},
		beforeCreate() {
			// if (this.$route.path !== '/login') {
			// 	this.$router.go('/login')
			// }
		}
	}

</script>
