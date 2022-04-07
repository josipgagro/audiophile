<template>
  <div class="wrapper hero-image">
    <div class="hero-image__container">
      <h1>
        <span v-if="prefix" class="hero-image__prefix">{{ prefix }}</span>
        {{ title }}
      </h1>
      <p class="hero-image__description">
        {{ description }}
      </p>
      <router-link v-if="linkText" :to="path" class="c-btn c-btn--primary">{{
        linkText
      }}</router-link>
    </div>
    <div class="hero-image__img">
      <ResponsiveImage :image="image" alt="hero-image" />
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
    description: String,
    prefix: String,
    image: Object,
    path: {
      type: String,
      default: "/",
    },
    linkText: String,
  },
  data() {
    return {
      headerHeight: 0,
    };
  },
  mounted() {
    this.headerHeight = `${document.querySelector("header").offsetHeight}px`;
  },
};
</script>

<style lang="scss" scoped>
.hero-image {
  height: calc(100vh - 2rem - #{v-bind("headerHeight")});
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  @include breakpoint(lg) {
    align-items: baseline;
    text-align: left;
    width: 100%;
    margin-top: 0;
    height: calc(100vh - #{v-bind(headerHeight)});
  }

  &__container {
    @include breakpoint(lg) {
      width: 40%;
    }
  }

  &__prefix {
    display: block;
    margin-bottom: 1em;
    color: $color-white;
    opacity: 0.5;

    @include breakpoint(md) {
      margin-bottom: 1.5em;
      letter-spacing: 0.666em;
    }
  }

  h1 {
    color: $color-white;
    margin-bottom: 1.5rem;
  }

  &__description {
    color: $color-white;
    opacity: 0.75;
    margin-bottom: 1em;

    @include breakpoint(lg) {
      margin-bottom: 2em;
    }
  }

  .c-btn {
    display: inline-block;
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
}
</style>
