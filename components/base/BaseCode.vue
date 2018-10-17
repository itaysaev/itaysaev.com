<template>
	<div class="code">
		<!-- <div class="code-top">
			<div class="code-top-bar">
				<span class="close"/>
				<span class="minimize"/>
				<span class="maximize"/>
			</div>
		</div> -->
		<div class="code-content">
			<slot/>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		lang: {
			type: String,
			default: "JS"
		}
	}
};
</script>

<style lang="scss">
$color-close: #fc5753;
$color-minimize: #fdbc40;
$color-maximize: #33c748;

.code-container {
  display: flex;
  justify-content: center;
}

.code {
  @include card($text-color: $color-text-code, $padding: 1em);
  max-width: 100%;
  overflow: auto;
	font-family: $mono-font-family;
	font-size: $font-size-small;
	@include respond-to(x-small) {
		padding: 2em;
		font-size: $font-size-regular;
	}
	@include respond-to(large) {
    font-size: $font-size-large;
	}
	a {
		color: $color-text-code;
		border-bottom: 0.1em dashed;
		&:hover {
			border-bottom-color: transparent;
		}
	}
  .code-top {
    margin-bottom: 1em;
    display: flex;
    align-items: center;
    .code-top-bar {
      display: flex;
    }
    span {
      display: inline-block;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background-color: white;
      margin-right: 10px;
      &:last-child {
        margin-right: 0;
      }
      &.close {
        background-color: $color-close;
      }
      &.minimize {
        background-color: $color-minimize;
      }
      &.maximize {
        background-color: $color-maximize;
      }
    }
  }
  .comment {
    color: $color-text-code-comment;
  }
  .object {
		position: relative;
		// left decor line
    &::before {
      content: "";
      position: absolute;
      top: 2em;
      bottom: 2em;
      left: 0.2em;
      width: 1px;
      background-color: $color-text-code-value;
      opacity: 0.6;
    }
    .object {
      padding-left: 2em;
      &::before {
        left: 2.2em;
      }
    }
    .value {
      color: $color-text-code-value;
      padding-left: 2em;
      display: block;
    }
    .key {
      color: inherit;
    }
    &.inline {
      &::before {
        display: none;
      }
      .value {
        padding-left: 0;
        display: inline;
      }
    }
    &.inline-small {
      @include respond-to(small) {
        &::before {
          display: none;
        }
        .value {
          padding-left: 0;
          display: inline;
        }
      }
    }
  }
  .mg {
    margin-bottom: 1em;
  }
}
</style>
