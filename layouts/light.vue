<template>
	<div class="page light">
		<app-header/>
		<main>
			<nuxt/>
		</main>
		<!-- <app-footer/> -->
	</div>
</template>

<script>
import AppHeader from "~/components/layout/AppHeader.vue";
import AppFooter from "~/components/layout/AppFooter.vue";

export default {
	components: {
		AppHeader,
		AppFooter
	}
};
</script>
