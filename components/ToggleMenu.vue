<template>
    <div class="menu-toggle" :class="{ open: open}" @click="$emit('click')">
        <span :class="{ open: open}"></span>
        <span :class="{ open: open}"></span>
        <span :class="{ open: open}"></span>
    </div>
</template>

<script>
export default {
    name: 'ToggleMenu',
    props: {
        open: {
            required: false,
            type: Boolean,
            default: false,
        }
    },
}
</script>

<style lang="scss" scoped>
    /*@import "./resources/assets/sass/variables";*/
    .menu-toggle {

        span {
            display: block;
            width: 29px;
            height: 4px;
            margin-bottom: 4px;
            position: relative;

            background: #333333;
            border-radius: 5px;

            z-index: 1;

            transform-origin: 4px 0;

            transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0),
            background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0),
            opacity 0.55s ease;

            &:first-child {
                transform-origin: 0 0;
            }

            &:nth-last-child(2) {
                transform-origin: 0 100%;
            }

            &.open {
                /*
                 * Transform all the slices of hamburger
                 * into a crossmark.
                 */
                opacity: 1;
                transform: rotate(45deg) translate(3px, -8px);
                background: #232323;

                /*
                 * hide the middle one.
                 */
                &:nth-child(3) {
                    opacity: 0;
                    transform: rotate(0deg) scale(0.2, 0.2);
                }

                /*
                 * last one should go the other direction
                 */
                &:nth-child(2) {
                    transform: rotate(-45deg) translate(0, 11px);
                }
            }
        }

    }
</style>