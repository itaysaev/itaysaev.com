<template>
	<a
		:href="href"
		rel="author"
		itemprop="author"
		class="post-author"
		target="_blank">
		<slot>
			Idar Taysaev
		</slot>
	</a>
</template>

<script>
export default {
	props: {
		href: {
			default: "https://github.com/idtaysaev",
			type: String
		}
	}
}
</script>

