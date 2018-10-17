<template>
	<section class="section">
		<slot/>
	</section>
</template>

<script>
import Scroller from "~/components/Scroller.vue";

export default {
	components: {
		Scroller
	}
};
</script>

<style lang="scss">
.section {
  padding: 4em 0;
	position: relative;
  &.primary {
    background-color: $color-primary;
    color: white;
  }
  &.primary-2 {
    background-color: $color-primary-2;
    color: white;
  }
  &.accent {
    background-color: $color-accent;
    color: white;
  }
  &.accent-2 {
    background-color: $color-accent-2;
	}
}
</style>
