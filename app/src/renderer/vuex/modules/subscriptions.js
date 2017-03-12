import * as types from '../mutation-types';
import find from 'lodash/find';
import pull from 'lodash/pull';
import uuidV1 from 'uuid/v1';

// initial state
const state = {
  active: [],
  inactive: [],
};

// mutations
const mutations = {
  [types.SUBSCRIPTION_ADD](state, { service, name, id }) {
    state.active.push({
      id,
      name,
      service,
      uuid: uuidV1(),
      added: new Date(),
    });
  },

  [types.SUBSCRIPTION_ACTIVE](state, { uuid }) {
    const subscription = find(state.inactive, { uuid });
    pull(state.inactive, subscription);
    state.active.push(subscription);
  },

  [types.SUBSCRIPTION_INACTIVE](state, { uuid }) {
    const subscription = find(state.active, { uuid });
    pull(state.active, subscription);
    state.inactive.push(subscription);
  },

  [types.SUBSCRIPTION_CLEAR](state) {
    state.active = [];
    state.inactive = [];
  },

  [types.SUBSCRIPTION_LOAD_STORAGE](state, { active, inactive }) {
    state.active = active;
    state.inactive = inactive;
  },
};

export default {
  state,
  mutations,
};
