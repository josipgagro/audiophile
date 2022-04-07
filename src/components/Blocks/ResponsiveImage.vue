<template>
  <picture>
    <source
      media="(min-width: 960px)"
      :srcset="`${publicPath}${image.desktop}`"
    />
    <source
      media="(min-width: 720px)"
      :srcset="`${publicPath}${image.tablet}`"
    />
    <img :src="`${publicPath}${image.mobile}`" :alt="alt" />
  </picture>
</template>

<script>
export default {
  props: {
    image: Object,
    alt: String,
  },
  data() {
    return {
      publicPath: process.env.BASE_URL,
    };
  },
};
</script>