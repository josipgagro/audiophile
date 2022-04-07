<template>
  <div class="delimiter">
    <h3 class="product-card-list__title">{{ title }}</h3>
    <ul class="product-card-list">
      <li v-for="product of products" :key="product.name">
        <ProductCard :product="product" />
      </li>
    </ul>
  </div>
</template>

<script>
import ProductCard from "@/components/Product/ProductCard.vue";

export default {
  components: {
    ProductCard,
  },
  props: {
    products: {
      type: Array,
      required: true,
    },
    title: String,
  },
};
</script>

<style lang="scss" scoped>
.product-card-list {
  li + li {
    margin-top: 3.5rem;
  }

  @include breakpoint(md) {
    display: flex;
    align-items: stretch;

    li + li {
      margin-top: 0;
      margin-left: 1rem;
    }

    li {
      flex: 1 1 33%;
    }
  }

  @include breakpoint(lg) {
    li + li {
      margin-left: 2rem;
    }
  }

  &__title {
    text-align: center;
    margin-bottom: 2.5rem;

    @include breakpoint(md) {
      margin-bottom: 3.5rem;
    }
    @include breakpoint(md) {
      margin-bottom: 4rem;
    }
  }
}
</style>