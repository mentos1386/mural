import storage from 'electron-json-storage';

import * as types from './mutation-types';

export const loadStorageState = ({ commit }) => {
  // Load subscriptions
  storage.get('subscriptions', (error, data) => {
    if (error) throw error;
    commit(types.SUBSCRIPTION_LOAD_STORAGE, data);
  });
};
