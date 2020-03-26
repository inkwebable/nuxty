<template>
  <div class="some-grid std-padding">
    <header>
      <slot name="header">
        <h1>Header</h1>
      </slot>
    </header>
    <main>
      <slot name="body">
        <p>Some body thing</p>
      </slot>
    </main>
    <footer>
      <slot name="footer">
        <p>The footer</p>
      </slot>
    </footer>
  </div>
</template>

<style scoped>
.some-grid {
  display: grid;
  grid-template-rows: 100px auto 50px;
  height: 100vh;
}
</style>
