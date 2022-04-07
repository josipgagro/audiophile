<template>
  <div class="back__container">
    <button @click="goBack">Go back</button>
  </div>
</template>

<script>
export default {
  methods: {
    goBack: function () {
      this.$router.back();
    },
  },
};
</script>

<style lang="scss" scoped>
.back {
  &__container {
    margin: 1rem 0;

    @include breakpoint(md) {
      margin: 2rem 0 1rem;
    }

    @include breakpoint(lg) {
      margin: 3.5rem 0 2rem;
    }

    button {
      opacity: 0.5;

      &:hover {
        color: $color-primary;
      }
    }
  }
}
</style>