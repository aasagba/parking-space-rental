'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _RentalCampaign = require('./build/RentalCampaign.json');

var _RentalCampaign2 = _interopRequireDefault(_RentalCampaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (address) {
    return new _web2.default.eth.Contract(JSON.parse(_RentalCampaign2.default.interface), address);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3JlbnRhbGNhbXBhaWduLmpzIl0sIm5hbWVzIjpbIndlYjMiLCJDYW1wYWlnbiIsImFkZHJlc3MiLCJldGgiLCJDb250cmFjdCIsIkpTT04iLCJwYXJzZSIsImludGVyZmFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQLEFBQWlCLEFBQWpCOzs7O0FBQ0EsQUFBTyxBQUFQLEFBQXFCLEFBQXJCLEFBRUE7Ozs7OztrQkFBZSxVQUFDLEFBQUQsU0FBYSxBQUN4QjtXQUFPLElBQUksY0FBSyxBQUFMLElBQVMsQUFBYixTQUNILEtBQUssQUFBTCxNQUFXLHlCQUFTLEFBQXBCLEFBREcsWUFFSCxBQUZHLEFBQVAsQUFJSDtBQUxEIiwiZmlsZSI6InJlbnRhbGNhbXBhaWduLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hZHJpYW4uYXNhZ2JhL1Byb2plY3RzL3Bhcmtpbmctc3BhY2UtcmVudGFsIn0=