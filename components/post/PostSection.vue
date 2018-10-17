<template>
	<section class="post-section">
		<slot/>
	</section>
</template>

<style lang="scss" scoped>
.post-section {
	+ .post-section {
		margin-top: 2em;
	}
	h2 {
		margin-bottom: 0.3em;
	}
	p, blockquote, figure, pre, table, code, div {
		&:not(:last-child) {
			margin-bottom: 2rem;
		}
	}
	// h2 {
	// 	line-height: 1.2;
  // }
}
</style>

