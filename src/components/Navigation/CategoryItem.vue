<template>
  <div class="category-item">
    <img :src="image" alt="category item" class="category-item__img" />
    <p class="category-item__name">{{ name }}</p>
    <router-link :to="path" class="link-button">shop</router-link>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.category-item {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  &__name {
    line-height: 1.25em;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 1em;
    position: relative;
  }

  &__img {
    width: 120px;
    height: 120px;
    margin-bottom: spacing(2);
  }

  .link-button {
    margin-bottom: 2em;
  }

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: $color-gray-dark;
    height: 80%;
    border-radius: $border-radius;
    z-index: -1;
  }
}
</style>
