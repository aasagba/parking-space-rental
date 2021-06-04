webpackHotUpdate(5,{

/***/ 918:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(86);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(87);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(41);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(42);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(480);

var _rentalcampaign = __webpack_require__(1213);

var _rentalcampaign2 = _interopRequireDefault(_rentalcampaign);

var _web = __webpack_require__(810);

var _web2 = _interopRequireDefault(_web);

var _routes = __webpack_require__(903);

var _layout = __webpack_require__(1488);

var _layout2 = _interopRequireDefault(_layout);

var _reactSemanticUiDatepickers = __webpack_require__(1490);

var _reactSemanticUiDatepickers2 = _interopRequireDefault(_reactSemanticUiDatepickers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/adrian.asagba/Projects/parking-space-rental/pages/campaigns/requests/agree.js?entry';

// import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';

var RequestAgree = function (_Component) {
    (0, _inherits3.default)(RequestAgree, _Component);

    function RequestAgree() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, RequestAgree);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestAgree.__proto__ || (0, _getPrototypeOf2.default)(RequestAgree)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            startDate: 0,
            endDate: 0,
            loading: false,
            errorMessage: ''
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var campaign, _this$state, startDate, endDate, index, accounts;

                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();

                                campaign = (0, _rentalcampaign2.default)(_this.props.address);
                                _this$state = _this.state, startDate = _this$state.startDate, endDate = _this$state.endDate;
                                index = _this.props.id;

                                console.log('index is: ' + index);

                                _this.setState({ loading: true, errorMessage: '' });
                                // console.log(`startDate: ${startDate}`);
                                // console.log(`endDate: ${endDate}`);
                                // console.log(`request: ${JSON.stringify(this.props.request)}`);
                                console.log('this.props.request.price: ' + _this.props.request.price);

                                _context.prev = 7;
                                _context.next = 10;
                                return _web2.default.eth.getAccounts();

                            case 10:
                                accounts = _context.sent;
                                _context.next = 13;
                                return campaign.methods.agreeRequest(parseInt(index, 10), parseInt(startDate, 10), parseInt(endDate, 10)).send({
                                    from: accounts[0],
                                    value: _web2.default.utils.toWei(_this.props.request.price, 'ether')
                                });

                            case 13:

                                _routes.Router.pushRoute('/campaigns/' + _this.props.address + '/requests');
                                _context.next = 19;
                                break;

                            case 16:
                                _context.prev = 16;
                                _context.t0 = _context['catch'](7);

                                _this.setState({ errorMessage: _context.t0.message });

                            case 19:

                                _this.setState({ loading: false });

                            case 20:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[7, 16]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    } // index, startdate, enddate


    (0, _createClass3.default)(RequestAgree, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(_layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            }, _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            }, 'Back')), _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                }
            }, 'Agree a Request'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                }
            }, 'Description'), this.props.request.description), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 80
                }
            }, 'Start Date'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.startDate,
                onChange: function onChange(event) {
                    return _this3.setState({ startDate: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 81
                }
            }), _react2.default.createElement(_reactSemanticUiDatepickers2.default, { onChange: function onChange(event, data) {
                    return _this3.setState({ startDate: data.value.toString() });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 86
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 90
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 91
                }
            }, 'End Date'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.endDate,
                onChange: function onChange(event) {
                    return _this3.setState({ endDate: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 92
                }
            }), _react2.default.createElement(_reactSemanticUiDatepickers2.default, { onChange: function onChange(event, data) {
                    return _this3.setState({ endDate: data.value.toString() });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 97
                }
            })), _react2.default.createElement(_semanticUiReact.Message, {
                error: true,
                header: 'Ooops!',
                content: this.state.errorMessage,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 101
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 107
                }
            }, 'Confirm!')));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
                var campaign, id, address, request;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                console.log('props.query.address: ' + props.query.address);
                                campaign = (0, _rentalcampaign2.default)('' + props.query.address.toString());
                                // console.log(`props: ${JSON.stringify(props)}`);

                                id = props.query.id;
                                address = props.query.address;
                                _context2.next = 6;
                                return campaign.methods.rscRequests(id.toString()).call();

                            case 6:
                                request = _context2.sent;

                                console.log('request description: ' + request.description);

                                return _context2.abrupt('return', { address: address, request: request, id: id });

                            case 9:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getInitialProps(_x2) {
                return _ref3.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return RequestAgree;
}(_react.Component);

