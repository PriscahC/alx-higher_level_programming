#!/usr/bin/node
exports.nbOccurences = function (list, searchElement) {
  let counter = 0;
  list.map(
    (x) => {
      if (x === searchElement) {
        counter += 1;
        return 1;
      } else {
        return 0;
      }
    }
  );
  return counter;
};
