<template>
  <SomeGrid>
    <template v-slot:header>
      <h2>The Test page</h2>
    </template>
    <template v-slot:body>
      <section>
        <p>Welcome user {{ users[0].name }}</p>
      </section>
    </template>
  </SomeGrid>
</template>

<script>
import SomeGrid from '~/components/someGrid';

export default {
    layout: 'fhgrid',
    components: {
        SomeGrid,
    },
    async asyncData({ $axios }) {
        let { data } = await $axios.get('/api/users');
        return { users: data };
    },
    head() {
        return {
            title: 'Testing',
        };
    },
};
</script>
