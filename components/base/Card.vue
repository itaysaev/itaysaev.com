<template>
	<div class="card">
		<slot/>
	</div>
</template>


<style lang="scss">
.card {
  @include card();
}
.card-double-container {
  display: flex;
  justify-content: space-between;
  .card {
    flex-grow: 1;
  }
  .card:nth-child(2n-1) {
    margin-right: 2em;
  }
}
</style>
