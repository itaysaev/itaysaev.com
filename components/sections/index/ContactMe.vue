<template>
	<full-height-section
		id="section-4"
		class="contact-me">
		<container>
			<h2>Contact me</h2>
			<div class="contact-me-info">
				<p>Got a question?</p>
				<p>Feel free to contact me!</p>
			</div>
			<form
				class="contact-me-form"
				action="https://formspree.io/idtaysaev@gmail.com"
				method="POST">
				<div class="form-block">
					<input
						type="text"
						name="name"
						placeholder="Name"
						required>
				</div>
				<div class="form-block">
					<input
						type="email"
						name="email"
						placeholder="E-mail"
						required>
				</div>
				<div class="form-block">
					<textarea
						name="message"
						placeholder="Your message"
						required/>
				</div>
				<div class="form-block">
					<button
						type="submit"
						name="submit">Submit</button>
				</div>
			</form>
		</container>
	</full-height-section>
</template>

<script>
import FullHeightSection from "~/components/sections/FullHeightSection.vue";

export default {
	components: {
		FullHeightSection
	}
};
</script>

<style lang="scss" scoped>
.contact-me {
	text-align: center;
	background:
		linear-gradient(transparent, $color-background-darkest 60%) no-repeat,
		transparent url("~assets/img/backgroundblog.svg") repeat fixed;
	.logo {
		margin: 0 auto 1em;
	}
	h2 {
		text-transform: uppercase;
	}
}
.contact-me-info {
	margin-bottom: 1em;
}
.contact-me-form {
	max-width: 520px;
	margin: 0 auto;
}
</style>
