"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var support_model_1 = require("./support.model");
var SupportlistComponent = /** @class */ (function () {
    function SupportlistComponent() {
        this.showCompleted = true;
        this.support = new support_model_1.Support('Add new support contact', false);
        this.list = [
            new support_model_1.Support('jane doe'),
            new support_model_1.Support('john doe', true)
        ];
    }
    SupportlistComponent.prototype.addSupport = function () {
        this.list = this.list.concat(support_model_1.Support.clone(this.support));
        this.support.clear();
    };
    SupportlistComponent.prototype.delSupport = function (supportIndex) {
        this.list = this.list.filter(function (support, index) { return index !== supportIndex; });
    };
    SupportlistComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'as-supportlist',
            templateUrl: 'supportlist.html'
        }),
        __metadata("design:paramtypes", [])
    ], SupportlistComponent);
    return SupportlistComponent;
}());
exports.SupportlistComponent = SupportlistComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zdXBwb3J0L3N1cHBvcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTBDO0FBRTFDLGlEQUEwQztBQU8xQztJQUtJO1FBQ0ksSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLHVCQUFPLENBQUMseUJBQXlCLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLElBQUksR0FBRztZQUNSLElBQUksdUJBQU8sQ0FBQyxVQUFVLENBQUM7WUFDdkIsSUFBSSx1QkFBTyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUM7U0FDaEMsQ0FBQztJQUNOLENBQUM7SUFFRCx5Q0FBVSxHQUFWO1FBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyx1QkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCx5Q0FBVSxHQUFWLFVBQVcsWUFBb0I7UUFDM0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FDeEIsVUFBQyxPQUFPLEVBQUUsS0FBSyxJQUFLLE9BQUEsS0FBSyxLQUFLLFlBQVksRUFBdEIsQ0FBc0IsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUF0QlEsb0JBQW9CO1FBTGhDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixXQUFXLEVBQUUsa0JBQWtCO1NBQ2xDLENBQUM7O09BQ1csb0JBQW9CLENBdUJoQztJQUFELDJCQUFDO0NBdkJELEFBdUJDLElBQUE7QUF2Qlksb0RBQW9CIiwiZmlsZSI6ImFwcC9zdXBwb3J0L3N1cHBvcnQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN1cHBvcnQgfSBmcm9tICcuL3N1cHBvcnQubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnYXMtc3VwcG9ydGxpc3QnLFxuICAgIHRlbXBsYXRlVXJsOiAnc3VwcG9ydGxpc3QuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgU3VwcG9ydGxpc3RDb21wb25lbnQge1xuICAgIHB1YmxpYyBzdXBwb3J0OiBTdXBwb3J0O1xuICAgIHByaXZhdGUgbGlzdDogU3VwcG9ydFtdO1xuICAgIHByaXZhdGUgc2hvd0NvbXBsZXRlZDogQm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnNob3dDb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnN1cHBvcnQgPSBuZXcgU3VwcG9ydCgnQWRkIG5ldyBzdXBwb3J0IGNvbnRhY3QnLCBmYWxzZSk7XG4gICAgICAgIHRoaXMubGlzdCA9IFtcbiAgICAgICAgICAgIG5ldyBTdXBwb3J0KCdqYW5lIGRvZScpLFxuICAgICAgICAgICAgbmV3IFN1cHBvcnQoJ2pvaG4gZG9lJywgdHJ1ZSlcbiAgICAgICAgXTtcbiAgICB9XG5cbiAgICBhZGRTdXBwb3J0KCkge1xuICAgICAgICB0aGlzLmxpc3QgPSB0aGlzLmxpc3QuY29uY2F0KFN1cHBvcnQuY2xvbmUodGhpcy5zdXBwb3J0KSk7XG4gICAgICAgIHRoaXMuc3VwcG9ydC5jbGVhcigpO1xuICAgIH1cblxuICAgIGRlbFN1cHBvcnQoc3VwcG9ydEluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5saXN0ID0gdGhpcy5saXN0LmZpbHRlcihcbiAgICAgICAgICAgIChzdXBwb3J0LCBpbmRleCkgPT4gaW5kZXggIT09IHN1cHBvcnRJbmRleCk7XG4gICAgfVxufVxuIl19
