<template>
	<div class="home">
		<banner/>
		<intro/>
		<about-me/>
		<info/>
		<contact-me/>
	</div>
</template>

<script>
import Banner from "~/components/sections/index/Banner.vue";
import Intro from "~/components/sections/index/Intro.vue";
import AboutMe from "~/components/sections/index/AboutMe.vue";
import Info from "~/components/sections/index/Info.vue";
import ContactMe from "~/components/sections/index/ContactMe.vue";

export default {
	components: {
		Banner,
		Intro,
		AboutMe,
		Info,
		ContactMe
	}
};
</script>
