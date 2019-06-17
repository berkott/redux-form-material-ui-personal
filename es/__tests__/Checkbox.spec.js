'use strict';

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

var _expectJsx = require('expect-jsx');

var _expectJsx2 = _interopRequireDefault(_expectJsx);

var _lodash = require('lodash.noop');

var _lodash2 = _interopRequireDefault(_lodash);

var _Checkbox = require('@material-ui/core/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Checkbox3 = require('../Checkbox');

var _Checkbox4 = _interopRequireDefault(_Checkbox3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_expect2.default.extend(_expectJsx2.default);

describe('Checkbox', function () {
  it('has a display name', function () {
    (0, _expect2.default)(_Checkbox4.default.displayName).toBe('ReduxFormMaterialUIWithStyles');
  });

  it('renders an unchecked Checkbox', function () {
    (0, _expect2.default)(new _Checkbox4.default({
      input: {
        name: 'myCheckbox',
        onChange: _lodash2.default
      }
    }).render()).toEqualJSX(_react2.default.createElement(_Checkbox2.default, {
      name: 'myCheckbox',
      checked: false,
      onChange: _lodash2.default,
      ref: function ref() {}
    }));
  });

  it('renders a checked Checkbox', function () {
    (0, _expect2.default)(new _Checkbox4.default({
      input: {
        name: 'myCheckbox',
        onChange: _lodash2.default,
        value: true
      }
    }).render()).toEqualJSX(_react2.default.createElement(_Checkbox2.default, {
      name: 'myCheckbox',
      checked: true,
      onChange: _lodash2.default,
      ref: function ref() {}
    }));
  });

  it('should ignore defaultChecked', function () {
    (0, _expect2.default)(new _Checkbox4.default({
      input: {
        name: 'myCheckbox',
        onChange: _lodash2.default
      },
      defaultChecked: true
    }).render()).toEqualJSX(_react2.default.createElement(_Checkbox2.default, { name: 'myCheckbox', onChange: _lodash2.default, ref: function ref() {} }));
  });
});