"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var index_1 = require("../index");
var Weapon = /** @class */ (function (_super) {
    __extends(Weapon, _super);
    function Weapon(name, quan, dam) {
        var _this = _super.call(this, name, quan) || this;
        _this.damage = dam;
        return _this;
    }
    return Weapon;
}(index_1["default"]));
exports["default"] = Weapon;
