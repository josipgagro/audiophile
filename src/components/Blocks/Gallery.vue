<template>
  <Component5050 class="delimiter"
    ><template #left>
      <div class="gallery__left">
        <div>
          <ResponsiveImage :image="images.first" alt="product image" />
        </div>
        <div>
          <ResponsiveImage :image="images.second" alt="product image" />
        </div>
      </div>
    </template>
    <template #right>
      <div class="gallery__right">
        <ResponsiveImage
          class="gallery__img"
          :image="images.third"
          alt="product image"
        />
      </div> </template
  ></Component5050>
</template>

<script>
import Component5050 from "@/components/Blocks/Component5050.vue";
import ResponsiveImage from "@/components/Blocks/ResponsiveImage.vue";

export default {
  components: {
    Component5050,
    ResponsiveImage,
  },
  props: {
    images: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.gallery {
  &__left {
    div + div {
      margin-top: 2rem;
    }
  }

  &__right {
    width: 100%;

    @include breakpoint(md) {
      .gallery__img :deep(img) {
        height: 100%;
      }
    }
  }
}

:deep(.component5050__right) {
  @include breakpoint(md) {
    align-self: stretch;
    display: flex;
  }
}
</style>