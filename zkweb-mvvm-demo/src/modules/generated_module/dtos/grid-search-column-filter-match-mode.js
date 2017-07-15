/** 列过滤模式 */
/** 列过滤模式 */ export var GridSearchColumnFilterMatchMode;
(function (GridSearchColumnFilterMatchMode) {
    /** 默认(包含过滤内容) */
    GridSearchColumnFilterMatchMode[GridSearchColumnFilterMatchMode["Default"] = 0] = "Default";
    /** 以过滤内容开始 */
    GridSearchColumnFilterMatchMode[GridSearchColumnFilterMatchMode["StartsWith"] = 1] = "StartsWith";
    /** 以过滤内容结束 */
    GridSearchColumnFilterMatchMode[GridSearchColumnFilterMatchMode["EndsWith"] = 2] = "EndsWith";
    /** 等于过滤内容 */
    GridSearchColumnFilterMatchMode[GridSearchColumnFilterMatchMode["Equals"] = 3] = "Equals";
    /** 等于过滤值列表的任意一项 */
    GridSearchColumnFilterMatchMode[GridSearchColumnFilterMatchMode["In"] = 4] = "In";
})(GridSearchColumnFilterMatchMode || (GridSearchColumnFilterMatchMode = {}));
//# sourceMappingURL=grid-search-column-filter-match-mode.js.map