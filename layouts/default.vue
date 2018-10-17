<template>
	<div class="page">
		<app-header/>
		<main>
			<nuxt/>
		</main>
	</div>
</template>

<script>
import AppHeader from "~/components/layout/AppHeader.vue"

export default {
	components: {
		AppHeader
	}
};
</script>

<style lang="scss">
.page {
	min-height: 100vh;
}
</style>
