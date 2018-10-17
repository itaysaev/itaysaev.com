<template>
	<nuxt-link
		class="post-back"
		to="/blog">Back to blog</nuxt-link>
</template>


<style lang="scss">
.post-back {
  display: block;
  width: 100%;
  text-align: center;
  padding: 1.4em 0;
  font-size: $font-size-large;
  background-color: $color-semi-transparent-focus;
	&:hover {
		color: white;
	}
  @include respond-to(large) {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 10rem;
    font-size: 0;
    padding: 0;
    opacity: 0.5;
    &:hover {
      opacity: 1;
    }
  }
}
</style>
