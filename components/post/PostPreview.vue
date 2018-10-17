<template>
	<div
		:style="'background:'+color+';'"
		class="post-preview">
		<div class="img-container">
			<slot name="image"/>
		</div>
		<div class="post-preview-body" >
			<nuxt-link
				:to="url"
				class="post-preview-title">
				<slot name="title"/>
			</nuxt-link>
			<slot name="description"/>
			<div class="meta">
				<slot name="meta"/>
			</div>
		</div>
	</div>
</template>

<script>
// TODO: all url props to one format
export default {
	props: {
		url: {
			type: String,
			default: ""
		},
		color: {
			type: String,
			default: ""
		}
	},
	computed: {
		dateFormatted () {

			return this.date.replace(/-/g, ".");

		}
	}
};
</script>

<style lang="scss">
.post-preview {
	color: white;
	border-radius: $border-radius-big;
	box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.4);
	a {
		text-shadow: 0px 0px 10px $color-primary;
	}
	.img-container {
		min-height: 197px;
		img {
			width: 100%;
		}
	}
  .post-preview-body {
		text-align: center;
		padding: 1em;
	}
	.post-preview-title {
		h2, h3, h4 {
			display: inline;
			font-size: $font-size-large;
			letter-spacing: 2px;
		}
	}
	.meta {
		margin-top: 1em;
		p {
			display: flex;
			justify-content: space-between;
		}
	}
}
</style>
