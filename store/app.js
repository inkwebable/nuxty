export const state = () => ({
    menuOpen: false,
});

export const mutations = {
    toggle (state, value = true) {
        state.menuOpen = value
    }
};