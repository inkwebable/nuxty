<template>
    <SomeGrid>
      <template v-slot:header>
        <h2>The About page</h2>
      </template>
      <template v-slot:body>
        <p>This is the content from the body slot.</p>
      </template>
    </SomeGrid>
</template>

<script>
import QuickNav from '~/components/QuickNav';
import SomeGrid from '~/components/SomeGrid';

export default {
    layout: 'fhgrid',
    components: {
        SomeGrid,
        QuickNav,
    }
}
</script>
