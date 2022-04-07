<template>
  <div class="component5050">
    <div class="component5050__left">
      <slot name="left"></slot>
    </div>
    <div class="component5050__right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.component5050 {
  display: flex;
  flex-direction: column;
  align-items: center;

  @include breakpoint(lg) {
    flex-direction: row;
    justify-content: space-between;
  }

  &--row {
    @include breakpoint(md) {
      flex-direction: row;
      justify-content: space-between;

      .component5050__right {
        margin-top: 0;
        margin-left: 0.75rem;
      }
    }
  }

  &--reverse {
    @include breakpoint(lg) {
      flex-direction: row-reverse;

      .component5050__right {
        margin-left: 0;
        margin-right: 2rem;
      }
    }
  }

  img {
    display: block;
    min-height: 25vh;
    border-radius: $border-radius;

    @include breakpoint(md) {
      max-height: 50vh;
    }

    @include breakpoint(lg) {
      max-height: initial;
    }
  }

  &__left,
  &__right {
    width: 100%;
  }

  &__right {
    margin-top: 1.5rem;

    @include breakpoint(lg) {
      margin-left: 2rem;
      margin-top: 0;
    }
  }

  .info-container {
    text-align: center;

    @include breakpoint(lg) {
      text-align: left;
    }

    .overline {
      margin-bottom: 1rem;
    }

    strong {
      color: $color-primary;
    }

    &__description {
      margin-top: 1.5rem;
      margin-bottom: 1.5rem;
      opacity: 0.5;

      @include breakpoint(md) {
        width: 80%;
        margin: 1.5rem auto 2rem;
      }

      @include breakpoint(lg) {
        margin: 2.5rem 0 2rem;
      }
    }
  }
}
</style>