#!/usr/bin/node
exports.converter = function (base) {
  return function (bTen) {
    return bTen.toString(base);
  };
};
