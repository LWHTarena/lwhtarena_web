"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var field_base_1 = require('./field-base');
var TextArea = (function (_super) {
    __extends(TextArea, _super);
    function TextArea(options) {
        if (options === void 0) { options = {}; }
        _super.call(this, options);
        this.controlType = 'textarea';
        this.rows = options['rows'] || 1;
    }
    return TextArea;
}(field_base_1.FieldBase));
exports.TextArea = TextArea;
//# sourceMappingURL=textarea.js.map