<template>
	<post>
		<post-header>
			<post-image slot="post-image">
				<img
					:src="image"
					:alt="title">
			</post-image>
			<post-headline>
				{{ title }}
			</post-headline>
			<post-description>
				{{ description }}
			</post-description>
			<post-author :href="authorLink">{{ author }}</post-author>
			<post-time :date="date"/>
		</post-header>

		<post-body>
			<container small>
				<post-section>
					<h2>
						Hello my friend
					</h2>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores perferendis est accusamus quidem odit mollitia inventore
						sint, similique ipsa cupiditate labore animi. Et modi eius quos aut sequi nemo cum.
					</p>
					<base-figure>
						<img
							slot="img"
							src="~/static/images/img-1.jpg">
						<template slot="caption">
							Hello my friend
						</template>
					</base-figure>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores perferendis est accusamus quidem odit mollitia inventore
						sint, similique ipsa cupiditate labore animi. Et modi eius quos aut sequi nemo cum.
					</p>
				</post-section>

				<post-section>
					<h2>
						Hello my friend Test
					</h2>
					<base-blockqute>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores perferendis est accusamus quidem odit mollitia inventore
							sint, similique ipsa cupiditate labore animi.
						</p>
						<span slot="footer">
							Julian Cezar
						</span>
					</base-blockqute>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores perferendis est accusamus quidem odit mollitia inventore
						sint, similique ipsa cupiditate labore animi. Et modi eius quos aut sequi nemo cum.
					</p>
				</post-section>

				<post-section>
					<h2>
						Hello my friend
					</h2>
					<div>
						<pre v-highlight="sourcecode"><code class="javascript"/></pre>
					</div>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores perferendis est accusamus quidem odit mollitia inventore
						sint, similique ipsa cupiditate labore animi. Et modi eius quos aut sequi nemo cum.
					</p>
					<table>
						<thead>
							<tr>
								<th>Hello</th>
								<th>Hello</th>
								<th>Hello</th>
								<th>Hello</th>
								<th>Hello</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Hello TD</td>
								<td>Hello TD</td>
								<td>Hello TD</td>
								<td>Hello TD</td>
								<td>Hello TD</td>
							</tr>
							<tr>
								<td>Hello TD</td>
								<td>Hello TD</td>
								<td>Hello TD</td>
								<td>Hello TD</td>
								<td>Hello TD</td>
							</tr>
							<tr>
								<td>Hello TD</td>
								<td>Hello TD</td>
								<td>Hello TD</td>
								<td>Hello TD</td>
								<td>Hello TD</td>
							</tr>
							<tr>
								<td>Hello TD</td>
								<td>Hello TD</td>
								<td>Hello TD</td>
								<td>Hello TD</td>
								<td>Hello TD</td>
							</tr>
							<tr>
								<td>Hello TD</td>
								<td>Hello TD</td>
								<td>Hello TD</td>
								<td>Hello TD</td>
								<td>Hello TD</td>
							</tr>
						</tbody>
					</table>
				</post-section>
			</container>
		</post-body>

		<post-footer>
			<h2 slot="post-name">{{ title }}</h2>
			<post-time
				slot="post-date"
				:date="date"/>
			<post-author
				slot="post-author"
				:href="authorLink">{{ author }}</post-author>
			<post-genre slot="post-genre">{{ section }}</post-genre>
			<post-description>
				{{ description }}
			</post-description>
			<post-keywords slot="post-keywords">
				{{ keywords }}
			</post-keywords>
			<ul slot="recommended">
				<li
					v-for="(link, i) in links"
					:key="i">
					<post-link :href="link.link" >{{ link.text }}</post-link>
				</li>
			</ul>
		</post-footer>
	</post>
</template>

<script>
// TODO: easy image
import postMixin from "~/mixins/post.js"
export default {
	mixins: [postMixin],
	data () {

		return {
			title: "First post",
			description: "First ipsum dolor sit amet consectetur adipisicing elit. Deserunt tempore exercitationem repellendus placeat.",
			image: "~/images/posts/first-post/preview.svg",
			color: "rgb(30, 30, 60)",
			section: "Frontend",
			date: "2017-01-12",
			links: [
				{
					link: "second-post",
					text: "Second Post"
				},
				{
					link: "https://wikipedia.org",
					text: "Wiki"
				}
			],
			sourcecode:
`var aboutMe = {
  name: "Idar",
  loves: [ "music", "learning" ],
  skills: {
    frontend: {
      js: [ ... ],
      css: [ ... ],
      html: [ ... ]
    },
    backend: [ ... ],
    tools: [ ... ]
  }
}`
		};

	}
};
</script>
