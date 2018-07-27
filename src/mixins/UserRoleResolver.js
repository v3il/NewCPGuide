export default {
    data() {
        return {
            isAdmin: sessionStorage.getItem("ncpg-is-admin") === "1",
        }
    }
}