exports.default = RequestAgree;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy9hZ3JlZS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkZvcm0iLCJCdXR0b24iLCJNZXNzYWdlIiwiSW5wdXQiLCJDYW1wYWlnbiIsIndlYjMiLCJMaW5rIiwiUm91dGVyIiwiTGF5b3V0IiwiU2VtYW50aWNEYXRlcGlja2VyIiwiUmVxdWVzdEFncmVlIiwic3RhdGUiLCJzdGFydERhdGUiLCJlbmREYXRlIiwibG9hZGluZyIsImVycm9yTWVzc2FnZSIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNhbXBhaWduIiwicHJvcHMiLCJhZGRyZXNzIiwiaW5kZXgiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsInJlcXVlc3QiLCJwcmljZSIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiYWdyZWVSZXF1ZXN0IiwicGFyc2VJbnQiLCJzZW5kIiwiZnJvbSIsInZhbHVlIiwidXRpbHMiLCJ0b1dlaSIsInB1c2hSb3V0ZSIsIm1lc3NhZ2UiLCJkZXNjcmlwdGlvbiIsInRhcmdldCIsImRhdGEiLCJ0b1N0cmluZyIsInF1ZXJ5IiwicnNjUmVxdWVzdHMiLCJjYWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTSxBQUFRLEFBQVM7O0FBQ2hDLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUyxBQUFNLEFBQWM7O0FBQzdCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPOzs7Ozs7OztBQUNQOztJLEFBRU07Ozs7Ozs7Ozs7Ozs7Ozs0TkFDRixBO3VCQUFRLEFBQ08sQUFDWDtxQkFGSSxBQUVLLEFBQ1Q7cUJBSEksQUFHSyxBQUNUOzBCQUpJLEFBSVUsQTtBQUpWLEFBQ0osaUIsQUFtQko7aUdBQVcsaUJBQUEsQUFBTSxP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QUE7Z0NBYlIsQUFNSSxBQU9JLEFBSUo7QUFKSTtpQ0FJSCxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSw2QkFBQSxBQUFDO3VCQUNVLEtBQUEsQUFBSyxNQURoQixBQUNzQixBQUNsQjswQkFBVSx5QkFBQTsyQkFDTixPQUFBLEFBQUssU0FBUyxFQUFFLFNBQVMsTUFBQSxBQUFNLE9BRHpCLEFBQ04sQUFBYyxBQUF3QjtBQUg5Qzs7OEJBQUE7Z0NBRkosQUFFSSxBQUtBO0FBTEE7QUFDSSxnQ0FJSixBQUFDLHNEQUFtQixVQUFVLGtCQUFBLEFBQUMsT0FBRCxBQUFRLE1BQVI7MkJBQ3RCLE9BQUEsQUFBSyxTQUFTLEVBQUUsU0FBUyxLQUFBLEFBQUssTUFEUixBQUN0QixBQUFjLEFBQVcsQUFBVztBQUQ1Qzs4QkFBQTtnQ0F4QlIsQUFpQkksQUFPSSxBQUlKO0FBSkk7aUNBSUosQUFBQzt1QkFBRCxBQUVJO3dCQUZKLEFBRVcsQUFDUDt5QkFBUyxLQUFBLEFBQUssTUFIbEIsQUFHd0I7OzhCQUh4QjtnQ0E1QkosQUE0QkksQUFNQTtBQU5BO0FBQ0ksZ0NBS0osQUFBQyx5Q0FBTyxTQUFSLE1BQWdCLFNBQVMsS0FBQSxBQUFLLE1BQTlCLEFBQW9DOzhCQUFwQztnQ0FBQTtBQUFBO2VBMUNaLEFBQ0ksQUFPSSxBQWtDSSxBQUlmOzs7OzttSEE3RjRCLEE7Ozs7O2lDQUN6Qjt3Q0FBQSxBQUFRLDhCQUE0QixNQUFBLEFBQU0sTUFBMUMsQUFBZ0QsQUFDMUM7QSwyQ0FBVyxtQ0FBWSxNQUFBLEFBQU0sTUFBTixBQUFZLFFBQVosQSxBQUFaLEFBQWdDLEFBQ2pEO0FBQ007O0EscUNBQUssTUFBQSxBQUFNLE1BQU0sQSxBQUNmO0EsMENBQVksTUFBTSxBLE0sQUFBbEI7O3VDQUVjLFNBQUEsQUFBUyxRQUFULEFBQWlCLFlBQVksR0FBN0IsQUFBNkIsQUFBRyxZQUFoQyxBQUE0QyxBOztpQ0FBNUQ7QSxvREFDTjs7d0NBQUEsQUFBUSw4QkFBNEIsUUFBcEMsQUFBNEM7O2tFQUVyQyxFQUFFLFNBQUYsU0FBVyxTQUFYLFNBQW9CLElBQXBCLEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFsQlksQSxBQXlHM0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoiYWdyZWUuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2Fkcmlhbi5hc2FnYmEvUHJvamVjdHMvcGFya2luZy1zcGFjZS1yZW50YWwifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/adrian.asagba/Projects/parking-space-rental/pages/campaigns/requests/agree.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/adrian.asagba/Projects/parking-space-rental/pages/campaigns/requests/agree.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/campaigns/requests/agree")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS42OGQ3OWE4YWI2NjFmM2E4ZWViMS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvY2FtcGFpZ25zL3JlcXVlc3RzL2FncmVlLmpzPzUzMWRiNDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZvcm0sIEJ1dHRvbiwgTWVzc2FnZSwgSW5wdXQgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5pbXBvcnQgQ2FtcGFpZ24gZnJvbSAnLi4vLi4vLi4vZXRoZXJldW0vcmVudGFsY2FtcGFpZ24nO1xuaW1wb3J0IHdlYjMgZnJvbSAnLi4vLi4vLi4vZXRoZXJldW0vd2ViMyc7XG5pbXBvcnQgeyBMaW5rLCBSb3V0ZXIgfSBmcm9tICcuLi8uLi8uLi9yb3V0ZXMnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2xheW91dCc7XG5pbXBvcnQgU2VtYW50aWNEYXRlcGlja2VyIGZyb20gJ3JlYWN0LXNlbWFudGljLXVpLWRhdGVwaWNrZXJzJztcbi8vIGltcG9ydCAncmVhY3Qtc2VtYW50aWMtdWktZGF0ZXBpY2tlcnMvZGlzdC9yZWFjdC1zZW1hbnRpYy11aS1kYXRlcGlja2Vycy5jc3MnO1xuXG5jbGFzcyBSZXF1ZXN0QWdyZWUgZXh0ZW5kcyBDb21wb25lbnQgeyAvLyBpbmRleCwgc3RhcnRkYXRlLCBlbmRkYXRlXG4gICAgc3RhdGUgPSB7XG4gICAgICAgIHN0YXJ0RGF0ZTogMCxcbiAgICAgICAgZW5kRGF0ZTogMCxcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgIGVycm9yTWVzc2FnZTogJydcbiAgICB9O1xuXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhwcm9wcykge1xuICAgICAgICBjb25zb2xlLmxvZyhgcHJvcHMucXVlcnkuYWRkcmVzczogJHtwcm9wcy5xdWVyeS5hZGRyZXNzfWApO1xuICAgICAgICBjb25zdCBjYW1wYWlnbiA9IENhbXBhaWduKGAke3Byb3BzLnF1ZXJ5LmFkZHJlc3MudG9TdHJpbmcoKX1gKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYHByb3BzOiAke0pTT04uc3RyaW5naWZ5KHByb3BzKX1gKTtcbiAgICAgICAgY29uc3QgaWQgPSBwcm9wcy5xdWVyeS5pZDtcbiAgICAgICAgY29uc3QgeyBhZGRyZXNzIH0gPSBwcm9wcy5xdWVyeTtcblxuICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5yc2NSZXF1ZXN0cyhpZC50b1N0cmluZygpKS5jYWxsKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGByZXF1ZXN0IGRlc2NyaXB0aW9uOiAke3JlcXVlc3QuZGVzY3JpcHRpb259YClcblxuICAgICAgICByZXR1cm4geyBhZGRyZXNzLCByZXF1ZXN0LCBpZCB9O1xuICAgIH1cblxuICAgIG9uU3VibWl0ID0gYXN5bmMgZXZlbnQgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0IGNhbXBhaWduID0gQ2FtcGFpZ24odGhpcy5wcm9wcy5hZGRyZXNzKTtcbiAgICAgICAgY29uc3QgeyBzdGFydERhdGUsIGVuZERhdGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5wcm9wcy5pZDtcbiAgICAgICAgY29uc29sZS5sb2coYGluZGV4IGlzOiAke2luZGV4fWApO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlLCBlcnJvck1lc3NhZ2U6ICcnIH0pO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhgc3RhcnREYXRlOiAke3N0YXJ0RGF0ZX1gKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYGVuZERhdGU6ICR7ZW5kRGF0ZX1gKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYHJlcXVlc3Q6ICR7SlNPTi5zdHJpbmdpZnkodGhpcy5wcm9wcy5yZXF1ZXN0KX1gKTtcbiAgICAgICAgY29uc29sZS5sb2coYHRoaXMucHJvcHMucmVxdWVzdC5wcmljZTogJHt0aGlzLnByb3BzLnJlcXVlc3QucHJpY2V9YCk7XG4gICAgICAgIFxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuICAgICAgICAgICAgYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5hZ3JlZVJlcXVlc3QoXG4gICAgICAgICAgICAgICAgcGFyc2VJbnQoaW5kZXgsIDEwKSwgXG4gICAgICAgICAgICAgICAgcGFyc2VJbnQoc3RhcnREYXRlLCAxMCksXG4gICAgICAgICAgICAgICAgcGFyc2VJbnQoZW5kRGF0ZSwgMTApXG4gICAgICAgICAgICApLnNlbmQoeyBcbiAgICAgICAgICAgICAgICBmcm9tOiBhY2NvdW50c1swXSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogd2ViMy51dGlscy50b1dlaSh0aGlzLnByb3BzLnJlcXVlc3QucHJpY2UsICdldGhlcicpXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgUm91dGVyLnB1c2hSb3V0ZShgL2NhbXBhaWducy8ke3RoaXMucHJvcHMuYWRkcmVzc30vcmVxdWVzdHNgKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JNZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcbiAgICAgICAgfSBcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyICgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICAgICAgPExpbmsgcm91dGU9e2AvY2FtcGFpZ25zLyR7dGhpcy5wcm9wcy5hZGRyZXNzfS9yZXF1ZXN0c2B9PlxuICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgIEJhY2tcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz4gXG4gICAgICAgICAgICAgICAgPGgzPkFncmVlIGEgUmVxdWVzdDwvaDM+XG4gICAgICAgICAgICAgICAgPEZvcm0gb25TdWJtaXQ9e3RoaXMub25TdWJtaXR9IGVycm9yPXshIXRoaXMuc3RhdGUuZXJyb3JNZXNzYWdlfT5cbiAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5EZXNjcmlwdGlvbjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5yZXF1ZXN0LmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uRmllbGQ+XG5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+U3RhcnQgRGF0ZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc3RhcnREYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN0YXJ0RGF0ZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZW1hbnRpY0RhdGVwaWNrZXIgb25DaGFuZ2U9eyhldmVudCwgZGF0YSkgPT4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzdGFydERhdGU6IGRhdGEudmFsdWUudG9TdHJpbmcoKSB9KX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxuXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkVuZCBEYXRlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5lbmREYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVuZERhdGU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VtYW50aWNEYXRlcGlja2VyIG9uQ2hhbmdlPXsoZXZlbnQsIGRhdGEpID0+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZW5kRGF0ZTogZGF0YS52YWx1ZS50b1N0cmluZygpIH0pfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uRmllbGQ+XG5cbiAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2UgXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvciBcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcj1cIk9vb3BzIVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXt0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHByaW1hcnkgbG9hZGluZz17dGhpcy5zdGF0ZS5sb2FkaW5nfT5Db25maXJtITwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICApO1xuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBSZXF1ZXN0QWdyZWU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvY2FtcGFpZ25zL3JlcXVlc3RzL2FncmVlLmpzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQTtBQUNBO0FBQ0E7O0FBSEE7QUFtQkE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBSkE7QUFJQTtBQUpBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBYkE7QUFBQTtBQWVBO0FBQ0E7QUFEQTtBQWZBO0FBQUE7QUFnQkE7QUFLQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQXpCQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBMkJBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUEvQkE7QUFBQTtBQUFBOztBQUFBO0FBQUE7Ozs7Ozs7QUFyQkE7QUFDQTtBQUNBOzs7QUFvREE7QUFDQTtBQUNBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUlBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBSEE7O0FBQUE7QUFLQTtBQUxBO0FBQ0E7QUFLQTtBQURBO0FBQUE7QUFJQTtBQUpBO0FBSUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTs7QUFBQTtBQUtBO0FBTEE7QUFDQTtBQUtBO0FBREE7QUFBQTtBQUlBO0FBSkE7QUFJQTtBQUVBO0FBQ0E7QUFBQTs7QUFIQTtBQU1BO0FBTkE7QUFDQTtBQUtBO0FBQUE7QUFBQTtBQUlBOzs7Ozs7Ozs7O0FBNUZBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBOztBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzRkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==