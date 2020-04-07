const state = {
    products: [
        { id: 1, name: "Wireless Mouse", price: 15000 },
        { id: 2, name: "Laptop", price: 700000 },
        { id: 3, name: "Keyboard", price: 30000 }
    ],
}

const mutations = {
    storeProduct(state, data) {
        state.products.push(data);
    },
    deleteProduct(state, id) {
        var index = state.products.findIndex(e => e.id == id);
        state.products.splice(index, 1);
    }
}

const actions = {
    addProduct({ commit }, product) {
        commit('storeProduct', product);
    },
    removeProduct({ commit }, id) {
        commit("deleteProduct", id);
    }
}

const getters = {
    products(state) {
        return state.products;
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}