<template>
	<blockquote class="base-blockquote">
		<slot/>
		<footer class="base-blockquote-footer">
			<slot name="footer"/>
		</footer>
	</blockquote>
</template>

<style lang="scss">
.base-blockquote {
  padding: 1em;
  border: 0.2em dashed;

  @include respond-to(small) {
    padding: 2em;
  }
}
.base-blockquote-footer {
	margin-top: 1em;
	text-align: right;
	font-style: italic;
}
</style>
