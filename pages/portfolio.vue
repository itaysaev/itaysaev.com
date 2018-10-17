<template>
	<base-section class="portfolio">
		<h2 class="visually-hidden">Portfolio</h2>
		<ul>
			<li
				v-for="work in portfolio"
				:key="work.title">
				<div class="portfolio-section">
					<div class="portfolio-section-layout">
						<div class="img-container portfolio-section-image-container">
							<img
								:src="work.image"
								:alt="work.title"
								class="portfolio-section-image">
						</div>
						<div class="portfolio-section-info">
							<h2 class="portfolio-item-title">{{ work.title }}</h2>
							<p class="portfolio-item-description">
								{{ work.description }}
							</p>
							<ul class="portfolio-item-technologies">
								<li
									v-for="technologie in work.technologies"
									:key="technologie"
									class="portfolio-item-technologies-item">
									{{ technologie }}
								</li>
							</ul>
							<a
								:href="work.link"
								:title="work.title"
								class="btn"
								target="_blank">View Work</a>
						</div>
					</div>
				</div>
			</li>
		</ul>
	</base-section>
</template>

<script>
import BaseSection from "~/components/sections/BaseSection.vue"
export default {
	head: {title: "Portfolio | Idar Taysaev"},
	components: {
		BaseSection
	},
	data() {
		return {
			portfolio: [
				{
					link: "https://designia.idtaysaev.com",
					title: "Designia",
					description: "Informational SPA with beautiful wave animations",
					image: require("~/assets/img/portfolio/designia.png"),
					technologies: [
						"Vue",
						"Vue CLI 3",
						"Vuex",
						"Vue-router",
						"SCSS",
						"PWA"
					]
				},
				{
					link: "https://zenwork.idtaysaev.com",
					title: "Zenwork",
					description: "Web page with cute design and soft animations",
					image: require("~/assets/img/portfolio/zenwork.png"),
					technologies: [
						"Vue",
						"Vue CLI 3",
						"Vuex",
						"SCSS",
						"PWA"
					]
				},
				{
					link: "https://cuda.idtaysaev.com",
					title: "Cuda",
					description: "Flat and simple, but charming website for web studio",
					image: require("~/assets/img/portfolio/cuda.png"),
					technologies: [
						"Nuxt.js",
						"Vue",
						"Vuex",
						"SCSS",
						"PWA"
					]
				}
			]
		}
	}
}
</script>

<style lang="scss">
.section.portfolio {
	padding: 0;
}
.portfolio-section {
	position: relative;
	padding: 2em 20px;
	@include respond-to(x-large) {
		padding-left: 6em;
	}
}
.portfolio-section-layout {
	@include respond-to(large) {
		min-height: calc(100vh - 4em);
		display: flex;
		flex-direction: row-reverse;
		align-items: center;
		justify-content: space-between;
	}
}
.portfolio-section-info {
	position: relative;
	z-index: 1;

	.btn {
		width: 100%;
	}

	@include respond-to(large) {
		max-width: 500px;
	}
}
.portfolio-section-image-container {
	text-align: right;
	@include respond-to(large) {
		width: 65%;
		width: calc(100% - 500px);
	}
}
.portfolio-section-image {
	width: 100%;

	@include respond-to(large) {
		@supports(max-height: calc(100vh - 4em)) {
			max-height: calc(100vh - 4em);
			width: auto;
		}
	}
}
.portfolio-item-description {
	margin-bottom: 1em;
}
.portfolio-item-technologies {
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	margin-bottom: 1em;
}
.portfolio-item-technologies-item {
	padding: 0.4em 1em;
	background-color: rgba(white, 0.1);
	border-radius: 4em;
	margin-right: 0.6em;
	margin-bottom: 0.6em;
}
</style>
