<template>
    <SomeGrid>
      <template v-slot:header>
        <QuickNav />
      </template>
      <template v-slot:body>
        <p>This is the content from the slot.</p>
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