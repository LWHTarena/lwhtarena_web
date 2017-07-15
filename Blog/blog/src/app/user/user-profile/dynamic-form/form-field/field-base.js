"use strict";
var FieldBase = (function () {
    function FieldBase(options) {
        if (options === void 0) { options = {}; }
        this.value = options.value;
        this.key = options.key || '';
        this.label = options.label || '';
        this.controlType = options.controlType || '';
        this.placeholder = options.placeholder || '';
    }
    return FieldBase;
}());
exports.FieldBase = FieldBase;
//# sourceMappingURL=field-base.js.map