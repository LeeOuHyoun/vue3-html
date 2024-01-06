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
						primary: '#f56c6c',
						warning: '#0a9393',
						info: '#909399',
					},
				},
				// XXX TODO dark도 추가 하면 좋을것 같은데...
			},
		},
	},
)
