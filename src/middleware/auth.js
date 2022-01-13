export default function(next, store) {
    if (!store.state.isLoggedIn) {
        next('/');
        this.$store.commit('setLoginModal', true)
    } else {
        next();
    }
}