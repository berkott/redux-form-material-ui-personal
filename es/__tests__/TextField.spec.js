'use strict';

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

var _expectJsx = require('expect-jsx');

var _expectJsx2 = _interopRequireDefault(_expectJsx);

var _TextField = require('@material-ui/core/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TextField3 = require('../TextField');

var _TextField4 = _interopRequireDefault(_TextField3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_expect2.default.extend(_expectJsx2.default);

describe('TextField', function () {
  it('has a display name', function () {
    (0, _expect2.default)(_TextField4.default.displayName).toBe('ReduxFormMaterialUITextField');
  });

  it('renders a TextField', function () {
    (0, _expect2.default)(new _TextField4.default({
      input: {
        name: 'myText',
        value: 'Foo'
      }
    }).render()).toEqualJSX(_react2.default.createElement(_TextField2.default, { name: 'myText', value: 'Foo' }));
  });

  it('renders a TextField with no error when not touched', function () {
    (0, _expect2.default)(new _TextField4.default({
      input: {
        name: 'myText',
        value: 'Foo'
      },
      meta: {
        error: 'FooError'
      }
    }).render()).toEqualJSX(_react2.default.createElement(_TextField2.default, { name: 'myText', value: 'Foo' }));
  });

  it('renders a TextField with an error', function () {
    (0, _expect2.default)(new _TextField4.default({
      input: {
        name: 'myText',
        value: 'Foo'
      },
      meta: {
        error: 'FooError',
        touched: true
      }
    }).render()).toEqualJSX(_react2.default.createElement(_TextField2.default, { name: 'myText', value: 'Foo', error: true, helperText: 'FooError' }));
  });

  it('renders a TextField with no warning when not touched', function () {
    (0, _expect2.default)(new _TextField4.default({
      input: {
        name: 'myText',
        value: 'Foo'
      },
      meta: {
        warning: 'FooWarning'
      }
    }).render()).toEqualJSX(_react2.default.createElement(_TextField2.default, { name: 'myText', value: 'Foo' }));
  });

  it('renders a TextField with an warning', function () {
    (0, _expect2.default)(new _TextField4.default({
      input: {
        name: 'myText',
        value: 'Foo'
      },
      meta: {
        warning: 'FooWarning',
        touched: true
      }
    }).render()).toEqualJSX(_react2.default.createElement(_TextField2.default, { name: 'myText', value: 'Foo', error: true, helperText: 'FooWarning' }));
  });

  it('should ignore defaultValue', function () {
    (0, _expect2.default)(new _TextField4.default({
      input: {
        name: 'myText',
        value: ''
      },
      defaultValue: '5',
      meta: {
        warning: 'FooWarning',
        touched: true
      }
    }).render()).toEqualJSX(_react2.default.createElement(_TextField2.default, { name: 'myText', value: '', error: true, helperText: 'FooWarning' }));
  });
});