"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var mapError = function mapError(_ref) {
  var _ref$hasHelperText = _ref.hasHelperText,
      hasHelperText = _ref$hasHelperText === undefined ? true : _ref$hasHelperText,
      _ref$meta = _ref.meta;
  _ref$meta = _ref$meta === undefined ? {} : _ref$meta;

  var touched = _ref$meta.touched,
      error = _ref$meta.error,
      warning = _ref$meta.warning,
      input = _ref.input,
      props = _objectWithoutProperties(_ref, ["hasHelperText", "meta", "input"]);

  var errorProps = touched && (error || warning) ? _extends({}, props, input, {
    error: Boolean(error || warning)
  }) : _extends({}, input, props);

  if (touched && hasHelperText && (error || warning)) {
    errorProps.helperText = error || warning;
  }

  return errorProps;
};

exports.default = mapError;