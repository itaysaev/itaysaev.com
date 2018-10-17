<template>
	<svg
		class="mage"
		xmlns="http://www.w3.org/2000/svg"
		height="200"
		version="1.1"
		viewBox="0 0 809.74 430.69">
		<g
			transform="translate(-606.39 52.57)"
			stroke-linecap="round"
			stroke-linejoin="round">
			<g
				transform="translate(6363.4 2998.7)"
				fill="none">
				<g
					stroke="#36c9ac"
					stroke-width="4">
					<path
						d="m-5391.5-2796.7c-1.1339 7.6377-7.1344 16.399-14.721 17.906-7.5867 1.5072-17.506-3.7829-20.468-10.916-2.9619-7.1327 0.2997-17.876 6.73-22.168 6.4304-4.2919 16.881-2.3366 23.096 2.2609 3.7513 2.7751 6.0481 8.3059 5.3636 12.916z"
						style="paint-order:stroke fill markers" />
					<path d="m-5411.1-2790.5v10.75" />
					<path d="m-5411.1-2813.2v10.934" />
					<path d="m-5415.9-2793.7-9.6936 5.5966" />
					<path d="m-5396.6-2804.8-9.06 5.2308" />
					<path d="m-5415.8-2799.2-9.7693-5.6403" />
					<path d="m-5396.6-2788.1-8.9782-5.1835" />
					<path d="m-5409.6-2821.3v-13.258" />
					<path d="m-5422.9-2817.1-6.6292-11.482" />
					<path d="m-5431.4-2808.2-11.482-6.6292" />
					<path d="m-5436.5-2796.7h-13.258" />
					<path d="m-5432.9-2785-11.482 6.6292" />
					<path d="m-5422.5-2776-6.6292 11.482" />
				</g>
				<g
					stroke="#36c9ac"
					stroke-width="7">
					<circle
						cx="-5367"
						cy="-2751.4"
						r="127.28"
						style="paint-order:normal" />
					<path d="m-5345.6-2795.8c11.313 7.4325 23.099 7.2989 35.355-0.3535" />
					<path d="m-5393-2687.3c11.313 7.4325 41.131 7.2989 53.387-0.3535" />
					<path
						d="m-5254.3-2690.1c10.845-0.7093 35.344-17.267 46-27.75 12.55-13.815 16.124-22.414-1-24.25-21.403 0.96-27.931-0.2728-33.75 20"
					/>
					<path
						d="m-5479.7-2690.1c-10.845-0.7093-35.344-17.267-46-27.75-12.55-13.815-16.124-22.414 1-24.25 21.403 0.96 27.931-0.2728 33.75 20"
					/>
				</g>
			</g>
			<g
				class="levitate"
				fill="none"
				stroke="#36c9ac">
				<circle
					cx="1005.6"
					cy="-21.664"
					r="26.517"
					opacity=".97"
					stroke-width="7"
					style="paint-order:stroke fill markers" />
				<circle
					cx="1119.9"
					cy="1.4991"
					r="33.418"
					opacity=".97"
					stroke-width="8.8219"
					style="paint-order:stroke fill markers" />
				<circle
					cx="893.53"
					cy="-8.6804"
					r="33.418"
					opacity=".97"
					stroke-width="8.8219"
					style="paint-order:stroke fill markers" />
				<circle
					cx="1235.9"
					cy="53.52"
					r="41.7"
					opacity=".97"
					stroke-width="11.008"
					style="paint-order:stroke fill markers" />
				<circle
					cx="780.98"
					cy="46.923"
					r="41.7"
					opacity=".97"
					stroke-width="11.008"
					style="paint-order:stroke fill markers" />
				<circle
					cx="1351.7"
					cy="162.56"
					r="56.883"
					opacity=".97"
					stroke-width="15.016"
					style="paint-order:stroke fill markers" />
				<circle
					cx="670.78"
					cy="157.68"
					r="56.883"
					opacity=".97"
					stroke-width="15.016"
					style="paint-order:stroke fill markers" />
			</g>
		</g>
	</svg>
</template>

<style lang="scss">
.mage {
  width: 100%;
  height: auto;
  animation: levitate 4.5s infinite ease-in-out alternate both;
  overflow: visible;
  .levitate {
    circle {
      animation: levitate 4s infinite ease-in-out alternate both;
      &:nth-child(1) {
        animation-duration: 4s;
        animation-delay: 0.2s;
      }
      &:nth-child(2) {
        animation-duration: 5s;
        animation-delay: 1s;
      }
      &:nth-child(3) {
        animation-duration: 6s;
        animation-delay: 0.4s;
      }
      &:nth-child(4) {
        animation-duration: 6.5s;
        animation-delay: 2s;
      }
      &:nth-child(5) {
        animation-duration: 7s;
        animation-delay: 0.6s;
      }
      &:nth-child(6) {
        animation-duration: 7.5s;
        animation-delay: 2s;
      }
      &:nth-child(7) {
        animation-duration: 8.5s;
        animation-delay: 0.8s;
      }
    }
  }
}
</style>
