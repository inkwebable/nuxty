<template>
    <div>
        <p>Testing user {{ users[0].name }}</p>
    </div>
</template>

<script>

export default {
    layout: 'fhgrid',
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