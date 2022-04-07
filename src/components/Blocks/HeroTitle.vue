<template>
  <div class="hero-title">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.hero-title {
  background: $color-black;
  margin: -#{$gap-y-small} 0;
  padding: 2rem 0;
  position: relative;

  @include breakpoint(md) {
    padding: 6rem 0;

    margin: -#{$gap-y-mid} 0;
  }

  @include breakpoint(lg) {
    margin: 0;
  }

  &::before {
    content: "";
    position: absolute;
    left: -25vw;
    top: 0;
    width: 125vw;
    height: 100%;
    background: $color-black;
    z-index: -1;
  }

  h1 {
    color: $color-white;
    text-align: center;
  }
}
</style>