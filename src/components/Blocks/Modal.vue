<template>
  <div v-if="isOpen" class="modal">
    <button @click="closeModal" type="button" class="modal__btn">X</button>
    <h3 v-if="title">{{ title }}</h3>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      default: true,
    },
    title: String,
  },
  methods: {
    closeModal: function () {
      this.$emit("toggleModal");
    },
  },
  watch: {
    isOpen: function () {
      document.querySelector("#app").classList.toggle("modal--open");
    },
  },
};
</script>

<style lang="scss">
.modal {
  position: fixed;
  z-index: 100;
  top: 50%;
  transform: translateY(-50%);
  left: 1rem;
  right: 1rem;
  padding: 3rem 2rem;
  background: $color-primary-light;
  border-radius: $border-radius;

  &--open {
    &::before {
      content: "";
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      height: 100vh;
      width: 100vw;
      background: rgba($color-black, 0.4);
      z-index: 1;
    }
  }

  @include breakpoint(md) {
    padding: 3rem;
  }

  @include breakpoint(lg) {
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 70vw;
  }

  h3 {
    margin-bottom: 2em;
    color: $color-white;
  }

  &__btn {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    font-size: 2rem;

    @include breakpoint(md) {
      top: 1.5rem;
      right: 1.5rem;
    }

    &:hover {
      color: $color-white;
    }
  }
}
</style>