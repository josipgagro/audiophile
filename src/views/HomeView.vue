<template>
  <div class="home wrapper--no-y">
    <HeroImage
      prefix="new product"
      title="XX99 Mark II HeadphoneS"
      description="Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast."
      linkText="see product"
      :image="{
        mobile: './assets/home/mobile/image-header.jpg',
        tablet: './assets/home/tablet/image-header.jpg',
        desktop: './assets/home/desktop/image-hero.jpg',
      }"
      path="/product-detail/xx99-mark-two-headphones"
    />

    <div class="delimiter">
      <CategoryNavigation />
    </div>

    <div class="home__promo">
      <PromoColor
        title="zx9 speaker"
        description="Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound."
        :image="{
          mobile: './assets/home/mobile/image-speaker-zx9.png',
          tablet: './assets/home/tablet/image-speaker-zx9.png',
          desktop: './assets/home/desktop/image-speaker-zx9.png',
        }"
        path="/product-detail/zx9-speaker"
      />

      <PromoBackground
        title="zx7 speaker"
        :image="{
          mobile: './assets/home/mobile/image-speaker-zx7.jpg',
          tablet: './assets/home/tablet/image-speaker-zx7.jpg',
          desktop: './assets/home/desktop/image-speaker-zx7.jpg',
        }"
        path="/product-detail/zx7-speaker"
      />

      <Promo5050
        title="Earphones yx1"
        :image="{
          mobile: './assets/home/mobile/image-earphones-yx1.jpg',
          tablet: './assets/home/tablet/image-earphones-yx1.jpg',
          desktop: './assets/home/desktop/image-earphones-yx1.jpg',
        }"
        path="/product-detail/yx1-earphones"
      />
    </div>
  </div>
</template>

<script>
import HeroImage from "@/components/Blocks/HeroImage.vue";
import CategoryNavigation from "@/components/Navigation/CategoryNavigation.vue";
import PromoColor from "@/components/Promo/PromoColor.vue";
import PromoBackground from "@/components/Promo/PromoBackground.vue";
import Promo5050 from "@/components/Promo/Promo5050.vue";

export default {
  name: "HomeView",
  components: {
    HeroImage,
    CategoryNavigation,
    PromoColor,
    PromoBackground,
    Promo5050,
  },
};
</script>

<style lang="scss" scoped>
.home__promo {
  div + div {
    margin-top: 1.5rem;

    @include breakpoint(md) {
      margin-top: 2rem;
    }

    @include breakpoint(lg) {
      margin-top: 3rem;
    }
  }
}
</style>
