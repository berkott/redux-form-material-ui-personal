'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _Select = require('@material-ui/core/Select');

var _Select2 = _interopRequireDefault(_Select);

var _createComponent = require('./createComponent');

var _createComponent2 = _interopRequireDefault(_createComponent);

var _mapError = require('./mapError');

var _mapError2 = _interopRequireDefault(_mapError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

exports.default = (0, _createComponent2.default)(_Select2.default, function (_ref) {
  var _ref$input = _ref.input,
      _onChange = _ref$input.onChange,
      value = _ref$input.value,
      _onBlur = _ref$input.onBlur,
      inputProps = _objectWithoutProperties(_ref$input, ['onChange', 'value', 'onBlur']),
      onChangeFromField = _ref.onChange,
      defaultValue = _ref.defaultValue,
      props = _objectWithoutProperties(_ref, ['input', 'onChange', 'defaultValue']);

  return _extends({}, (0, _mapError2.default)(_extends({}, props, { hasHelperText: false })), inputProps, {
    value: value,
    onChange: function onChange(event) {
      _onChange(event.target.value);
      if (onChangeFromField) {
        onChangeFromField(event.target.value);
      }
    },
    onBlur: function onBlur() {
      return _onBlur(value);
    }
  });
});