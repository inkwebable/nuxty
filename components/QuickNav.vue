<template>
    <nav class="quick-menu">
        <nuxt-link to="/">Home page</nuxt-link>
        <nuxt-link to="/about">About page</nuxt-link>
        <nuxt-link to="/test">Test page</nuxt-link>
      <slot></slot>
    </nav>
</template>

<style lang="scss" scoped>
    $color: #3860ff;

    .quick-menu {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      a {
        padding: 0.4rem;
        color: $color;
      }
    }
</style>
