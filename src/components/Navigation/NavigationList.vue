<template>
  <ul class="navigation-list">
    <li><router-link to="/">home</router-link></li>
    <li>
      <router-link to="/category/headphones">headphones</router-link>
    </li>
    <li>
      <router-link to="/category/speakers">speakers</router-link>
    </li>
    <li>
      <router-link to="/category/earphones">earphones</router-link>
    </li>
  </ul>
</template>

<script>
export default {};
</script>

<style lang="scss">
.navigation-list {
  a {
    color: $color-white;

    &:hover {
      color: $color-primary;
    }
  }

  @include breakpoint(md) {
    display: flex;
    align-items: center;
    margin-top: 2rem;
  }

  @include breakpoint(lg) {
    margin-top: 0;
  }

  li + li {
    margin-top: 1em;

    @include breakpoint(md) {
      margin-top: 0;
      margin-left: 2em;
    }
  }
}
</style>