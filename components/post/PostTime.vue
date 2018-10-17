<template>
	<time
		:datetime="date"
		class="post-time"
		itemprop="datePublished">
		{{ date }}
	</time>
</template>

<script>
export default {
	props: {
		date: {
			required: true,
			default: new Date(),
			type: String
		}
	}
}
</script>

