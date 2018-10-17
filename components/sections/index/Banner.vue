<template>
	<full-height-section id="section-0">
		<container full-width>
			<div class="banner-layout">
				<div class="banner-content">
					<h1>
						I'm<br>
						<mark>Idar</mark><br>
						Taysaev
					</h1>
				</div>
				<div class="hole"/>
			</div>
			<scroller
				class="scroller-abs"
				to="section-1"/>
		</container>
	</full-height-section>
</template>

<script>
import FullHeightSection from "~/components/sections/FullHeightSection.vue";
import Scroller from "~/components/Scroller.vue";

export default {
	components: {
		FullHeightSection,
		Scroller
	}
};
</script>

<style lang="scss" scoped>
// TODO: clean CSS (media, etc.)
.section {
	padding: 2rem 0em 7rem;
	@include respond-to(x-small) {
		border-left: 4.2em solid $color-background-dark;
	}
	@include respond-to(medium) {
		border-left-width: 6em;
		padding: 4rem 4em 8rem;
	}
  h1 {
		font-family: $mono-font-family;
		font-size: $font-size-xx-large;
		@include respond-to(small) {
			font-size: $font-size-xxx-large;
		}
		@include respond-to(large) {
			font-size: $font-size-xxxx-large;
		}
		@include respond-to(x-large) {
			font-size: $font-size-xxxxx-large;
		}
		mark {
			letter-spacing: 0.14em;
		}
	}
}
.banner-layout {
	text-align: center;
	@include respond-to(medium) {
		text-align: left;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
}
.banner-content {
	position: relative;
	z-index: 1;
}

.hole {
	position: relative;
	width: 160px;
	height: 160px;
	max-width: 100%;
	margin: 1em auto 0;
	@include respond-to(x-small) {
		width: 260px;
		height: 260px;
	}
	@include respond-to(large) {
		width: 24em;
		height: 24em;
		margin: 0;
	}
	background-color: $color-background;
	border-radius: 50%;
	box-shadow: 0 0 6em rgba($color-background, 0.6);

	@include respond-to(medium) {
		cursor: pointer;
		transition: all 0.3s;
		&:hover {
			box-shadow: 0 0 8em rgba($color-primary, 0.6);
		}
	}
}
</style>
