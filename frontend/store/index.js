export const getters = {
    isAuthenticated(state) {
        return state.auth.loggedIn
    },

    loggedInUser(state) {
        return state.auth.user
    },
}

export const actions = {
    async getDataWisata() {
        let res = await this.$axios.$get(`${this.$axios.defaults.baseURL}/admin/wisata/`)
        return res.data
    },
    async tambahDataWisata(context, data) {
        let res = await this.$axios.$post(`${this.$axios.defaults.baseURL}/admin/wisata/`, data)
        return res.data
    }
}