<template>
	<a
		:href="'#'+to"
		:class="styledClass"
		@click.prevent="scroll">
		<slot/>
	</a>
</template>

<script>
export default {
	props: {
		to: {
			type: String,
			required: true
		},
		noStyle: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		styledClass () {

			return this.noStyle ? "" : "scroller";

		}
	},
	methods: {
		scroll () {

			document.
				getElementById(this.to).
				scrollIntoView({
					behavior: "smooth",
					block: "start"
				});

		}
	}
};
</script>

<style lang="scss">
.scroller {
  display: block;
  position: relative;
  margin: 0 auto;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 4px solid $color-primary;
  background-color: transparent;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s, opacity 0.3s;
  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 52%;
    display: block;
    height: 10%;
    width: 42.5%;
    background-color: $color-primary;
    transition: background-color 0.3s;
  }
  &::before {
    left: 17%;
    transform: rotate(45deg);
  }
  &::after  {
    right: 17%;
    transform: rotate(-45deg);
  }
  &:hover {
    background-color: $color-semi-transparent;
	}
  &.scroller-top {
    &::before,
    &::after {
      top: 45%;
    }
    &::before {
      transform: rotate(-45deg);
    }
    &::after {
      transform: rotate(45deg);
    }
  }
  &.scroller-abs {
    position: absolute;
		left: 50%;
		left: calc(50% - 30px);
		bottom: 1em;
		@include respond-to(medium) {
			bottom: 2em;
		}
	}
	&.primary-2 {
		border-color: $color-primary-2;
		&::before,
		&::after {
			background-color: $color-primary-2;
		}
	}
	@media print {
		display: none;
	}
}
</style>
