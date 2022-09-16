import axios from "axios";

const state = () => ({
  customer: {},
});

const mutations = {
  _customer(state, payload) {
    state.customer = payload;
  },
};

const actions = {
  fetchCustomer,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};

function fetchCustomer({ commit, state }) {
  return new Promise(async (resolve, reject) => {
    try {
      let response = await axios.get("https://dummyjson.com/users");
      commit("_customer", response.data.users);
      resolve(response.data);
    } catch (e) {
      console.error(e);
      reject(e);
    }
  });
}
