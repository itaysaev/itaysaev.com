<template>
	<div class="error-page">
		<p class="error-code">
			{{ statusCode }}
		</p>
		<p class="error-message">
			{{ message }}
		</p>
		<p class="error-link">
			<nuxt-link to="/">Back home</nuxt-link>
		</p>
		<div class="error-image">
			<mage/>
		</div>
	</div>
</template>

<script>
import Mage from "~/components/icons/Mage.vue"
export default {
	name: "NuxtError",
	components: {
		Mage
	},
	props: {
		error: {
			type: Object,
			default: () => ({
				message: "Sorry... Unexpected error",
				statusCode: 500
			})
		}
	},
	head () {

		return {title: this.message};

	},
	computed: {
		statusCode () {

			return this.error && this.error.statusCode;

		},
		message () {

			return this.error.message;

		}
	}
};
</script>

<style lang="scss">
.error-page {
  text-align: center;
  padding: 4em 2em 1em;

  .error-code {
    font-size: $font-size-xxx-large;
		color: $color-primary;
		font-family: $mono-font-family;
  }

  .error-message,
  .error-link {
    font-size: $font-size-regular;
  }

  .error-image {
    width: 600px;
    max-width: 100%;
    margin: 2em auto 0;
  }

  @include respond-to(medium) {
    padding: 4em 2em 1em;
    .error-code {
      font-size: $font-size-xxxx-large;
    }

    .error-message,
    .error-link {
      font-size: $font-size-large;
    }

    .error-image {
      margin: 4em auto 0;
    }
  }
}
</style>
