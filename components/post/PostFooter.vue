<template>
	<footer class="post-footer">
		<container small>
			<div class="post-footer-layout">
				<div class="post-info">
					<div class="post-info-top">
						<slot name="post-name"/>
						<slot name="post-genre"/>
					</div>
					<slot/>
					<slot name="post-keywords"/>
					<div class="post-info-bottom">
						<div class="post-date">
							<slot name="post-date"/>
						</div>
						<div class="post-author">
							<slot name="post-author"/>
						</div>
					</div>
				</div>
				<div
					class="post-recommended"
					itemscope
					itemtype="http://schema.org/WebPage">
					<h2>Read more:</h2>
					<slot name="recommended"/>
				</div>
			</div>
		</container>
	</footer>
</template>

<script>
import PostContainer from "~/components/post/PostContainer.vue"
import PostCard from "~/components/post/PostCard.vue"

export default {
	components: {
		PostContainer,
		PostCard
	}
}
</script>


<style lang="scss">
.post-footer {
	// TODO: design footer
	margin-top: 2em;
	.post-recommended {
		margin-top: 2em;
		@include respond-to(x-small) {
			width: fit-content;
		}
		@include respond-to(small) {
			margin-left: 2em;
			margin-top: 0;
			flex-shrink: 0;
		}
	}
	h2 {
		font-size: $font-size-large;
	}
}
.post-footer-layout {
	@include respond-to(small) {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
	}
}
.post-info-bottom {
	display: flex;
	justify-content: space-between;
}
.post-info-top {
	margin-bottom: 1em;
}
</style>
