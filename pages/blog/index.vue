<template>
	<base-section class="blog">
		<container>
			<h1>Blog (in development)</h1>
			<post-list/>
		</container>
	</base-section>
</template>

<script>
import BaseSection from "~/components/sections/BaseSection.vue";
import PostList from "~/components/post/PostList.vue";

export default {
	components: {
		BaseSection,
		PostList
	},
	head: {title: "Blog | Idar Taysaev"}
};
</script>
