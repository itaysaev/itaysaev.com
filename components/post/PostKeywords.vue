<template>
	<p
		itemprop="keywords"
		class="post-keywords">
		<slot/>
	</p>
</template>

<style lang="scss">
.post-keywords {
	font-style: italic;
	text-align: right;
	margin-top: 1em;
}
</style>
