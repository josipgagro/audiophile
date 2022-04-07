<template>
  <div class="cart">
    <h1>Cart</h1>
    <div v-if="cartItems.length > 0" class="cart__container">
      <CartList :cartItems="cartItems" />
      <CartSummary>
        <router-link to="/checkout" class="c-btn c-btn--primary"
          >Go to Checkout</router-link
        >
      </CartSummary>
    </div>
    <div v-else>
      <p>Cart is empty.</p>
    </div>
  </div>
</template>

<script>
import CartList from "@/components/Cart/CartList.vue";
import CartSummary from "@/components/Cart/CartSummary.vue";

export default {
  components: {
    CartList,
    CartSummary,
  },
  computed: {
    cartItems: function () {
      return this.$store.state.cart;
    },
  },
};
</script>

<style lang="scss" scoped>
.cart {
  h1 {
    margin: 1em 0;
  }

  &__container {
    @include breakpoint(lg) {
      display: flex;

      & > :deep(.cart-list) {
        flex: 1 1 80%;
        margin-right: 2rem;
      }

      & > :deep(.cart-summary) {
        flex: 1 1 50%;
      }
    }
  }
}
</style>