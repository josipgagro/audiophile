<template>
  <ul class="cart-list">
    <li v-for="item of cartItems" :key="item.name">
      <CartItem :product="item" :quantitySelector="quantitySelector" />
    </li>
  </ul>
</template>

<script>
import CartItem from "@/components/Cart/CartItem.vue";

export default {
  components: {
    CartItem,
  },
  props: {
    cartItems: { type: Array, required: true },
    quantitySelector: { type: Boolean, default: true },
  },
};
</script>

<style lang="scss" scoped>
.cart-list {
  margin-bottom: 3rem;
  background: $color-white;
  border-radius: $border-radius;

  li + li {
    margin-top: 1rem;
  }
}
</style>