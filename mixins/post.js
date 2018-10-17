import hljs from "highlight.js";
import Post from "~/components/post/Post.vue"
import PostHeader from "~/components/post/PostHeader.vue"
import PostBody from "~/components/post/PostBody.vue"
import PostFooter from "~/components/post/PostFooter.vue"
import PostContainer from "~/components/post/PostContainer.vue"
import PostImage from "~/components/post/PostImage.vue"
import PostTextBlock from "~/components/post/PostTextBlock.vue"
import PostCard from "~/components/post/PostCard.vue"
import PostSection from "~/components/post/PostSection.vue"
import PostAuthor from "~/components/post/PostAuthor.vue"
import PostHeadline from "~/components/post/PostHeadline.vue"
import PostAlternateHeadline from "~/components/post/PostAlternateHeadline.vue"
import PostDescription from "~/components/post/PostDescription.vue"
import PostTime from "~/components/post/PostTime.vue"
import PostKeywords from "~/components/post/PostKeywords.vue"
import PostLink from "~/components/post/PostLink.vue"
import PostGenre from "~/components/post/PostGenre.vue"
import BaseFigure from "~/components/base/BaseFigure.vue"
import BaseBlockquote from "~/components/base/BaseBlockquote.vue"

const postMixin = {
	layout: "post",
	components: {
		Post,
		PostHeader,
		PostBody,
		PostFooter,
		PostContainer,
		PostImage,
		PostTextBlock,
		PostCard,
		PostSection,
		PostAuthor,
		PostHeadline,
		PostAlternateHeadline,
		PostDescription,
		PostTime,
		PostKeywords,
		PostLink,
		PostGenre,
		BaseFigure,
		BaseBlockquote
	},
	data() {

		return {
			title: "Default Title",
			description: "Default Description",
			image: "~/images/posts/defaultPreview.svg",
			color: "rgb(30, 30, 60)",
			section: "Web Development",
			keywords: "web, development, frontend",
			date: new Date(),
			links: [],
			author: "idtaysaev",
			authorLink: "https://github.com/idtaysaev"
		};

	},
	head() {

		return {
			title: this.title,
			meta: [{
				hid: "description",
				name: "description",
				content: this.description
			},
			{
				hid: "keywords",
				name: "keywords",
				content: this.keywords
			},
			{
				hid: "image",
				property: "image",
				content: process.env.baseUrl + this.image.replace("~", "")
			},
			{
				hid: "theme-color",
				name: "theme-color",
				content: this.hexColor
			},
			{
				hid: "og:title",
				property: "og:title",
				content: this.title
			},
			{
				hid: "og:description",
				property: "og:description",
				content: this.description
			},
			{
				hid: "og:type",
				property: "og:type",
				content: "article"
			},
				// { 'property': 'og:url', 'content': this.path},
			{
				hid: "og:image",
				property: "og:image",
				content: process.env.baseUrl + this.image.replace("~","")
			},
			{
				hid: "og:article:published_time",
				property: "og:article:published_time",
				content: this.date
			},
			{
				hid: "og:article:section",
				property: "og:article:section",
				content: this.section
			}
			]
		};
	},
	computed: {
		keywordsArr() {
			return this.keywords.split(",");
		},
		hexColor() {
			let rgbArr = this.color.replace("rgb", "").replace(/\s/g, "").slice(1, -1).split(",")
			let r = rgbArr[0]
			let g = rgbArr[1]
			let b = rgbArr[2]
			let rgb = b | (g << 8) | (r << 16)
			return "#" + (0x1000000 + rgb).toString(16).slice(1);
		},
		styles() {
			return `
				.post-header {
					background-color: ${this.hexColor};
				}
			`;
		}
	},
	directives: {
		highlight: {
			deep: true,
			bind: function bind(el, binding) {
				let targets = el.querySelectorAll("code");

				for (let i = 0; i < targets.length; i++) {
					let target = targets[i];

					if (typeof binding.value === "string") {
						target.textContent = binding.value;
					}
					hljs.highlightBlock(target);
				}
			},
		}
	}
}

export default postMixin
