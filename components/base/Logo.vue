<template>
	<nuxt-link
		class="logo"
		to="/">
		<span/>
		<span/>
		<span/>
		<span/>
		<span/>
		<span class="empty"/>
		<span/>
		<span/>
		<span/>
	</nuxt-link>
</template>

<style lang="scss">
.logo {
	font-size: 14px;

	// not supports grid
	display: inline-flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-content: space-between;
	width: 3.777em;
	height: 3.777em;

	@include respond-to(medium) {
		font-size: 18px;
	}
  span {
    width: 0.777em;
    height: 0.777em;
    border: 2px solid $color-primary;
    border-radius: 50%;
    transition: all 0.3s ease-in-out;
    will-change: transform;
    &.empty {
      border-color: transparent;
		}
	}

	// supports grid
	@supports (display: inline-grid) {
		display: inline-grid;
		grid-gap: 0.223em;
		grid-template-columns: 1fr 1fr 1fr;
		width: auto;
		height: auto;
	}

  &.white {
    span:not(.empty) {
      border-color: white;
		}
		&:hover {
			span.empty {
				background-color: white;
			}
		}
	}
  .card & {
    span:not(.empty) {
      border-color: $color-card-text;
    }
  }
  &:hover {
    span:nth-child(9) {
      transform: translateY(-1em);
    }
    span:nth-child(8) {
      transform: translateX(1em);
      transition-delay: 0.2s;
    }
    span:nth-child(7) {
      transform: translateX(1em);
      transition-delay: 0.4s;
    }
    span:nth-child(4) {
      transform: translateY(1em);
      transition-delay: 0.6s;
    }
    span:nth-child(1) {
      transform: translateY(1em);
      transition-delay: 0.8s;
    }
    span:nth-child(2) {
      transform: translateX(-1em);
      transition-delay: 1s;
    }
    span:nth-child(5) {
      transform: translateY(-1em);
      transition-delay: 1.2s;
		}
		span.empty {
			background-color: $color-primary;
      transform: translateX(-1em);
			transition-delay: 5s;
    }
  }
}
</style>
