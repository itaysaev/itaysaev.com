<template>
	<div class="post-text-block">
		<div class="post-text-block-top">
			<slot name="post-text-block-top"/>
		</div>
		<div class="post-text-block-body">
			<slot/>
		</div>
	</div>
</template>

<style lang="scss">
.post-text-block-top {
  padding: 1rem 0;
  border-bottom: 4px dashed $color-accent-2;
  @include respond-to(medium) {
    font-size: $font-size-large;
    padding: 2rem 0;
  }
}
</style>
