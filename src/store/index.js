import { createStore } from "vuex";

export default createStore({
  state: {
    products: [],
    cart: JSON.parse(window.localStorage.getItem("cart")) || [],
  },
  getters: {
    headphones: function (state) {
      return state.products.filter(
        (product) => product.category === "headphones"
      );
    },
    speakers: function (state) {
      return state.products.filter(
        (product) => product.category === "speakers"
      );
    },
    earphones: function (state) {
      return state.products.filter(
        (product) => product.category === "earphones"
      );
    },
    initialPrice: function (state) {
      return state.cart.reduce((acc, item) => {
        return acc + item.quantity * item.price;
      }, 0);
    },
    vatPrice: function (_, getters) {
      return (Number(getters.initialPrice) * 0.2).toFixed(2);
    },
    totalPrice: function (_, getters) {
      return Number(
        Number(getters.initialPrice) + Number(getters.vatPrice) + 50
      ).toFixed(2);
    },
  },
  mutations: {
    getProducts: function (state, payload) {
      state.products = payload;
    },
    addToCart: function (state, payload) {
      const theItem = state.cart.find((item) => item.id == payload.item.id);

      if (theItem) {
        state.cart = state.cart.map((item) => {
          if (item.id == payload.item.id) {
            item.quantity += payload.quantity;
          }

          return item;
        });
      } else {
        state.cart = [
          ...state.cart,
          { ...payload.item, quantity: payload.quantity },
        ];
      }

      window.localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    updateCartQuantity: function (state, payload) {
      state.cart = state.cart.map((item) => {
        if (item.id == payload.item.id) {
          item.quantity = payload.quantity;
        }

        return item;
      });

      window.localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeCartItem: function (state, payload) {
      state.cart = state.cart.filter((item) => item.id != payload.item.id);
      window.localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeCart: function (state) {
      state.cart = [];
      window.localStorage.removeItem("cart");
    },
  },
  actions: {
    getProducts: function (context) {
      fetch("/data.json")
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          context.commit("getProducts", data);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
});
