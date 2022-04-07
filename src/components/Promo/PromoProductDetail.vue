<template>
  <Component5050 class="promo-pd"
    ><template #left>
      <ResponsiveImage
        class="promo-pd__img"
        :image="product.image"
        alt="product image"
      />
    </template>
    <template #right>
      <div class="info-container promo-pd__info">
        <p v-if="product.new" class="overline">new product</p>
        <h4 class="info-container__title">
          {{ product.name }}
        </h4>
        <p class="info-container__description">{{ product.description }}</p>
        <router-link :to="path" class="c-btn c-btn--primary"
          >see product</router-link
        >
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
    product: Object,
    label: String,
    path: {
      type: String,
      default: "/",
    },
  },
};
</script>