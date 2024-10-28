"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Computer = void 0;
var Computer = /** @class */ (function () {
    function Computer() {
    }
    Object.defineProperty(Computer.prototype, Symbol.toStringTag, {
        get: function () {
            return "Computer";
        },
        enumerable: false,
        configurable: true
    });
    Computer.prototype.toString = function () {
        return "Amazing Compute";
    };
    return Computer;
}());
exports.Computer = Computer;
