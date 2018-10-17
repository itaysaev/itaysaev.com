<template>
	<base-section class="section-full-height">
		<div class="section-full-height-center">
			<slot/>
		</div>
	</base-section>
</template>

<script>
import BaseSection from "~/components/sections/BaseSection.vue"
export default {
	components: {
		BaseSection
	}
}
</script>

<style lang="scss">
.section-full-height {
	min-height: 100vh;
	display: flex;
	align-items: center;
	@media screen and (min-height: 1900px){
		min-height: auto;
	}
}
.section-full-height-center {
	width: 100%;
}
</style>
