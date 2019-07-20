export const state = () => ({
    menuOpen: null,
});

export const mutations = {
    toggle (state, value = true) {
        state.menuOpen = value
    }
};