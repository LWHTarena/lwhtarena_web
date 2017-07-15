var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { AppConfigService } from './app-config-service';
import { TranslationIndex } from '../../generated_module/translations/index';
// 提供文本翻译的服务
var AppTranslationService = (function () {
    function AppTranslationService(appConfigService) {
        var _this = this;
        this.appConfigService = appConfigService;
        var language = appConfigService.getLanguage();
        TranslationIndex.translationModules.forEach(function (translation) {
            if (translation.language === language) {
                _this.translation = translation;
            }
        });
    }
    // 翻译指定文本，翻译不存在时返回原文本
    AppTranslationService.prototype.translate = function (text) {
        if (!this.translation || !text) {
            return text;
        }
        return this.translation.translations[text] || text;
    };
    return AppTranslationService;
}());
AppTranslationService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [AppConfigService])
], AppTranslationService);
export { AppTranslationService };
//# sourceMappingURL=app-translation-service.js.map