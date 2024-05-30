"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.throwAssertError = void 0;
var throwAssertError = function (variableName, typeName) {
    throw Error("Variable ".concat(variableName, " does not correspond to type ").concat(typeName));
};
exports.throwAssertError = throwAssertError;
