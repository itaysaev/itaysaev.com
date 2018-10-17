<template>
	<div class="about">
		<container>
			<article class="cv">
				<header class="cv-top">
					<div class="cv-img"/>
					<h1>
						Idar Taysaev
					</h1>
					<p class="cv-speciality">
						Frontend developer
					</p>
					<ul class="cv-contacts">
						<li>
							<a
								href="mailto:idtaysaev@gmail.com"
								target="_blank">idtaysaev@gmail.com</a>
						</li>
						<li>
							<a
								href="https://github.com/idtaysaev"
								target="_blank">github.com</a>
						</li>
						<li>
							<a
								href="https://t.me/idtaysaev"
								target="_blank">telegram</a>
						</li>
					</ul>
					<blockquote class="cv-headline">
						<p>
							"What is dark within me, illumine."
						</p>
						<footer>
							― <cite>John Milton, Paradise Lost</cite>
						</footer>
					</blockquote>
				</header>
				<div class="cv-layout">
					<div class="cv-stats">
						<section class="cv-section">
							<h2>Hard Skills</h2>
							<ul class="cv-skills">
								<li>
									<h3>
										JavaScript:
									</h3>
									<div class="value">
										<p>
											es5..8, vue, nuxt
										</p>
									</div>
								</li>
								<li>
									<h3>
										HTML:
									</h3>
									<div class="value">
										<p>
											semantics, svg
										</p>
									</div>
								</li>
								<li>
									<h3>
										CSS:
									</h3>
									<div class="value">
										<p>
											scss, postcss, responsive, cross-browser
										</p>
									</div>
								</li>
								<li>
									<h3>
										UI/UX:
									</h3>
									<div class="value">
										<p>
											Figma (mainly), please help me, Inkscape, Photoshop
										</p>
									</div>
								</li>
							</ul>
						</section>
						<section class="cv-section">
							<h2>Soft Skills</h2>
							<ul class="cv-skills">
								<li>
									<h3>
										Sociability:
									</h3>
									<div class="value">
										<p>
											Level: socium member
										</p>
									</div>
								</li>
								<li>
									<h3>
										Curiosity:
									</h3>
									<div class="value">
										<p>
											wow such interesting
										</p>
									</div>
								</li>
								<li>
									<h3>
										Creativity:
									</h3>
									<div class="value">
										<p>
											+
										</p>
									</div>
								</li>
								<li>
									<h3>
										Motivation:
									</h3>
									<div class="value">
										<p>
											The most motivated person in my room
										</p>
									</div>
								</li>
							</ul>
						</section>
					</div>
					<div class="cv-info">
						<section class="cv-section">
							<h2>Experience</h2>
							<ul class="timeline">
								<li class="timeline-item">
									<time
										datetime="2017"
										class="date">2017</time>
									<section class="info">
										<h3>Web Studio</h3>
										<p>Frontend developer</p>
									</section>
								</li>
							</ul>
						</section>
						<section class="cv-section">
							<h2>Education</h2>
							<ul class="timeline">
								<li class="timeline-item">
									<time
										datetime="2018"
										class="date">2018</time>
									<section class="info">
										<h3>KBSU</h3>
										<p>Graduated from the Faulty of the Applied mathematics and informatics</p>
									</section>
								</li>
							</ul>
						</section>
						<section class="cv-section">
							<h2 class="hidden">Hobbies</h2>
							<ul class="cv-hobbies">
								<li>singing</li>
								<li>technologies</li>
								<li>design</li>
								<li>learning</li>
								<li>guitar</li>
								<li>reading</li>
								<li>mathematics</li>
							</ul>
						</section>
					</div>
				</div>
			</article>
		</container>
	</div>
</template>

<script>
export default {
	head: {title: "About | Idar Taysaev"}
};
</script>

<style lang="scss" scoped>
.about {
  padding: 4em 0 2em;
	position: relative;

	@include respond-to(large) {
		padding: 4em 2em 2em;
	}
}
h2 {
  font-size: $font-size-large;
  text-transform: uppercase;
  margin-bottom: 0.8em;
  &::first-letter {
    color: $color-primary;
    font-weight: bold;
    font-size: $font-size-x-large;
  }
}
.cv-top {
  text-align: center;
  margin-bottom: 1.6em;
}
.cv-img {
  width: 200px;
  height: 200px;
  padding: 1em;
  margin: 0 auto 1em;
  border-radius: 50%;
  background-color: $color-background;
  box-shadow: 0 0 2em rgba($color-background, 0.6);

	@include respond-to(medium) {
		transition: all 0.3s;
		cursor: pointer;
		&:hover {
			box-shadow: 0 0 3em rgba($color-primary, 0.6);
		}
	}

	@media print {
    display: none;
  }
}
.cv-speciality {
	font-style: italic;
}
.cv-contacts {
	margin-bottom: 1em;
	@include respond-to(x-small) {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		li {
			margin: 0 0.3em;
		}
	}
}
.cv-layout {
	@include respond-to(medium) {
		display: flex;
	}
}
.cv-stats,
.cv-info {
	@include respond-to(small) {
		padding: 0 1em;
	}
}
.cv-info {
  flex-grow: 1;
}
.cv-stats {
  flex-shrink: 0;
  flex-basis: 40%;
  border-bottom: 0.2em solid $color-primary;

	@include respond-to(medium) {
		border-bottom: none;
		border-right: 0.2em solid $color-primary;
	}
}
.cv-section {
	padding: 1em;
	border-bottom: 0.2em solid $color-primary;
	&:last-child {
		border-bottom: none;
	}
}
.cv-skills {
	text-align: center;
	@include respond-to(x-small) {
		text-align: left;
	}
  li {
		margin-bottom: 1em;
		&:last-child {
			margin-bottom: 0;
		}
		@include respond-to(x-small) {
			display: flex;
			align-items: flex-start;
			justify-content: space-between;
		}
	}
	h3 {
		font-size: inherit;
	}
  .value {
		display: flex;
		justify-content: space-between;
		@include respond-to(x-small) {
			margin-left: 2em;
			width: 340px;
			text-align: center;
		}
		&::before,
		&::after {
			content: "";
			width: 0.4em;
			border: 0.2em solid $color-primary;
		}
		&::before {
			border-right: none;
			margin-right: 1em;
		}
		&::after {
			border-left: none;
			margin-left: 1em;
		}
  }
}
.cv-hobbies {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  li {
    padding: 0.4em 1em;
    background-color: rgba(white, 0.1);
    border-radius: 4em;
		margin-left: 0.3em;
		margin-right: 0.3em;
    margin-bottom: 0.6em;
	}
	@include respond-to(large) {
		justify-content: flex-start;
		li {
			margin-right: 0.6em;
			margin-left: 0;
		}
	}
}
 // TODO: create component
.timeline-item {
	margin-bottom: 2em;
	&:last-child {
		margin-bottom: 0;
	}
	@include respond-to(x-small) {
		display: flex;
	}
	@include respond-to(medium) {
		display: block;
	}
	@include respond-to(large) {
		display: flex;
	}
  .date {
		font-size: $font-size-xx-large;
		line-height: 1.3;
		@include respond-to(x-small) {
			margin-right: 2rem;
		}
  }

  .info {
    h3 {
      color: $color-primary;
    }
  }
}
// TODO: more classes
</style>
