<template>
  <div class="promo-wrapper promo-bg">
    <ResponsiveImage class="promo-bg__img" :image="image" alt="product image" />
    <div>
      <h4>{{ title }}</h4>
      <router-link :to="path" class="c-btn c-btn--secondary"
        >see product</router-link
      >
    </div>
  </div>
</template>

<script>
import ResponsiveImage from "@/components/Blocks/ResponsiveImage.vue";

export default {
  components: {
    ResponsiveImage,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      default: "/",
    },
    image: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.promo-bg {
  height: 30vh;
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  border-radius: $border-radius;
  padding-top: 0;
  padding-bottom: 0;

  @include breakpoint(lg) {
    height: 40vh;
  }

  &__img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;

    :deep(img) {
      height: 100%;
    }
  }

  h4 {
    margin-bottom: 1.15em;
  }
}
</style>