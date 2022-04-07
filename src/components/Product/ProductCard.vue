<template>
  <div class="product-card">
    <ResponsiveImage
      class="promo-pd__img"
      :image="product.image"
      :alt="product.name"
    />
    <div class="product-card__text-container">
      <h5>{{ product.name }}</h5>
      <router-link
        :to="`/product-detail/${product.slug}`"
        class="c-btn c-btn--primary"
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
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.product-card {
  text-align: center;
  height: 100%;

  &__text-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-top: 1.5em;
  }

  h5 {
    margin-bottom: 1.5em;
  }

  img {
    border-radius: $border-radius;
  }
}
</style>