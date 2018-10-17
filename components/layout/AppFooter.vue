<template>
	<footer class="footer">
		<container>
			<accounts/>
		</container>
	</footer>
</template>

<script>
import Accounts from "~/components/Accounts.vue";

export default {components: {Accounts}};
</script>

<style lang="scss">
.footer {
  padding: 1rem 0;
  text-align: center;
}
</style>
