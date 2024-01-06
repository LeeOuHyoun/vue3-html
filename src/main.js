import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router'
import axios from 'axios'
import '@/styles/style.scss'
import dayjs from 'dayjs'
import { createPinia } from 'pinia'

loadFonts()

const app = createApp(App)
const pinia = createPinia()
const http = axios.create({
	// TODO 기본설정
	// baseURL: 'https://some-domain.com/api/',
	// timeout: 1000,
	// headers: { 'X-Custom-Header': 'foobar' },
})
// 요청 인터셉터 추가하기
http.interceptors.request.use(
	function (config) {
		// 요청이 전달되기 전에 작업 수행
		return config
	},
	function (error) {
		// 요청 오류가 있는 작업 수행
		return Promise.reject(error)
	},
)

// 응답 인터셉터 추가하기
http.interceptors.response.use(
	function (response) {
		// 2xx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
		// 응답 데이터가 있는 작업 수행
		return response
	},
	function (error) {
		// 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
		// 응답 오류가 있는 작업 수행
		return Promise.reject(error)
	},
)
app.provide('$http', http)
app.provide('$dayjs', dayjs)

app.use(vuetify).use(router).use(pinia).mount('#app')
