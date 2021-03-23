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

var _layout = require('../../components/layout');

var _layout2 = _interopRequireDefault(_layout);

var _rentalcampaign = require('../../ethereum/rentalcampaign');

var _rentalcampaign2 = _interopRequireDefault(_rentalcampaign);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/adrian.asagba/Projects/parking-space-rental/pages/campaigns/show.js?entry';
// import ContributeForm from '../../components/contributeForm';


var CampaignShow = function (_Component) {
    (0, _inherits3.default)(CampaignShow, _Component);

    function CampaignShow() {
        (0, _classCallCheck3.default)(this, CampaignShow);

        return (0, _possibleConstructorReturn3.default)(this, (CampaignShow.__proto__ || (0, _getPrototypeOf2.default)(CampaignShow)).apply(this, arguments));
    }

    (0, _createClass3.default)(CampaignShow, [{
        key: 'renderCards',
        value: function renderCards() {
            var _props = this.props,
                manager = _props.manager,
                requestsCount = _props.requestsCount;

            var items = [{
                header: manager,
                description: 'The manager created this parking rental campaign and can create parking contracts',
                meta: 'Address of Manager',
                style: { overflowWrap: 'break-word' }
            },
            // {
            //     header: minimumContribution,
            //     description: 'You must contribute t least this much wei to become an approver',
            //     meta: 'Minimum Contribution (wei)',
            //     style: { overflowWrap: 'break-word' }
            // },
            {
                header: requestsCount,
                description: 'A request tries to agree contractual terms with the contract. Requests must be approved by the manger.',
                meta: 'Number of Requests',
                style: { overflowWrap: 'break-word' }
            }];

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                }
            }, 'Campaign Show'), _react2.default.createElement(_semanticUiReact.Grid, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                }
            }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                }
            })), _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 82
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 83
                }
            }, _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 84
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 85
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 86
                }
            }, 'View Requests')))))));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                var campaign, summary;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                campaign = (0, _rentalcampaign2.default)(props.query.address);
                                _context.next = 3;
                                return campaign.methods.getSummary().call();

                            case 3:
                                summary = _context.sent;
                                return _context.abrupt('return', {
                                    address: props.query.address,
                                    // minimumContribution: summary[0],
                                    // balance: summary[1],
                                    requestsCount: summary[0],
                                    // approversCount: summary[3],
                                    manager: summary[1]
                                });

                            case 5:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps(_x) {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return CampaignShow;
}(_react.Component);

exports.default = CampaignShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FyZCIsIkdyaWQiLCJCdXR0b24iLCJMYXlvdXQiLCJDYW1wYWlnbiIsIndlYjMiLCJMaW5rIiwiQ2FtcGFpZ25TaG93IiwicHJvcHMiLCJtYW5hZ2VyIiwicmVxdWVzdHNDb3VudCIsIml0ZW1zIiwiaGVhZGVyIiwiZGVzY3JpcHRpb24iLCJtZXRhIiwic3R5bGUiLCJvdmVyZmxvd1dyYXAiLCJyZW5kZXJDYXJkcyIsImFkZHJlc3MiLCJjYW1wYWlnbiIsInF1ZXJ5IiwibWV0aG9kcyIsImdldFN1bW1hcnkiLCJjYWxsIiwic3VtbWFyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU0sQUFBTTs7QUFDckIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQVU7Ozs7QUFFakIsQUFBUyxBQUFZOzs7OztBQURyQjs7O0lBR00sQTs7Ozs7Ozs7Ozs7c0NBZVk7eUJBSU4sS0FKTSxBQUlEO2dCQUpDLEFBRU4saUJBRk0sQUFFTjtnQkFGTSxBQUdOLHVCQUhNLEFBR04sQUFHSjs7Z0JBQU07d0JBQ0YsQUFDWSxBQUNSOzZCQUZKLEFBRWlCLEFBQ2I7c0JBSEosQUFHVSxBQUNOO3VCQUFPLEVBQUUsY0FMSCxBQUNWLEFBSVcsQUFBZ0IsQUFFM0I7QUFOQSxBQUNJLGFBRk07QUFRVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSTt3QkFESixBQUNZLEFBQ1I7NkJBRkosQUFFaUIsQUFDYjtzQkFISixBQUdVLEFBQ047dUJBQU8sRUFBRSxjQWpCakIsQUFBYyxBQWFWLEFBSVcsQUFBZ0IsQUFnQi9COzs7aURBQU8sQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjs4QkFBbkI7Z0NBQVAsQUFBTyxBQUNWO0FBRFU7YUFBQTs7OztpQ0FHRixBQUNMO21DQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLGFBQUEsa0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLGtDQUFBLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNLLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFvQjs4QkFBcEI7Z0NBQUEsQUFDSztBQURMO29CQURKLEFBQ0ksQUFDSyxBQUFLLEFBSVYsOENBQUEsQUFBQyxzQkFBRCxBQUFNLFVBQU8sT0FBYixBQUFvQjs4QkFBcEI7Z0NBUFIsQUFDSSxBQU1JLEFBS0o7QUFMSTtpQ0FLSCxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNLLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksQUFBQyw4QkFBSyx1QkFBcUIsS0FBQSxBQUFLLE1BQTFCLEFBQWdDLFVBQXRDOzhCQUFBO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxBQUFDLHlDQUFPLFNBQVI7OEJBQUE7Z0NBQUE7QUFBQTtlQW5CNUIsQUFDSSxBQUVJLEFBWUksQUFDSSxBQUNJLEFBQ0ksQUFDSSxBQVEvQjs7Ozs7aUgsQUFwRjRCOzs7OztpQ0FDbkI7QSwyQ0FBVyw4QkFBUyxNQUFBLEFBQU0sTUFBZixBLEFBQXFCOzt1Q0FDaEIsU0FBQSxBQUFTLFFBQVQsQUFBaUIsYUFBakIsQUFBOEIsQTs7aUNBQTlDO0E7OzZDQUdPLE1BQUEsQUFBTSxNQURaLEFBQ2tCLEFBQ3JCO0FBQ0E7QUFDQTttREFBZSxRQUpaLEFBSVksQUFBUSxBQUN2QjtBQUNBOzZDQUFTLFFBTk4sQUFNTSxBQUFRLEE7QUFOZCxBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTmUsQSxBQXdGM0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoic2hvdy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYWRyaWFuLmFzYWdiYS9Qcm9qZWN0cy9wYXJraW5nLXNwYWNlLXJlbnRhbCJ9