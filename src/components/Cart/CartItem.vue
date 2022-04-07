<template>
  <div class="cart-item">
    <div class="cart-item__info">
      <div class="cart-item__title">
        <router-link :to="`/product-detail/${product.slug}`">{{
          product.name
        }}</router-link>
        <strong class="link">${{ product.price }}</strong>
      </div>
      <div class="cart-item__quantity">Quantity:{{ product.quantity }}</div>
    </div>
    <div v-if="quantitySelector" class="cart-item__selector-container">
      <QuantitySelector
        :product="product"
        :quantity="product.quantity"
        :showBtn="false"
        btnText="Remove"
        @increment="increment"
        @decrement="decrement"
        @handleClick="removeItem"
      />
    </div>
  </div>
</template>

<script>
import QuantitySelector from "@/components/Blocks/QuantitySelector.vue";

export default {
  components: {
    QuantitySelector,
  },
  props: {
    product: Object,
    quantitySelector: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    increment: function () {
      this.updateCartQuantity(this.product.quantity + 1);
    },
    decrement: function () {
      this.updateCartQuantity(this.product.quantity - 1);
    },
    updateCartQuantity: function (value) {
      this.$store.commit("updateCartQuantity", {
        item: this.product,
        quantity: value,
      });
    },
    removeItem: function () {
      this.$store.commit("removeCartItem", {
        item: this.product,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.cart-item {
  padding: 1rem;

  &__info {
    & + .cart-item__selector-container {
      margin-top: 1rem;
    }
  }

  &__title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid $color-primary;

    a:hover {
      color: $color-primary;
    }
  }

  &__quantity {
    margin-top: 0.5rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  &__selector-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .link {
    &:hover {
      color: $color-black;
    }
  }
}
</style>