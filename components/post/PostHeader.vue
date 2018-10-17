<template>
	<header class="post-header">
		<slot name="post-image"/>
		<container>
			<nuxt-link to="/blog">Back to blog</nuxt-link>
			<slot/>
		</container>
	</header>
</template>

<style lang="scss">
.post-header {
  // text-align: center;
}
</style>
