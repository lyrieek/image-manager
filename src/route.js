import Login from './views/Login.vue'

export default [{
	path: '/',
	component: Login,
	children: [{
		path: 'login',
		component: Login,
	}]
}]
