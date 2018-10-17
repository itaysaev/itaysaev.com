<template>
	<div
		:class="{'full-width': fullWidth, small: small}"
		class="container">
		<slot/>
	</div>
</template>

<script>
export default {
	props: {
		fullWidth: {
			default: false,
			type: Boolean
		},
		small: {
			default: false,
			type: Boolean
		}
	}
}
</script>


<style lang="scss">
$container-max-width: 1120px;
$container-small-max-width: 740px;
$container-padding: 0 20px;
.container {
  width: 100%;
  max-width: $container-max-width;
  padding: $container-padding;
	margin: 0 auto;

	&.full-width {
		max-width: 100%;
	}

  &.small {
    max-width: $container-small-max-width;
  }
}
</style>
