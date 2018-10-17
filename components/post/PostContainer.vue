<template>
	<div class="post-container">
		<slot/>
	</div>
</template>

<style lang="scss">
.post-container {
	max-width: 740px;
	padding: 0 20px;
	margin: 0 auto;
	width: 100%;

	&+& {
		margin-top: 2em;
	}

  @include respond-to(x-small) {
		padding: 0 2em;
	}
}
</style>
