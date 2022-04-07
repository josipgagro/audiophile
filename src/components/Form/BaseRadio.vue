<template>
  <div class="radio-container">
    <input v-bind="$attrs" type="radio" @change="handleChange" />
    <label :for="$attrs.id">{{ label }}</label>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    label: String,
  },
  methods: {
    handleChange: function (e) {
      this.$emit("change", e.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.radio-container {
  label {
    height: $input-height;
    padding: 0 1.5rem;
    position: relative;
    border: 1px solid $color-border;
    border-radius: $border-radius;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    cursor: pointer;
    transition: border-color 300ms;
    padding: 0 2rem 0 3rem;

    &::before {
      content: "";
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 1rem;
      width: 1rem;
      height: 1rem;
      border: 1px solid $color-border;
      border-radius: 50%;
    }

    &::after {
      content: "";
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 21px;
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 50%;
    }

    &:hover {
      border-color: $color-primary;
    }
  }

  input {
    position: absolute;
    left: -9999px;

    &:checked + label {
      border-color: $color-primary;

      &::after {
        background: $color-primary;
      }
    }
  }
}
</style>