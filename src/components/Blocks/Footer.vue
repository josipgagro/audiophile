<template>
  <footer class="wrapper promo-wrapper footer">
    <div class="container">
      <nav>
        <ul class="footer__list">
          <li class="footer__list-item footer__list-item">
            <router-link to="/" title="Audiophile">
              <img src="/assets/shared/desktop/logo.svg" alt="logo" />
            </router-link>
          </li>
          <li class="footer__list-item footer__list-item--sublist">
            <NavigationList />
          </li>
        </ul>
      </nav>
      <div class="footer__main">
        <p class="footer__description">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <IconsList class="footer__icon-list" />
      </div>
      <div class="footer__social">
        <p class="footer__copyright">
          <strong>Copyright 2021. All Rights Reserved</strong>
        </p>
        <IconsList class="footer__icon-list" />
      </div>
    </div>
  </footer>
</template>

<script>
import IconsList from "@/components/Icons/IconsList.vue";
import NavigationList from "@/components/Navigation/NavigationList.vue";

export default {
  components: {
    IconsList,
    NavigationList,
  },
};
</script>

<style lang="scss" scoped>
.footer {
  background: $color-secondary;
  text-align: center;

  @include breakpoint(md) {
    text-align: left;
  }

  &__list {
    display: flex;
    flex-direction: column;
    align-items: center;

    @include breakpoint(md) {
      flex-direction: row;
      flex-wrap: wrap;
    }

    @include breakpoint(lg) {
      justify-content: space-between;
      flex-wrap: nowrap;
    }

    &-item {
      transition: color 300ms;
      display: block;

      & + li {
        margin-top: 3em;

        @include breakpoint(md) {
          margin-top: 0;
        }
      }

      &--logo {
        margin-right: auto;
      }

      &--sublist {
        @include breakpoint(md) {
          flex: 1 1 100%;
        }

        @include breakpoint(lg) {
          flex: initial;
        }
      }
    }
  }

  a,
  :deep(a > svg) {
    fill: $color-white;
    transition: color 300ms;

    &:hover {
      fill: $color-primary;
    }
  }

  &__main {
    display: block;

    @include breakpoint(lg) {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;

      & > * {
        flex: 1 1 50%;
      }
    }

    .footer__icon-list {
      display: none;

      @include breakpoint(lg) {
        display: flex;
        justify-content: flex-end;
      }
    }
  }

  &__description,
  &__copyright {
    color: $color-white;
    opacity: 0.5;
  }

  &__description {
    margin-top: 3em;

    @include breakpoint(md) {
      margin-top: 2em;
    }
  }

  &__icon-list {
    margin-top: 3em;

    @include breakpoint(md) {
      margin-top: 0;
    }
  }

  &__social {
    margin-top: 3rem;

    @include breakpoint(md) {
      margin-top: 5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    @include breakpoint(lg) {
      .footer__icon-list {
        display: none;
      }
    }
  }
}
</style>