<template>
	<div class="post-card">
		<slot/>
	</div>
</template>

<style lang="scss">
.post-card {
	padding: 1em;
	background-color: white;
	box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

	&+& {
		margin-top: 2em;
	}

  @include respond-to(x-small) {
		padding: 2em;
		border-radius: $border-radius-big;
	}

	@include respond-to(large) {
		padding: 4em;
	}
}
</style>
