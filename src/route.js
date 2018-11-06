import Login from './views/Login.vue'
import ImageList from './views/ImageList.vue'

export default [{
	path: '/',
	component: Login,
	children: [{
		path: 'login',
		component: Login,
	}, {
		path: 'list',
		component: ImageList,
	}]
}]
