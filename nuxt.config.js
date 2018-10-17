
const baseUrl = process.env.BASE_URL || "http://localhost:3000";

module.exports = {
	head: {
		title: "Idar Taysaev | Web Developer",
		meta: [
			{charset: "utf-8"},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1.0"
			},
			{
				hid: "description",
				name: "description",
				content: "Welcome to my personal website! Here you can learn a little bit about me, explore my portfolio and contact me."
			},
			{
				hid: "keywords",
				name: "keywords",
				content: "web developer, blog, idar taysaev, nuxt"
			},
			{
				hid: "author",
				name: "author",
				content: "Idar Taysaev"
			},
			{
				hid: "theme-color",
				name: "theme-color",
				content: "#1e1e3c"
			},
			{
				hid: "og:title",
				property: "og:title",
				content: "Idar Taysaev | Web Developer"
			},
			{
				hid: "og:description",
				property: "og:description",
				content: "Welcome to my personal website! Here you can learn a little bit about me, explore my portfolio and contact me."
			},
			{
				hid: "og:type",
				property: "og:type",
				content: "website"
			},
			{
				hid: "og:image",
				property: "og:image",
				content: baseUrl + "/ogpreview.png"
			},
			{
				hid: "og:url",
				property: "og:url",
				content: baseUrl
			},
			{
				hid: "twitter:card",
				property: "twitter:card",
				content: "summary"
			},
			{
				hid: "twitter:site",
				property: "twitter:site",
				content: "@idtaysaev"
			},
			{
				hid: "twitter:creator",
				property: "twitter:creator",
				content: "@idtaysaev"
			}
		],
		link: [
			{
				rel: "icon",
				type: "image/x-icon",
				href: "/favicon.ico"
			},
			{
				rel: "apple-touch-icon",
				sizes: "180x180",
				href: "/apple-touch-icon.png"
			},
			{
				rel: "stylesheet",
				href:
				"https://fonts.googleapis.com/css?family=Roboto:400,400i,700,900"
			}
		]
	},
	loading: {
		color: "#36c9ac",
		failedColor: "#ff6b6b"
	},
	build: {
		extend (config, {isDev, isClient}) {

			if (isDev && isClient) {

				config.module.rules.push({
					enforce: "pre",
					test: /\.(js|vue)$/,
					loader: "eslint-loader",
					exclude: /(node_modules)/
				});

			}

		}
	},
	modules: [
		"@nuxtjs/pwa",
		"nuxt-sass-resources-loader"
	],
	meta: {
		ogHost: baseUrl
	},
	sassResources: [
		"~assets/scss/utils/_mixins.scss",
		"~assets/scss/utils/_variables.scss"
	],
	plugins: ["~/plugins/global.js"],
	css: ["@/assets/scss/main.scss"],
	env: {
		baseUrl: baseUrl
	},
	router: {
		scrollBehavior() {
			return new Promise((resolve) => {
				setTimeout(() => {
					resolve({
						x: 0,
						y: 0
					})
				}, 500)
			})
		}
	}
};
// TODO: optimize all css
// TODO: group components + create new
// TODO: rename components to 2 words min
// TODO: all scoped
// TODO: base theme, light theme, dark theme
