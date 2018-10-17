<template>
	<header
		id="header"
		class="header">
		<logo
			v-if="!noLogo"
			class="header-fixed"/>
		<app-menu/>
	</header>
</template>

<script>
import AppMenu from "~/components/layout/AppMenu.vue";
import Logo from "~/components/base/Logo.vue"

export default {
	components: {
		AppMenu,
		Logo
	},
	props: {
		noLogo: {
			default: false,
			type: Boolean
		}
	}
};
</script>

<style lang="scss">
.header {
	.logo {
		padding: 0.5em;
	}
	.header-fixed {
		border-radius: 6px;
		position: fixed;
		z-index: 10;
		top: 10px;
		&.logo {
			left: 10px;
		}
		&.toggle-menu {
			right: 10px;
			z-index: 12;
		}
		@include respond-to(medium) {
			top: 20px;
			&.logo {
				left: 20px;
			}
			&.toggle-menu {
				right: 20px;
			}
		}
		@media print {
			position: absolute;
		}
	}
}
</style>
