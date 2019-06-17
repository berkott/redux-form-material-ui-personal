"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var isStateLess = exports.isStateLess = function isStateLess(Component) {
  return !Component.prototype.render;
};