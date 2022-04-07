<template>
  <div class="cart-summary">
    <h5>Cart Summary</h5>
    <CartList :cartItems="cart" :quantitySelector="false" />

    <ul class="cart-summary__price-list">
      <li>Price: ${{ initialPrice }}</li>
      <li>VAT:+${{ vatPrice }}</li>
      <li>Shipping: +$50</li>
      <li class="cart-summary__price-list__total">
        <strong>Total: ${{ totalPrice }}</strong>
      </li>
    </ul>
    <div class="cart-summary__btn-container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapState } from "vuex";

import CartList from "@/components/Cart/CartList.vue";

export default {
  components: {
    CartList,
  },
  computed: {
    ...mapGetters(["initialPrice", "vatPrice", "totalPrice"]),
    ...mapState(["cart"]),
  },
};
</script>

<style lang="scss" scoped>
.cart-summary {
  border-radius: $border-radius;
  background: $color-gray-dark;
  padding: 2rem 1rem;

  .cart-list {
    margin-top: 2rem;
  }

  &__price-list {
    text-align: right;

    &__total {
      font-size: 1.5rem;
      margin: 1rem 0;
      padding: 0.5em;
      border-top: 2px solid $color-primary;
    }
  }

  &__btn-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
}
</style>