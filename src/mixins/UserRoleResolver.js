export default {
    data() {
        return {
            isAdmin: false
        }
    },

    created() {
        this.isAdmin = 1 || window.location.hash === "#admin=1";
    }
}
