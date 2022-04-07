<template>
  <Component5050 class="component5050--reverse delimiter">
    <template #left>
      <ResponsiveImage
        :image="{
          mobile: './assets/shared/mobile/image-best-gear.jpg',
          tablet: './assets/shared/tablet/image-best-gear.jpg',
          desktop: './assets/shared/desktop/image-best-gear.jpg',
        }"
        alt="man listening music"
      />
    </template>
    <template #right>
      <div class="info-container">
        <h4 class="info-container__title">
          bringing you the <strong>best</strong> audio gear
        </h4>
        <p class="info-container__description">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </template>
  </Component5050>
</template>

<script>
import Component5050 from "@/components/Blocks/Component5050.vue";
import ResponsiveImage from "@/components/Blocks/ResponsiveImage.vue";

export default {
  components: {
    Component5050,
    ResponsiveImage,
  },
};
</script>

<style lang="scss" scoped>
.about {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @include breakpoint(lg) {
    flex-direction: row-reverse;
    text-align: left;

    .wrapper,
    &__img {
      flex: 0 1 50%;
    }

    .wrapper {
      margin-right: 2rem;
    }
  }

  h2 {
    font-size: 1.75rem;
    margin-bottom: 1.25em;

    @include breakpoint(md) {
      font-size: 2.5rem;
    }

    strong {
      font-size: inherit;
      font-weight: inherit;
      color: $color-primary;
    }
  }

  &__img {
    img {
      border-radius: $border-radius;
    }
  }

  &__description {
    opacity: 0.5;

    @include breakpoint(lg) {
      width: 80%;
    }
  }
}
</style>