<template>
	<full-height-section id="section-2">
		<container>
			<h2 class="visually-hidden">About me</h2>
			<div class="code-container">
				<base-code>
					<p class="comment">
						// I love JavaScript! ^_^
					</p>
					<p class="comment mg">
						// Let me tell more about me
					</p>
					<div class="object">
						<span class="var">var </span>
						aboutMe = {
						<!-- <nuxt-link to="/about">aboutMe</nuxt-link> = { -->
						<div class="object inline">
							<span class="key">name</span>:
							<span class="value">Idar,</span>
						</div>
						<div class="object inline-small">
							<span class="key">loves</span>: [
							<span class="value">music, </span>
							<span class="value">learning</span>
							],
						</div>
						<div class="object">
							<span class="key">skills</span>: {
							<div class="object">
								<span class="key">frontend</span>: {
								<div class="object inline-small">
									<span class="key">js</span>: [
									<span class="value">es5..8, </span>
									<span class="value">vue.js, </span>
									<span class="value">nuxt.js </span>
									],
								</div>
								<div class="object inline-small">
									<span class="key">css</span>: [
									<span class="value">scss, </span>
									<span class="value">postCSS, </span>
									<span class="value">responsive, </span>
									<span class="value">cross-browser</span>
									],
								</div>
								<div class="object inline-small">
									<span class="key">html</span>: [
									<span class="value">semantics, </span>
									<span class="value">svg</span>
									]
								</div>
								},
							</div>
							<div class="object inline-small">
								<span class="key">tools</span>: [
								<span class="value">webpack, </span>
								<span class="value">gulp, </span>
								<span class="value">eslint </span>
								]
							</div>
							}
						</div>
						}
					</div>
				</base-code>
			</div>
		</container>
	</full-height-section>
</template>

<script>
import FullHeightSection from "~/components/sections/FullHeightSection.vue";
import BaseCode from "~/components/base/BaseCode.vue";

export default {
	components: {
		FullHeightSection,
		BaseCode
	}
};
</script>

<style lang="scss" scoped>
// TODO: optimize scss
.section {
	padding-bottom: 8rem;
	@include respond-to(x-small) {
		border-right: 4.2em solid $color-background-dark;
	}
	@include respond-to(medium) {
		border-right-width: 6em;
	}
}
</style>
