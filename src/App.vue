<template>
  <template v-if="products?.length > 0">
    <Header />
    <div class="wrapper container content">
      <router-view />
      <About />
    </div>
    <Footer />
  </template>
</template>

<script>
import Header from "@/components/Blocks/Header.vue";
import About from "@/components/Blocks/About.vue";
import Footer from "@/components/Blocks/Footer.vue";
import { mapState } from "vuex";

export default {
  components: {
    Header,
    About,
    Footer,
  },
  computed: {
    ...mapState(["products"]),
  },
  created() {
    this.$store.dispatch("getProducts");
  },
};
</script>

<style lang="scss">
.content {
  overflow-x: hidden;

  @include breakpoint(md) {
    overflow-x: visible;
  }
}
</style>
