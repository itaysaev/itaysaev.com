<template>
	<figure>
		<slot name="img"/>
		<figcaption>
			<slot name="caption"/>
		</figcaption>
	</figure>
</template>

<style lang="scss" scoped>
figure {
  img {
		display: block;
		margin: 0 auto;
  }
  figcaption {
    font-style: italic;
    margin-top: 0.6em;
    text-align: center;
    width: 100%;
    font-size: $font-size-large;
  }
  .img-list {
    img {
      margin-bottom: 2em;
      &:last-child {
        margin-bottom: 0;
      }
    }
    @include respond-to(small) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: flex-start;
      img {
        width: calc(100% / 3 - 10px);
        margin-bottom: 0;
      }
    }
  }
}
</style>
