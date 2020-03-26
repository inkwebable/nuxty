<template>
    <div class="layout-grid">
        <header class="layout-grid-header">
            <!-- Slot is pointless when this comp is used as a layout comp -->
            <div class="header-container">
                <div class="header-left-container">
                    <div class="logo-container">
                        <picture>
                            <source srcset="~/assets/images/free_hat.png" media="(min-width: 340px)" />
                            <img src="~/assets/images/free_hat.png" />
                        </picture>
                    </div>
                    <div class="site-title-container">
                        <h1>Site title</h1>
                    </div>
                </div>
                <div class="header-right-container">
                    <QuickNav>
                      <div class="ml-2">
                        <ToggleMenu :open="menuOpen" @click="toggle(!menuOpen)" />
                      </div>
                    </QuickNav>

                    <!-- Burger menu -->
                    <Menu :open="menuOpen" @click="toggle(false)">
                        <h1>Menu</h1>
                        <QuickNav />
                    </Menu>
                </div>
            </div>
        </header>
        <main class="layout-grid-content">
            <nuxt />
        </main>
        <footer class="layout-grid-footer std-padding">
            <p>The footer</p>
        </footer>
    </div>
</template>

<script>
import Logo from '~/components/Logo.vue';
import QuickNav from '~/components/QuickNav.vue';
import Menu from '~/components/Menu.vue';
import ToggleMenu from '../components/ToggleMenu';

import { mapMutations } from 'vuex';

export default {
    components: {
        ToggleMenu,
        Logo,
        QuickNav,
        Menu
    },
    computed: {
        menuOpen() {
            return this.$store.state.app.menuOpen;
        }
    },
    methods: {
        ...mapMutations({
            toggle: 'app/toggle'
        })
    }
};
</script>

<style lang="scss">
    $page-padding-std: 15px;


    html,
    body,
    #__nuxt,
    #__layout {
        height: 100vh;
    }

    .layout-grid {
        display: grid;
        grid-gap: 20px;
        grid-template-columns: auto;
        grid-template-rows: 100px auto 50px;
        grid-template-areas: "header" "content" "footer";
        height: 100vh;
        width: 100%;
        background-color: #ffffff;

        &-header {
            grid-area: header;
            width: 100%;
            background-color: #f7f7f7;
        }

        &-content {
            grid-area: content;
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
        }

        &-footer {
            grid-area: footer;
            width: 100%;
        }

        .header-container {
            display: flex;
            max-height: 100px;
            max-width: 1200px;
            margin: 0 auto;

            .header-left-container {
                display: flex;
                max-width: 300px;
                padding: $page-padding-std;
            }

            .header-right-container {
                display: flex;
                flex-grow: 1;
                justify-content: flex-end;
                align-items: center;
                padding: $page-padding-std;
            }
        }

        .site-title-container {
        }

        .logo-container {
            img {
                margin-right: 20px;
                max-width: 50px;
                max-height: 70px;
            }
        }
    }

    // .main-header {
    //   grid-area: header;
    // }
    // .content {
    //   grid-area: content;
    // }
    .main-nav {
        grid-area: nav;
    }

    .side {
        grid-area: sidebar;
    }

    .ad {
        grid-area: ad;
    }

    // .main-footer {
    //   grid-area: footer;
    // }
</style>
