"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var field_base_1 = require('./field-base');
var Image = (function (_super) {
    __extends(Image, _super);
    function Image(options) {
        if (options === void 0) { options = {}; }
        _super.call(this, options);
        this.controlType = 'image';
        this.src = options['src'] || '';
    }
    return Image;
}(field_base_1.FieldBase));
exports.Image = Image;
//# sourceMappingURL=image.js.map