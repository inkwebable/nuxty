<template>
    <div class="slide-menu" :class="[cObject]" @click="$emit('click')">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'Menu',
    props: {
        open: {
            required: true,
            type: Boolean,
            default: false,
        }
    },
    data() {
        return {
            showAnim: false,
        }
    },
    computed: {
        cObject() {
            return {
                open: this.open,
                closed: this.showAnim && !this.open
            }
        }
    },
    mounted() {
        this.showAnim = true;
    }
}
</script>

<style lang=scss>
    .slide-menu {
        position: fixed;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        max-width: 20rem;
        z-index: 999;
        background: #f8f9fa;
        display: block;
        opacity: 0;
        padding: 1rem;
        transform: translateX(100%);

        &.open {
            animation: slide-in 0.5s forwards;
        }

        &.closed {
            animation: slide-out 0.5s forwards;
        }

        .quick-menu {
            display: flex;
            flex-wrap: wrap;

            a {
                width: 100%;
                text-decoration: none;
            }
        }
    }

    @keyframes slide-in {
        100% {
            opacity: 1;
            transform: translateX(0%);
        }
    }

    @keyframes slide-out {
        0% {
            opacity: 1;
            transform: translateX(0%);
        }
        100% {
            opacity: 0;
            transform: translateX(100%);
        }
    }
</style>