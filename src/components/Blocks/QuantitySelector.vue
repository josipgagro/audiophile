<template>
  <form @submit.prevent class="quantity-selector">
    <div class="quantity-selector__container">
      <button
        @click="decrement"
        class="quantity-selector__btn"
        type="button"
        :disabled="quantity === 1"
      >
        -
      </button>
      <input
        :value="quantity"
        type="number"
        name="quantity"
        id="quantity"
        disabled
      />
      <button @click="increment" class="quantity-selector__btn" type="button">
        +
      </button>
    </div>
    <button type="button" @click="handleClick" class="c-btn c-btn--primary">
      {{ btnText }}
    </button>
  </form>
</template>

<script>
export default {
  props: {
    product: Object,
    quantity: Number,
    btnText: String,
  },
  methods: {
    increment() {
      this.$emit("increment");
    },
    decrement() {
      this.$emit("decrement");
    },
    handleClick: function () {
      this.$emit("handleClick");
    },
  },
};
</script>

<style lang="scss" scoped>
.quantity-selector {
  display: flex;

  &__container {
    display: flex;
    margin-right: 1rem;
  }

  &__btn {
    padding: 1rem;
    font-size: $font-size-small;
    background: $color-gray-dark;
    color: rgba($color-black, 0.25);

    &:hover {
      color: $color-primary;
    }
  }

  input {
    max-width: 2.5rem;
    border: none;
    background: $color-gray-dark;
    font-size: $font-size-small;
    font-weight: bold;
    text-align: center;
  }
}
</style>