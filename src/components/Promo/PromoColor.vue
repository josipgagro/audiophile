<template>
  <div class="promo-wrapper promo-color">
    <ResponsiveImage
      :image="image"
      class="promo-color__img"
      alt="promo image"
    />
    <div class="promo-color__container">
      <h1>{{ title }}</h1>
      <p class="promo-color__description">{{ description }}</p>
      <router-link :to="path" class="c-btn c-btn--secondary--dark"
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
    image: Object,
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      default: "/",
    },
  },
};
</script>

<style lang="scss" scoped>
.promo-color {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: $color-primary;
  border-radius: $border-radius;
  position: relative;

  @include breakpoint(lg) {
    flex-direction: row;
    justify-content: flex-end;
    text-align: left;
    height: 60vh;
    overflow: hidden;
  }

  &::after {
    content: "";
    background: url("/public/assets/home/desktop/pattern-circles.svg");
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    top: -10%;
    bottom: 0;
    width: 80%;
    margin: 0 auto;

    @include breakpoint(lg) {
      margin: 0;
      top: 0;
      left: 0;
    }
  }

  &__img {
    width: 50%;
    margin-bottom: 2rem;

    @include breakpoint(md) {
      width: 30%;
      margin-bottom: 4rem;
    }

    @include breakpoint(lg) {
      position: absolute;
      bottom: -5%;
      left: 10%;
      margin-bottom: 0;
      width: 25vw;
    }
  }

  &__container {
    @include breakpoint(md) {
      width: 50%;
    }

    @include breakpoint(lg) {
      width: 40%;
    }
  }

  h1,
  .promo-color__description {
    color: $color-white;
  }

  h1 {
    margin-bottom: 0.7em;
  }

  &__description {
    margin-bottom: 1.5em;

    @include breakpoint(md) {
      margin-bottom: 2.5em;
    }
  }

  .c-btn {
    display: inline-block;
  }
}
</style>