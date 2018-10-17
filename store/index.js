import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = () => new Vuex.Store({

	mutations: {
		showMorePosts (state) {

			state.postsShown.push(...state.posts.slice(state.postsShown.length, state.postsShown.length + state.postsPerPage))

		}
	},
	state: {
		posts: [
			{
				id: 1,
				title: "First post",
				description: "First ipsum dolor sit amet consectetur adipisicing elit. Deserunt tempore exercitationem repellendus placeat.",
				image: "../images/posts/first-post/preview.svg",
				date: "2017-01-12",
				author: "idtaysaev",
				authorLink: "https://github.com/idtaysaev",
				url: "/blog/first-post"
			}
		],
		postsShown: [],
		postsPerPage: 6
	},
	actions: {
		async nuxtServerInit({commit}) {
			commit("showMorePosts")
		}
	}
});

export default store;
