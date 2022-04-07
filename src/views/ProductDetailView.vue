<template>
  <section>
    <BackButton />
    <ProductDetail :product="product" />
    <Features :product="product" />
    <Gallery :images="product.gallery" />
    <div class="delimiter">
      <CategoryNavigation />
    </div>
    <ProductCardList :products="product.others" title="you may also like" />
  </section>
</template>

<script>
import { mapState } from "vuex";

import ProductDetail from "@/components/Product/ProductDetail.vue";
import ProductCardList from "@/components/Product/ProductCardList.vue";
import BackButton from "@/components/Blocks/BackButton.vue";
import CategoryNavigation from "@/components/Navigation/CategoryNavigation.vue";
import Gallery from "@/components/Blocks/Gallery.vue";
import Features from "@/components/Product/Features.vue";

export default {
  components: {
    ProductDetail,
    BackButton,
    CategoryNavigation,
    ProductCardList,
    Gallery,
    Features,
  },
  computed: {
    ...mapState(["products"]),
    product: function () {
      return this.products.find(
        (item) => item.slug == this.$route.params.productId
      );
    },
  },
};
</script>

<style lang="scss" scoped>
</style>