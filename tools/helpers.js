const fs = require('fs');
const path = require('path');
const _root = path.resolve(__dirname, '..');

// Convert all args into an Array representing the path location
// Root directory is added to the front of the path
function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [_root].concat(args));
}

function loadTasks(dirName) {
  fs.readdir(dirName, (err, files) => {
    if (err) {
      console.error(dirName + " could not be found.", err);
      process.exit(1);
    }
    files.forEach((file, i) => {
      require(dirName + file);
    })
  });
}

module.exports = {
  root: root,
  loadTasks: loadTasks
};
