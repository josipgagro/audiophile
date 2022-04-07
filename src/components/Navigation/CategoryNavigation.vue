<template>
  <nav class="category-navigation">
    <ul class="category-navigation__list">
      <li class="category-navigation__list-item">
        <CategoryItem
          name="headphones"
          path="/category/headphones"
          image="/assets/shared/desktop/image-category-thumbnail-headphones.png"
        />
      </li>
      <li class="category-navigation__list-item">
        <CategoryItem
          name="speakers"
          path="/category/speakers"
          image="/assets/shared/desktop/image-category-thumbnail-speakers.png"
        />
      </li>
      <li class="category-navigation__list-item">
        <CategoryItem
          name="earphones"
          path="/category/earphones"
          image="/assets/shared/desktop/image-category-thumbnail-earphones.png"
        />
      </li>
    </ul>
  </nav>
</template>

<script>
import CategoryItem from "./CategoryItem.vue";

export default {
  components: {
    CategoryItem,
  },
};
</script>

<style lang="scss" scoped>
.category-navigation__list {
  &-item {
    flex: 1 1 auto;

    & + .category-navigation__list-item {
      margin-top: 1.5rem;
    }
  }

  @include breakpoint(md) {
    display: flex;
    align-items: baseline;
    justify-content: center;

    &-item + .category-navigation__list-item {
      margin: 0px 0px 0px 0.5rem;
    }
  }
}
</style>
