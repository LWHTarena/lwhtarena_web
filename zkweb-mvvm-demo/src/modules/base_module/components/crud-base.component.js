import { GridSearchRequestDto } from '../../generated_module/dtos/grid-search-request-dto';
import { GridSearchColumnFilter } from '../../generated_module/dtos/grid-search-column-filter';
import { GridSearchColumnFilterMatchMode } from '../../generated_module/dtos/grid-search-column-filter-match-mode';
/** 增删查改页的组件基类 */
var CrudBaseComponent = (function () {
    function CrudBaseComponent(appSessionService, appPrivilegeService, appTranslationService) {
        this.appSessionService = appSessionService;
        this.appPrivilegeService = appPrivilegeService;
        this.appTranslationService = appTranslationService;
        /** 消息列表 */
        this.msgs = [];
        /** 是否载入中 */
        this.loading = false;
        /** 是否重复搜索，如果是需要在上一次结束后重新开始 */
        this.loadingDuplicated = false;
        /** 延迟搜索的时间 */
        this.delaySearchInterval = 500;
        /** 搜索条件的Json，防止多余搜索使用 */
        this.searchConditionJson = null;
        /** 当前页数据 */
        this.value = [];
        /** 单页最多显示的数量 */
        this.rows = 10;
        /** 总记录数量 */
        this.totalRecords = 0;
        /** 单页数量的选项 */
        this.rowsPerPageOptions = [10, 25, 50, 100, 500];
        /** 是否允许添加数据 */
        this.allowAdd = false;
        /** 是否允许编辑数据 */
        this.allowEdit = false;
        /** 是否允许删除数据 */
        this.allowRemove = false;
        /* 当前用户是否属于主租户 */
        this.isMasterTenant = false;
        this.emptyMessage = this.appTranslationService.translate("No records found");
    }
    /** 初始化时的处理 */
    CrudBaseComponent.prototype.ngOnInit = function () {
        this.recheckPrivileges();
    };
    /** 重新检查权限 */
    CrudBaseComponent.prototype.recheckPrivileges = function () {
        var _this = this;
        this.appSessionService.getSessionInfo().subscribe(function (sessionInfo) {
            _this.allowAdd = _this.appPrivilegeService.isAuthorized(sessionInfo.User, _this.getAddRequirement()).success;
            _this.allowEdit = _this.appPrivilegeService.isAuthorized(sessionInfo.User, _this.getEditRequirement()).success;
            _this.allowRemove = _this.appPrivilegeService.isAuthorized(sessionInfo.User, _this.getRemoveRequirement()).success;
            _this.isMasterTenant = sessionInfo.User.OwnerTenantIsMasterTenant;
        });
    };
    /** 显示消息 */
    CrudBaseComponent.prototype.displayMessage = function (severity, detail) {
        this.msgs = [{ severity: severity, detail: this.appTranslationService.translate(detail) }];
    };
    /** 搜索数据
        应该绑定表格的onLazyLoad事件
        例如(onLazyLoad)="search($event)" */
    CrudBaseComponent.prototype.search = function (e, noDelay) {
        var _this = this;
        if (noDelay === void 0) { noDelay = false; }
        // 检查是否多余搜索
        // 如果搜索条件和上次的一致则跳过搜索
        var json = JSON.stringify(e);
        if (json === this.searchConditionJson) {
            return;
        }
        e = JSON.parse(json);
        // 延迟搜索
        if (!noDelay) {
            if (this.delaySearchHandler) {
                clearTimeout(this.delaySearchHandler);
            }
            this.delaySearchHandler = setTimeout(function () { return _this.search(e, true); }, 100);
            return;
        }
        // 检测是否重复搜索
        // 注意这个bug https://github.com/angular/angular/issues/6005
        if (this.loading) {
            this.loadingDuplicated = true;
            return;
        }
        // 设置载入中
        this.loading = true;
        this.searchConditionJson = json;
        console.log("search datatable", e);
        // 构建搜索请求
        var request = new GridSearchRequestDto();
        request.Keyword = e.globalFilter;
        request.Page = e.first / e.rows;
        request.PageSize = e.rows;
        request.OrderBy = e.sortField;
        request.Ascending = e.sortOrder > 0;
        request.ColumnFilters = [];
        var filters = e.filters || {};
        for (var key in filters) {
            if (!filters.hasOwnProperty(key)) {
                continue;
            }
            var value = filters[key];
            var columnFilter = new GridSearchColumnFilter();
            columnFilter.Column = key;
            columnFilter.MatchMode = GridSearchColumnFilterMatchMode.Default;
            if (value.matchMode === "startsWith") {
                columnFilter.MatchMode = GridSearchColumnFilterMatchMode.StartsWith;
            }
            else if (value.matchMode === "endsWidth") {
                columnFilter.MatchMode = GridSearchColumnFilterMatchMode.EndsWith;
            }
            else if (value.matchMode === "equals") {
                columnFilter.MatchMode = GridSearchColumnFilterMatchMode.Equals;
            }
            else if (value.matchMode === "in") {
                columnFilter.MatchMode = GridSearchColumnFilterMatchMode.In;
            }
            columnFilter.Value = value.value;
            request.ColumnFilters.push(columnFilter);
        }
        // 调用搜索函数
        var setSearchResult = function (value, totalRecords) {
            _this.value = value;
            _this.totalRecords = totalRecords;
            // 设置已载入
            _this.loading = false;
            // 如果在搜索途中条件有改变需要再搜索一次
            if (_this.loadingDuplicated) {
                _this.loadingDuplicated = false;
                setTimeout(function () { return _this.search(e); }, 1);
            }
        };
        this.submitSearch(request).subscribe(function (r) { return setSearchResult(r.Result, r.TotalCount); }, function (ee) {
            _this.displayMessage("error", ee);
            setSearchResult([], 0);
        });
    };
    /** 以上次的参数搜索数据 */
    CrudBaseComponent.prototype.searchWithLastParameters = function () {
        if (!this.searchConditionJson) {
            return;
        }
        var condition = JSON.parse(this.searchConditionJson);
        this.searchConditionJson = "";
        this.search(condition);
    };
    return CrudBaseComponent;
}());
export { CrudBaseComponent };
//# sourceMappingURL=crud-base.component.js.map