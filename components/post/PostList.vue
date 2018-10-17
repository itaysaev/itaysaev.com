<template>
	<div class="post-list">
		<transition-group
			tag="div"
			class="post-list-inner">
			<post-preview
				v-for="post in $store.state.postsShown"
				:key="post.id"
				:color="post.color"
				:url="post.url">
				<template slot="image">
					<img
						:src="post.image"
						:alt="post.title">
				</template>
				<template slot="title">
					<h2>{{ post.title }}</h2>
				</template>
				<template slot="description">
					<p>{{ post.description }}</p>
				</template>
				<p slot="meta">
					<span>{{ post.date }}</span>
					<a
						:href="post.authorLink"
						target="_blank">{{ post.author }}</a>
				</p>
			</post-preview>
		</transition-group>
		<div class="post-list-actions">
			<button
				v-if="$store.state.postsShown.length < $store.state.posts.length"
				@click="showMore">Show more</button>
		</div>
	</div>
</template>

<script>
import PostPreview from "~/components/post/PostPreview.vue";

export default {
	components: {PostPreview},
	data() {
		return {
			posts: []
		}
	},
	methods: {
		showMore() {
			this.$store.commit("showMorePosts")
		}
	}
};
</script>

<style lang="scss">
.post-list-inner {

	.post-preview {
		&.v-enter-active {
			animation: 1s fadeIn both ease-in-out, 1s slideUp both ease-in-out;
		}
	}

	// not supports grid
	.post-preview {
		margin-bottom: 2em;
	}
	@include respond-to(small) {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;

		.post-preview {
			width: calc(50% - 1em);
		}
	}

	@include respond-to(medium) {
		.post-preview {
			width: calc(100% / 3 - 1.333em);
		}
	}

	// supports grid
	@supports (display: grid) {
		display: grid;
		grid-gap: 2em;

		.post-preview {
			width: auto;
			margin-bottom: 0;
		}

		@include respond-to(small) {
			grid-template-columns: 1fr 1fr;
		}

		@include respond-to(medium) {
			grid-template-columns: 1fr 1fr 1fr;
		}
	}
}
.post-list-actions {
	display: flex;
	justify-content: center;
	margin-top: 1em;
	font-size: $font-size-large;
	button {
		padding: 0.6em 1.6em;
		&:hover {
			// TODO: add class
			background-color: rgba(0, 0, 0, 0.06);
			padding: 0.6em 1.6em;
		}
		&:not(:Last-child) {
			margin-right: 1em;
		}
	}
}
</style>
