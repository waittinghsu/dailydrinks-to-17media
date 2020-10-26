import _ from 'lodash';
const state = {
  orders: [],
};

const getters = {
  orders(state) {
    return state.orders;
  },
};

const mutations = {
  ADD_ORDERS: (state, { data }) => {
    state.orders.push(data);
  },
  SET_ORDERS: (state, data) => {
    state.orders = data;
  },
  DELETE_ORDER: (state, key) => {
    state.orders.splice(key, 1);
  },
  EDIT_ORDERS: (state, { data, key }) => {
    const temp = _.cloneDeep(state.orders);
    temp[key] = data;
    state.orders = temp;
    // state.orders[key] = data;
  },
};

const actions = {
  initOrders({ commit }, data) {
    return new Promise(resolve => {
      const apiData = [
        {
          name: '烏龍綠',
          price: 20,
          notes: 'Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.',
        },
        {
          name: '珍珠奶茶',
          price: 60,
          notes: 'Sliders reflect a range of values along a bar,',
        },
        {
          name: '生活泡沫綠茶',
          price: 10,
          notes: 'Small plates, salads',
        },
        { name: '老虎牙子', price: 55, notes: 'Small plates, salads' },
        { name: 'QOO', price: 24, notes: 'Small plates, salads' },
        { name: '芒果冰沙', price: 120, notes: 'Small plates, salads' },
        {
          name: '白玉熟成清露',
          price: 55,
          notes: 'Small plates, salads',
        },
        { name: '檸檬紅擦', price: 25, notes: 'Small plates, salads' },
      ];
      commit('SET_ORDERS', apiData);
      resolve();
    });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
