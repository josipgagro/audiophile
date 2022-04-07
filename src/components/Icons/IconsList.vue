<template>
  <ul class="icon-list">
    <li>
      <a href="https://www.facebook.com/" target="_blank" title="Facebook"
        ><Facebook
      /></a>
    </li>
    <li>
      <a href="https://twitter.com" target="_blank" title="Twitter"
        ><Twitter
      /></a>
    </li>
    <li>
      <a href="https://instagram.com/" target="_blank" title="Instagram">
        <Instagram
      /></a>
    </li>
  </ul>
</template>

<script>
import Facebook from "@/components/Icons/Facebook.vue";
import Twitter from "@/components/Icons/Twitter.vue";
import Instagram from "@/components/Icons/Instagram.vue";

export default {
  components: {
    Instagram,
    Facebook,
    Twitter,
  },
};
</script>

<style lang="scss" scoped>
.icon-list {
  display: flex;
  align-items: center;
  justify-content: center;

  li + li {
    margin-left: 1rem;
  }

  li {
    cursor: pointer;
  }
}
</style>