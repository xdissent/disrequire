module.exports = function disrequire (file) {
  var id = require.resolve(file);
  if (require.cache[id] == null) return false;
  delete require.cache[id];
  return true;
};