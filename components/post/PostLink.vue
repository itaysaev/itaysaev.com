<template>
	<a
		:href="href"
		target="_blank"
		itemprop="relatedLink"><slot/></a>
</template>

<script>
export default {
	// TODO: create links component
	// TODO: make external/internal links
	props: {
		href: {
			required: true,
			type: String
		}
	}
}
</script>
