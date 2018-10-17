<template>
	<article
		class="post"
		itemscope
		itemtype="http://schema.org/Article">
		<slot/>
	</article>
</template>

<script>
// TODO: think about post/meta folder
</script>


<style lang="scss">
.post {
	position: relative;

  @include respond-to(x-small) {
    padding-bottom: 2em;
  }
}
</style>
