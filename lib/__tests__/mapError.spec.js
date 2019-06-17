'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

var _mapError = require('../mapError');

var _mapError2 = _interopRequireDefault(_mapError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('mapError', function () {
  it('returns error if touched', function () {
    var input = {};
    var otherProps = {};
    var props = _extends({
      meta: {
        touched: true,
        error: 'FooError'
      },
      input: input
    }, otherProps);
    var expected = _extends({}, input, otherProps, {
      error: true,
      helperText: props.meta.error
    });

    var error = (0, _mapError2.default)(props);

    (0, _expect2.default)(error).toEqual(expected);
  });

  it('respects hasHelperText', function () {
    var input = {};
    var otherProps = {};
    var props = _extends({
      hasHelperText: false,
      meta: {
        touched: true,
        error: 'FooError'
      },
      input: input
    }, otherProps);
    var expected = _extends({}, input, otherProps, {
      error: true
    });

    var error = (0, _mapError2.default)(props);

    (0, _expect2.default)(error).toEqual(expected);
  });

  it('returns no error if not touched', function () {
    var input = {};
    var otherProps = {};
    var props = _extends({
      hasHelperText: true,
      meta: {
        touched: false,
        error: 'FooError'
      },
      input: input
    }, otherProps);
    var expected = _extends({}, input, otherProps);

    var error = (0, _mapError2.default)(props);

    (0, _expect2.default)(error).toEqual(expected);
  });
});