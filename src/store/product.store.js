import axios from "axios";

const state = () => ({
  product: {},
});

const mutations = {
  _product(state, payload) {
    state.product = payload;
  },
};

const actions = {
  fetchProduct,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};

function fetchProduct({ commit, state }) {
  return new Promise(async (resolve, reject) => {
    try {
      let response = await axios.get("https://dummyjson.com/products");
      commit("_product", response.data.products);
      resolve(response.data);
    } catch (e) {
      console.error(e);
      reject(e);
    }
  });
}
