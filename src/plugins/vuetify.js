// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

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
						'primary-1': '#fde2e2',
						'primary-2': '#f56c6c',
					},
				},
			},
		},
	},
)
