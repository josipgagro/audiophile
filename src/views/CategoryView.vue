<template>
  <div>
    <HeroTitle :title="$route.params.category" />
    <ul>
      <li
        v-for="(product, index) of items"
        :key="product.name"
        class="delimiter"
      >
        <PromoProductDetail
          :product="product"
          :class="{ 'component5050--reverse': index % 2 > 0 }"
          :path="`/product-detail/${product.slug}`"
        />
      </li>
    </ul>
    <div class="delimiter">
      <CategoryNavigation />
    </div>
  </div>
</template>

<script>
import CategoryNavigation from "@/components/Navigation/CategoryNavigation.vue";
import PromoProductDetail from "@/components/Promo/PromoProductDetail.vue";
import ProductDetail from "@/components/Product/ProductDetail.vue";
import HeroTitle from "@/components/Blocks/HeroTitle.vue";

export default {
  components: {
    CategoryNavigation,
    PromoProductDetail,
    ProductDetail,
    HeroTitle,
  },
  computed: {
    items: function () {
      return this.$store.getters[this.$route.params.category];
    },
  },
};
</script>

<style>
</style>