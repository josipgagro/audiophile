<template>
  <section class="checkout" ref="checkout">
    <h1 class="checkout__title">Checkout</h1>
    <div class="checkout__container">
      <form @submit.prevent="submitForm">
        <BaseInput
          v-model="name"
          id="name"
          name="name"
          type="text"
          placeholder="John"
          label="Name"
          :errorMsg="
            v$.name.$errors.length > 0 ? v$.name.$errors[0].$message : ''
          "
        />
        <BaseInput
          v-model="lastName"
          id="last-name"
          name="last-name"
          type="text"
          placeholder="Doe"
          label="Last name"
          :errorMsg="
            v$.lastName.$errors.length > 0
              ? v$.lastName.$errors[0].$message
              : ''
          "
        />
        <BaseInput
          v-model="creditCardNumber"
          id="credit-card"
          name="credit-card"
          type="text"
          placeholder="1234567890123456"
          label="Credit card number"
          maxlength="16"
          :errorMsg="
            v$.creditCardNumber.$errors.length > 0
              ? v$.creditCardNumber.$errors[0].$message
              : ''
          "
        />
        <BaseInput
          v-model="cvv"
          id="cvv"
          name="cvv"
          type="text"
          placeholder="123"
          label="CVV"
          maxlength="3"
          :errorMsg="
            v$.cvv.$errors.length > 0 ? v$.cvv.$errors[0].$message : ''
          "
        />
        <BaseInput
          v-model="email"
          id="email"
          name="email"
          type="text"
          placeholder="test@email.com"
          label="Email"
          :errorMsg="
            v$.email.$errors.length > 0 ? v$.email.$errors[0].$message : ''
          "
        />

        <div class="checkout__radio-container">
          <BaseRadio
            label="Credit card 1"
            id="test"
            name="card"
            value="Credit card 1"
            checked
            @change="changeCardType"
          />
          <BaseRadio
            label="Credit card 2"
            id="test2"
            name="card"
            value="Credit card 2"
            @change="changeCardType"
          />
        </div>
      </form>
      <div class="checkout__summary-container">
        <CartSummary>
          <button
            type="button"
            class="c-btn c-btn--primary"
            @click="submitForm"
          >
            Confirm checkout
          </button>
        </CartSummary>
      </div>
    </div>
    <Modal
      title="Order confirmation"
      :isOpen="isModalOpen"
      @toggleModal="toggleModal"
    >
      <div class="modal-content">
        <div class="personal-info">
          <h5 class="personal-info__title">Personal information</h5>
          <ul>
            <li>
              Name: <strong>{{ name }} {{ lastName }}</strong>
            </li>
            <li>
              Email: <strong>{{ email }}</strong>
            </li>
            <li>
              Credit card: <strong>{{ creditCardType }}</strong>
            </li>
            <li>
              Credit card number: <strong>{{ creditCardNumber }}</strong>
            </li>
            <li>
              CVV: <strong>{{ cvv }}</strong>
            </li>
          </ul>
        </div>
        <CartSummary>
          <button
            type="button"
            class="c-btn c-btn--secondary--dark"
            @click="finishOrder"
          >
            Finish
          </button>
        </CartSummary>
      </div>
    </Modal>
  </section>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import {
  required,
  email,
  numeric,
  maxLength,
  minLength,
} from "@vuelidate/validators";

import CartSummary from "@/components/Cart/CartSummary.vue";
import BaseInput from "@/components/Form/BaseInput.vue";
import BaseRadio from "@/components/Form/BaseRadio.vue";
import Modal from "@/components/Blocks/Modal.vue";

export default {
  components: {
    CartSummary,
    BaseInput,
    BaseRadio,
    Modal,
  },
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  data() {
    return {
      name: "",
      lastName: "",
      email: "",
      creditCardNumber: "",
      cvv: "",
      isModalOpen: false,
      creditCardType: "Credit card 1",
    };
  },
  validations() {
    return {
      name: { required },
      lastName: { required },
      email: {
        required,
        email,
      },
      creditCardNumber: {
        required,
        numeric,
        minLength: minLength(16),
        maxLength: maxLength(16),
      },
      cvv: {
        required,
        numeric,
        minLength: minLength(3),
        maxLength: maxLength(3),
      },
    };
  },
  methods: {
    submitForm: async function () {
      const isValid = await this.v$.$validate();

      if (isValid) {
        this.toggleModal();
      } else {
        this.$nextTick(() => {
          document.querySelector(".input-container--error input").focus();
        });
      }
    },
    finishOrder: function () {
      this.$store.commit("removeCart");
      this.$router.push("/");
      document.querySelector("#app").classList.remove("opened");
    },
    toggleModal: function () {
      this.isModalOpen = !this.isModalOpen;
    },
    changeCardType: function (value) {
      this.creditCardType = value;
    },
  },
};
</script>

<style lang="scss" scoped>
.checkout {
  @include breakpoint(lg) {
    padding: 5rem 0 2rem;
  }

  &__title {
    margin-bottom: 0.5em;
  }

  &__summary-container {
    margin-top: 2rem;

    @include breakpoint(md) {
      flex: 1 1 50%;
      margin-top: 0;
    }
  }

  &__container {
    @include breakpoint(md) {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
    }

    form {
      @include breakpoint(md) {
        margin-right: 2rem;
        flex: 1 1 50%;
      }

      @include breakpoint(lg) {
        flex: 1 1 80%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;

        .input-container {
          margin: -1.5rem 0;
          padding: 1.5rem;
          margin-top: 0;
          flex: 1 1 50%;
        }

        .fullwidth {
          flex: 1 1 100%;
        }
      }
    }
  }

  &__radio-container {
    flex: 1 1 100%;
    margin: 2rem 0;

    .radio-container + .radio-container {
      margin-top: 2rem;
    }

    @include breakpoint(lg) {
      display: flex;
      align-items: center;
      padding: 1.5rem;

      .radio-container + .radio-container {
        margin-top: 0;
        margin-left: 2rem;
      }
    }
  }
}

.personal-info {
  margin-bottom: 1rem;

  &__title {
    margin-bottom: 1rem;
  }

  @include breakpoint(md) {
    margin-right: 2rem;
  }
}

.modal-content {
  :deep(.cart-list) {
    display: none;
  }

  @include breakpoint(lg) {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    & > div {
      flex: 1 1 50%;
    }
  }
}
</style>