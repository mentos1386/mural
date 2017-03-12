import forEach from 'lodash/forEach';

const files = require.context('.', false, /\.js$/);
const modules = {};

forEach(files, (val, key) => {
  if (key === './index.js' || !val) return;
  modules[key.replace(/(\.\/|\.js)/g, '')] = val.default;
});

export default modules;
