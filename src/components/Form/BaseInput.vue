
<template>
  <div :class="['input-container', { 'input-container--error': errorMsg }]">
    <div class="input-container__label-container" v-if="label">
      <label :for="name">{{ label }}:</label>
      <span v-if="errorMsg" class="input-container__error">{{ errorMsg }}</span>
    </div>
    <input
      v-bind="$attrs"
      :value="modelValue"
      :type="type"
      :id="id"
      :placeholder="placeholder"
      @input="returnValue"
    />
    <slot name="afterInput"></slot>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    modelValue: String,
    type: {
      type: String,
      default: "text",
    },
    errorMsg: String,
    id: {
      type: String,
      required: true,
    },
    name: String,
    placeholder: {
      type: String,
      required: true,
    },
    label: String,
  },
  methods: {
    returnValue: function (e) {
      this.$emit("update:modelValue", e.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.input-container {
  input {
    border: 1px solid $color-border;
    border-radius: $border-radius;
    font-size: $font-size-default;
    height: $input-height;
    padding: 0 1.5em;
    transition: border-color 300ms;
    width: 100%;
    font-weight: bold;

    &:focus,
    &:hover {
      border-color: $color-primary;
      outline: $color-primary;
    }

    &::placeholder {
      opacity: 0.4;
    }
  }

  &__label-container {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    & > * {
      font-size: $font-size-small;
    }

    label {
      font-weight: bold;
    }

    .input-container__error {
      color: $color-error;
    }
  }

  & + .input-container {
    margin-top: 2rem;
  }

  &--error {
    input {
      border: 2px solid $color-error;
    }

    label {
      color: $color-error;
    }
  }
}
</style>