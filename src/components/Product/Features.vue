<template>
  <div class="features__container">
    <div class="features__info">
      <h5>features</h5>
      <p>{{ product.features }}</p>
    </div>

    <div class="features__list-container">
      <h5>in the box</h5>
      <ul class="features__list">
        <li v-for="(item, index) of product.includes" :key="index">
          <strong>{{ item.quantity }}x</strong> <span>{{ item.item }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.features {
  &__container {
    margin: 6.5rem 0;

    @include breakpoint(md) {
      margin: 7.5rem 0 0;
    }

    @include breakpoint(lg) {
      display: flex;
      justify-content: space-between;
    }

    h5 {
      margin-bottom: 1em;
    }

    p {
      opacity: 0.5;
      white-space: pre-wrap;
    }
  }

  &__info {
    margin-bottom: 6.5rem;

    @include breakpoint(md) {
      margin-bottom: 7.5rem;
    }

    @include breakpoint(lg) {
      flex: 0 1 60%;
      margin-bottom: 0;
    }
  }

  &__list {
    &-container {
      @include breakpoint(md) {
        display: flex;
        align-items: flex-start;
        justify-content: space-evenly;

        & > * {
          flex: 1 0 45%;
        }
      }

      @include breakpoint(lg) {
        display: block;
      }

      @include breakpoint(lg) {
        flex: 0 1 30%;
      }
    }

    li + li {
      margin-top: 0.5em;
    }

    strong {
      color: $color-primary;
      margin-right: 1em;
    }

    span {
      opacity: 0.5;
    }
  }
}
</style>