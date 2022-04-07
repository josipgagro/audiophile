<template>
  <header :class="[{ '--active': isActive }]">
    <div class="wrapper">
      <nav class="navigation">
        <ul class="navigation__list">
          <li class="navigation__list-item navigation__list-item--touch">
            <button @click="toggleMenu" title="Menu">
              <Hamburger />
            </button>
          </li>
          <li v-if="isActive" class="wrapper navigation__list-item--active">
            <CategoryNavigation />
          </li>
          <li class="navigation__list-item navigation__list-item--navigation">
            <router-link to="/" title="Audiophile">
              <img src="/assets/shared/desktop/logo.svg" alt="logo" />
            </router-link>
          </li>
          <li class="navigation__list-item navigation__list-item--mouse">
            <NavigationList />
          </li>
          <li class="navigation__list-item">
            <router-link to="/cart" title="Cart">
              <Cart />
              <span
                v-if="numberOfCartItems > 0"
                class="navigation__cart-indicator"
                >{{ numberOfCartItems }}</span
              >
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import CategoryNavigation from "@/components/Navigation/CategoryNavigation.vue";
import Hamburger from "@/components/Icons/Hamburger.vue";
import Cart from "@/components/Icons/Cart.vue";
import NavigationList from "@/components/Navigation/NavigationList.vue";

export default {
  components: {
    CategoryNavigation,
    Hamburger,
    Cart,
    NavigationList,
  },
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    toggleMenu: function () {
      this.isActive = !this.isActive;
    },
  },
  computed: {
    numberOfCartItems: function () {
      return this.$store.state.cart.length;
    },
  },
  watch: {
    $route: function () {
      if (this.isActive) {
        this.isActive = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  position: sticky;
  top: 0px;
  border-bottom: 1px solid rgba($color-white, 0.2);
  z-index: 10;
  background: $color-black;

  & > .wrapper {
    @include breakpoint(lg) {
      width: 75vw;
      margin: 0 auto;
      padding: 2rem 0 2.25rem;
    }
  }

  &.--active {
    background: $color-black;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: $color-black;
      opacity: 0.4;
      z-index: -1;
      min-height: 100vh;

      @include breakpoint(md) {
        width: calc(100% + ($gap-x-mid * 2));
        left: -($gap-x-mid);
      }
    }
  }
}
.navigation {
  &__list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 0;

    @include breakpoint(md) {
      justify-content: flex-start;
    }

    @include breakpoint(lg) {
      justify-content: space-between;
    }

    &-item {
      position: relative;

      a {
        display: block;
      }

      &--active {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: $color-white;
        z-index: 5;
        border-radius: 0 0 8px 8px;

        @include breakpoint(md) {
          padding-top: spacing(7);
          padding-bottom: spacing(8.5);
          width: calc(100% + ($gap-x-mid * 2));
          left: -($gap-x-mid);
        }
      }

      &--navigation {
        @include breakpoint(md) {
          margin: 0 auto 0 spacing(5.5);
        }

        @include breakpoint(lg) {
          margin: 0;
        }
      }

      &--touch {
        @include breakpoint(lg) {
          display: none;
        }
      }

      &--mouse {
        display: none;

        @include breakpoint(lg) {
          display: block;

          ul {
            display: flex;
            align-items: center;

            li + li {
              margin-left: spacing(8);
            }

            a {
              font-size: $font-size-small;
              text-transform: uppercase;
              color: $color-white;
              transition: color 300ms;

              &:hover {
                color: $color-primary-light;
              }
            }
          }
        }
      }
    }
  }

  &__cart-indicator {
    position: absolute;
    font-size: $font-size-small;
    top: -1rem;
    right: 0.5rem;
    z-index: 999;
    color: $color-primary;
    font-weight: bold;
  }

  button {
    background: none;
    border: none;
    color: $color-white;
    padding: 0;
    line-height: 0;
  }

  a > svg,
  button > svg {
    fill: $color-white;
    transition: fill 300ms;

    &:hover {
      fill: $color-primary;
    }
  }
}
</style>
