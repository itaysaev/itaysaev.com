<template>
	<div class="caption-full-width">
		<container>
			<slot/>
		</container>
	</div>
</template>

<style lang="scss">
.caption-full-width {
	text-align: center;
	padding: 4em 0;
	background-color: $color-primary-2;
	letter-spacing: 2px;
	color: $color-primary;
	box-shadow: 0 0 30px rgba(0, 0, 0, 0.6);
	z-index: 1;
	position: relative;
	@include respond-to(small) {
		font-size: $font-size-large;
	}
	@include respond-to(x-large) {
		font-size: $font-size-x-large;
	}
}
</style>
