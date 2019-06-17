'use strict';

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

var _expectJsx = require('expect-jsx');

var _expectJsx2 = _interopRequireDefault(_expectJsx);

var _Select = require('@material-ui/core/Select');

var _Select2 = _interopRequireDefault(_Select);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Select3 = require('../Select');

var _Select4 = _interopRequireDefault(_Select3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_expect2.default.extend(_expectJsx2.default);

describe('Select', function () {
  it('has a display name', function () {
    (0, _expect2.default)(_Select4.default.displayName).toBe('ReduxFormMaterialUIWithStyles');
  });

  it('renders a Select', function () {
    (0, _expect2.default)(new _Select4.default({
      input: {
        name: 'myText',
        value: 'Foo'
      }
    }).render()).toEqualJSX(_react2.default.createElement(_Select2.default, {
      name: 'myText',
      value: 'Foo',
      ref: function ref() {},
      onChange: function onChange() {},
      onBlur: function onBlur() {}
    }));
  });

  it('renders a Select with multiple', function () {
    (0, _expect2.default)(new _Select4.default({
      multiple: true,
      input: {
        name: 'myText',
        value: ['Foo', 'Bar']
      }
    }).render()).toEqualJSX(_react2.default.createElement(_Select2.default, {
      multiple: true,
      name: 'myText',
      value: ['Foo', 'Bar'],
      ref: function ref() {},
      onChange: function onChange() {},
      onBlur: function onBlur() {}
    }));
  });

  it('renders a Select with no error when not touched', function () {
    (0, _expect2.default)(new _Select4.default({
      input: {
        name: 'myText',
        value: 'Foo'
      },
      meta: {
        error: 'FooError'
      }
    }).render()).toEqualJSX(_react2.default.createElement(_Select2.default, {
      name: 'myText',
      value: 'Foo',
      ref: function ref() {},
      onChange: function onChange() {},
      onBlur: function onBlur() {}
    }));
  });

  it('renders a Select with an error', function () {
    (0, _expect2.default)(new _Select4.default({
      input: {
        name: 'myText',
        value: 'Foo'
      },
      meta: {
        error: 'FooError',
        touched: true
      }
    }).render()).toEqualJSX(_react2.default.createElement(_Select2.default, {
      name: 'myText',
      value: 'Foo',
      error: true
      //helperText="FooError"
      , ref: function ref() {},
      onChange: function onChange() {},
      onBlur: function onBlur() {}
    }));
  });

  it('renders a Select with no warning when not touched', function () {
    (0, _expect2.default)(new _Select4.default({
      input: {
        name: 'myText',
        value: 'Foo'
      },
      meta: {
        warning: 'FooWarning'
      }
    }).render()).toEqualJSX(_react2.default.createElement(_Select2.default, {
      name: 'myText',
      value: 'Foo',
      ref: function ref() {},
      onChange: function onChange() {},
      onBlur: function onBlur() {}
    }));
  });

  it('renders a Select with an warning', function () {
    (0, _expect2.default)(new _Select4.default({
      input: {
        name: 'myText',
        value: 'Foo'
      },
      meta: {
        warning: 'FooWarning',
        touched: true
      }
    }).render()).toEqualJSX(_react2.default.createElement(_Select2.default, {
      name: 'myText',
      value: 'Foo',
      error: true
      //helperText="FooWarning"
      , ref: function ref() {},
      onChange: function onChange() {},
      onBlur: function onBlur() {}
    }));
  });

  it('should ignore defaultValue', function () {
    (0, _expect2.default)(new _Select4.default({
      input: {
        name: 'myText',
        value: ''
      },
      defaultValue: '5',
      meta: {
        warning: 'FooWarning',
        touched: true
      }
    }).render()).toEqualJSX(_react2.default.createElement(_Select2.default, {
      name: 'myText',
      value: '',
      error: true
      //helperText="FooWarning"
      , ref: function ref() {},
      onChange: function onChange() {},
      onBlur: function onBlur() {}
    }));
  });
});