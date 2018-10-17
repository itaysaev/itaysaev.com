<template>
	<div class="menu-container">
		<div
			:class="{ active: isActive }"
			class="toggle-menu header-fixed"
			@click="toggleMenu()">
			<span/>
		</div>
		<transition>
			<div
				v-show="isActive"
				class="menu">
				<nav class="main-nav">
					<ul class="nav-list">
						<li
							v-for="(link, i) in links"
							:key="i">
							<nuxt-link
								:to="link.link"
								@click.native="closeMenu()">{{ link.text }}</nuxt-link>
						</li>
					</ul>
				</nav>
				<accounts/>
			</div>
		</transition>
		<transition>
			<div
				v-show="isActive"
				class="menu-overlay"
				@click="closeMenu()"/>
		</transition>
	</div>
</template>

<script>
import Accounts from "~/components/Accounts.vue";
export default {
	components: {
		Accounts
	},
	data () {

		return {
			isActive: false,
			links: [
				{
					link: "/",
					text: "Home"
				},
				// {
				// 	link: "/blog",
				// 	text: "Blog"
				// },
				{
					link: "/about",
					text: "About"
				},
				{
					link: "/portfolio",
					text: "Portfolio"
				}
			]
		};

	},
	mounted() {
		document.body.addEventListener("keyup", e => {
			if (e.keyCode === 27) {
				this.closeMenu();
			}
		})
	},
	methods: {
		toggleMenu () {

			this.isActive = !this.isActive;

		},
		closeMenu() {

			this.isActive = false;

		}
	},
}
</script>

<style lang="scss">
.menu {
	font-size: $font-size-large;
	position: fixed;
	z-index: 11;
	right: 0;
	top: 0;
	height: 100%;
	height: 100vh;
	min-width: 320px;
	box-shadow: 0 0 18px rgba(0, 0, 0, 0.3);
	background-color: white;
	color: $color-text;
	overflow: auto;
	max-width: 100%;
	width: 280px;
	padding: 5rem 1em 4rem;
	&.v-enter-active {
		animation: slideFromRight 0.3s both;
	}
	&.v-leave-active {
		animation: slideToRight 0.3s both;
	}
	@include respond-to(medium) {
		font-size: $font-size-large;
		width: 500px;
	}
	.nav-list {
		margin-bottom: 2rem;
		a {
			display: block;
			width: 100%;
			padding: 0.6em 0.2em;
			border-bottom: 2px solid $color-background;
		}
	}
}

.toggle-menu {
	font-size: 14px;
	padding: 0.8em 0.5em;
	transition: all 0.3s;
	cursor: pointer;
	@include respond-to(medium) {
		font-size: 18px;
		padding: 1em 0.5em;
	}
	&::before,
	&::after {
		content: "";
	}
	span,
	&::before,
	&::after {
		display: block;
		position: relative;
		height: 6px;
		background-color: $color-primary;
		border-radius: 3px;
		margin-bottom: 6px;
		transition: all 0.3s ease-in-out;
	}
	&::before {
		width: 1.5em;
	}
	span {
		width: 2.775em;
	}
	&::after {
		transition-delay: 0.3s;
		width: 2.4em;
		margin-bottom: 0;
	}
	&:hover {
		&::before,
		&::after {
			width: 2.775em;
		}
	}
	&.active {
		background-color: $color-background;
		&::before {
			transform: translate3d(0, -12px, 0);
			opacity: 0;
		}
		span {
			transform: rotate(45deg);
		}
		&::after {
			width: 2.775em;
			transform: rotate(-45deg) translate3d(8px, -8px, 0);
		}
		&:hover {
			opacity: 0.7;
		}
	}
}
.menu-overlay {
	position: fixed;
	z-index: 9;
	top: 0;
	left: 0;
	right: 0;
	height: 100%;
	height: 100vh;
	background-color: rgba(black, 0.3);
	&.v-enter-active {
		animation: fadeIn 0.3s both;
	}
	&.v-leave-active {
		animation: fadeOut 0.3s both;
	}
}
</style>
