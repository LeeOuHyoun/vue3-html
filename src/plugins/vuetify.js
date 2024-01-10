// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import DateFnsAdapter from '@date-io/date-fns'
import { ko } from 'vuetify/locale'
import en from 'date-fns/locale/en-US'
import koKr from 'date-fns/locale/ko'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify(
	// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
	{
		theme: {
			defaultTheme: 'light',
			themes: {
				light: {
					colors: {
						primary: '#f56c6c',
						secondary: '#0a9393',
						info: '#909399',
					},
				},
				dark: {
					colors: {
						primary: '#3f51b5',
						info: '#b0bec5',
					},
				},
			},
		},
		locale: {
			locale: 'ko',
			fallback: 'sv',
			messages: { ko, sv: koKr },
		},
		date: {
			adapter: DateFnsAdapter,
			locale: { en, sv: koKr, ko: koKr },
		},
	},
)
