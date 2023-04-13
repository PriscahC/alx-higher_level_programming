#!/usr/bin/node
exports.addMeMaybe = function addMeMaybe (value, theFunction) {
  return theFunction(++value);
};
