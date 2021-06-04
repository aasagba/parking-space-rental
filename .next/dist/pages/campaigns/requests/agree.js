'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _rentalcampaign = require('../../../ethereum/rentalcampaign');

var _rentalcampaign2 = _interopRequireDefault(_rentalcampaign);

var _web = require('../../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../../routes');

var _layout = require('../../../components/layout');

var _layout2 = _interopRequireDefault(_layout);

var _reactSemanticUiDatepickers = require('react-semantic-ui-datepickers');

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