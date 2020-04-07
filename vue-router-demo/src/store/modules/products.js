const state = {
    products: [
        { id: 1, name: "Wireless Mouse", price: 15000 },
        { id: 2, name: "Wireless Laptop", price: 1700000 },
        { id: 3, name: "Wireless Keyboard", price: 130000 }
    ],
    product: null
}

const mutations = {
    storeProduct(state, data) {
        state.products.push(data);
    },
    deleteProduct(state, id) {
        var index = state.products.findIndex(e => e.id == id);
        state.products.splice(index, 1);
    },
    setProduct(state, id) {
        var index = state.products.findIndex(e => e.id == id);
        state.product = Object.assign({}, state.products[index]);
    }
}

const actions = {
    addProduct({ commit }, product) {
        commit('storeProduct', product);
    },
    removeProduct({ commit }, id) {
        commit("deleteProduct", id);
    },
    getProduct({ commit }, id) {
        setTimeout(() => {
            commit("setProduct", id);
        }, 5000);
    }
}

const getters = {
    products(state) {
        return state.products;
    },
    product(state) {
        return state.product;
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}