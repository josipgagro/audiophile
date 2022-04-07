<template>
  <Component5050
    ><template #left>
      <ResponsiveImage
        class="promo-pd__img"
        :image="product.image"
        :alt="product.name"
      />
    </template>
    <template #right>
      <div class="info-container promo-pd__info">
        <p v-if="product.new" class="overline">new product</p>
        <h4 class="info-container__title">
          {{ product.name }}
        </h4>
        <p class="info-container__description">{{ product.description }}</p>
        <p class="info-container__price">${{ product.price }}</p>
        <QuantitySelector
          :product="product"
          :quantity="quantity"
          btnText="Add to cart"
          @increment="increment"
          @decrement="decrement"
          @handleClick="addToCart"
        />
      </div> </template
  ></Component5050>
</template>

<script>
import Component5050 from "@/components/Blocks/Component5050.vue";
import QuantitySelector from "@/components/Blocks/QuantitySelector.vue";
import ResponsiveImage from "@/components/Blocks/ResponsiveImage.vue";

export default {
  components: {
    Component5050,
    QuantitySelector,
    ResponsiveImage,
  },
  props: {
    product: Object,
  },
  data() {
    return {
      quantity: 1,
    };
  },
  methods: {
    increment: function () {
      this.quantity++;
    },
    decrement: function () {
      if (this.quantity > 1) this.quantity--;
    },
    addToCart: function () {
      this.$store.commit("addToCart", {
        item: this.product,
        quantity: this.quantity,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.info-container {
  text-align: left;

  &__price {
    font-weight: bold;
    margin-bottom: 2em;
  }

  &__description {
    margin-right: 0;
    margin-left: 0;
  }
}
</style>