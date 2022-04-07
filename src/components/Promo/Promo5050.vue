<template>
  <Component5050 class="component5050--row promo-5050"
    ><template #left>
      <ResponsiveImage
        class="promo-5050__img"
        :image="image"
        alt="product image"
      />
    </template>
    <template #right>
      <div class="promo-5050__container">
        <div class="promo-wrapper">
          <h4>{{ title }}</h4>
          <router-link :to="path" class="c-btn c-btn--secondary"
            >see product</router-link
          >
        </div>
      </div>
    </template></Component5050
  >
</template>

<script>
import Component5050 from "@/components/Blocks/Component5050.vue";
import ResponsiveImage from "@/components/Blocks/ResponsiveImage.vue";

export default {
  components: {
    Component5050,
    ResponsiveImage,
  },
  props: {
    image: Object,
    title: {
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
.promo-5050 {
  &__container {
    background: $color-gray-dark;
    border-radius: $border-radius;

    @include breakpoint(md) {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }

  &__wrapper {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;

    @include breakpoint(md) {
      padding: 5%;
    }
  }

  &__container,
  &__img {
    width: 100%;
    height: 100%;
  }

  &__img {
    img {
      display: block;
      height: 100%;
    }
  }

  h4 {
    margin-bottom: 1.2em;
  }

  :deep(.component5050__left),
  :deep(.component5050__right) {
    align-self: stretch;
  }
}
</style>