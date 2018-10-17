<template>
	<base-section
		id="section-2"
		class="materials">
		<container>
			<h2 class="hidden">Materials</h2>
			<!-- <div class="materials-grid">
				<header>
					<card>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores dignissimos minus cupiditate natus ad? Ipsa perferendis vero incidunt sint, at assumenda laboriosam dicta nesciunt ipsam, quaerat, ratione non quae quod.</p>
					</card>
				</header>
				<div class="main">
					<card class="story">
						<div class="author">
							<div class="portrait">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									version="1.1"
									viewBox="0 0 124.24 124.24">
									<g transform="translate(-189.31 -577.54)">
										<g
											transform="translate(-1910.9 2972.6)"
											fill="none"
											opacity=".99"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="7">
											<g stroke="#36c9ac">
												<path
													d="m2147.4-2321.9-20.403-10.934"
													opacity="1"/>
												<path
													d="m2147.4-2344-20.403 10.934"
													opacity="1"/>
												<path
													d="m2166.8-2348.5-8.3448 31.143"
													opacity="1"/>
												<path
													d="m2177.2-2321.9 20.403-10.934"
													opacity="1"/>
												<path
													d="m2177.2-2344 20.403 10.934"
													opacity="1"/>
											</g>
											<circle
												cx="2162.3"
												cy="-2333"
												r="58.618"
												opacity="1"
												stroke="#1e1e3c"
												style="paint-order:normal"/>
										</g>
									</g>
								</svg>
							</div>
						</div>
						<div class="body">
							<h3>
								<nuxt-link to="/blog/first-post">First post!</nuxt-link>
							</h3>
							<p>Have you heard about nuxt.js? Nice... but do you know why we need it? Do you know why people love it? Check it out in my new post!</p>
						</div>
					</card>
					<card class="story">
						<div class="author">
							<div class="portrait">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									version="1.1"
									viewBox="0 0 124.24 124.24">
									<g transform="translate(-197.9 -568.95)">
										<g
											transform="translate(-1689 2959.6)"
											opacity=".99">
											<circle
												cx="1949.1"
												cy="-2328.5"
												r="58.618"
												fill="none"
												opacity="1"
												stroke="#1e1e3c"
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="7"
												style="paint-order:normal"/>
											<path
												d="m1939.6-2296.6c0.6253 0.3325 1.285-0.3875 0.9022-0.9833-2.0783-3.2346-4.0463-8.6775-0.9108-15.687 5.2288-11.689 8.4105-17.744 8.4105-17.744s1.6924 7.0652 6.2799 13.347c4.4153 6.046 6.832 13.65 2.9359 19.984-0.3656 0.5945 0.2791 1.2959 0.9004 0.978 4.8227-2.467 10.232-7.4156 10.842-17.263 0.2251-3.0091-0.1124-7.2219-1.8-12.538-2.1698-6.7378-4.8372-9.8817-6.3806-11.232-0.4616-0.4039-1.1796-0.046-1.1417 0.5663 0.4497 7.27-2.2853 9.1149-3.8421 4.9572-0.6217-1.6606-0.9843-4.5329-0.9843-8.0308 0-5.8233-1.6895-11.818-5.4143-16.689-0.9686-1.2668-2.102-2.4505-3.4024-3.4599-0.4707-0.3655-1.1531 0-1.11 0.5963 0.286 3.9477 0.027 15.262-9.899 28.778-8.9999 12.538-5.5125 22.167-4.275 24.775 2.366 4.9962 5.6661 7.9303 8.8891 9.644z"
												fill="#36c9ac"
												opacity="1"
												stroke-width=".8366"/>
										</g>
									</g>
								</svg>
							</div>
						</div>
						<div class="body">
							<h3>
								<nuxt-link to="/404">404 Page</nuxt-link>
							</h3>
							<p>Hey there! Look for my new page.</p>
						</div>
					</card>
				</div>
				<div class="separator"/>
				<aside>
					<ul>
						<li>
							<nuxt-link
								class="card"
								to="/blog">
								Blog
							</nuxt-link>
						</li>
						<li>
							<nuxt-link
								class="card"
								to="/about">
								About
							</nuxt-link>
						</li>
						<li>
							<scroller
								class="card"
								to="section-3"
								no-style>
								Contact Form
							</scroller>
						</li>
					</ul>
				</aside>
				<footer>
					<card>
						<div class="line"/>
					</card>
				</footer>
			</div> -->
		</container>
	</base-section>
</template>

<script>
// TODO: redesign
import BaseSection from "~/components/sections/BaseSection.vue";

export default {
	components: {
		BaseSection
	}
};
</script>


<style lang="scss" scoped>
$margin: 2em;
.materials {
	// background-color: $color-background-dark;
	// color: white;
	// background: #324376 linear-gradient(150deg, #27274d, #207967) no-repeat;
	min-height: 100vh;







	.materials-grid {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: auto;
		grid-template-areas:
			"header"
			"main"
			"aside"
			"footer";
		grid-gap: $margin;
		@include respond-to(medium) {
			grid-template-columns: 1fr ($margin/2) 400px;
			grid-template-areas:
				"header header header"
				"main separator aside"
				"footer footer footer";
		}
	}
  h2 {
    font-size: $font-size-large;
  }
  header {
		text-align: center;
		grid-area: header;
		font-size: $font-size-x-large;
	}
	.main {
		grid-area: main;
		.story {
			&:not(:last-child) {
				margin-bottom: $margin;
			}
		}
	}
  .separator {
		grid-area: separator;
		display: none;
		@include respond-to(medium) {
			display: block;
			padding: 0;
			border: ($margin/4) dashed $color-card-background;
			border-radius: $border-radius;
		}
  }
  // TODO: !!!!!!!!!!!!!!!!!!!! MAIN!!! Do links. Create icons
  aside {
		grid-area: aside;
    .card {
      padding: 1em;
    }
    li:not(:last-child) {
      margin-bottom: 2em;
    }
    a {
      font-size: $font-size-large;
    }
	}
	footer {
		grid-area: footer;
	}
  .content {
    margin-bottom: $margin;
    .story {
      margin-bottom: $margin;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  .line {
    height: 1em;
    background-color: $color-card-text;
    border-radius: $border-radius-big;
  }

  .story {
    padding: 1em 2em;
    .author {
      display: none;
    }
    .body {
      text-align: justify;
    }
    @include respond-to(small) {
      display: flex;
      align-items: flex-start;
      padding: 1em;

      .author {
        display: block;
        width: 8em;
        flex-shrink: 0;
        margin-right: $margin;
        .portrait {
          line-height: 0;
          padding: 1em;
          border-radius: $border-radius-big;
        }
      }
    }
  }
}
</style>
