"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var wizard_component_1 = require("./src/wizard.component");
var wizard_step_component_1 = require("./src/wizard-step.component");
__export(require("./wizard/src/wizard.component"));
__export(require("./wizard/src/wizard-step.component"));
var FormWizardModule = /** @class */ (function () {
    function FormWizardModule() {
    }
    FormWizardModule_1 = FormWizardModule;
    FormWizardModule.forRoot = function () {
        return {
            ngModule: FormWizardModule_1
        };
    };
    FormWizardModule = FormWizardModule_1 = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule
            ],
            declarations: [
                wizard_component_1.WizardComponent,
                wizard_step_component_1.WizardStepComponent
            ],
            exports: [
                wizard_component_1.WizardComponent,
                wizard_step_component_1.WizardStepComponent
            ]
        })
    ], FormWizardModule);
    return FormWizardModule;
    var FormWizardModule_1;
}());
exports.FormWizardModule = FormWizardModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC93aXphcmQvc3JjL3dpemFyZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBOEQ7QUFDOUQsMENBQStDO0FBQy9DLDJEQUF5RDtBQUN6RCxxRUFBa0U7QUFFbEUsbURBQThDO0FBQzlDLHdEQUFtRDtBQWVuRDtJQUFBO0lBTUEsQ0FBQzt5QkFOWSxnQkFBZ0I7SUFDcEIsd0JBQU8sR0FBZDtRQUNFLE1BQU0sQ0FBQztZQUNMLFFBQVEsRUFBRSxrQkFBZ0I7U0FDM0IsQ0FBQztJQUNKLENBQUM7SUFMVSxnQkFBZ0I7UUFiNUIsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLHFCQUFZO2FBQ2I7WUFDRCxZQUFZLEVBQUU7Z0JBQ1osa0NBQWU7Z0JBQ2YsMkNBQW1CO2FBQ3BCO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLGtDQUFlO2dCQUNmLDJDQUFtQjthQUNwQjtTQUNGLENBQUM7T0FDVyxnQkFBZ0IsQ0FNNUI7SUFBRCx1QkFBQzs7Q0FORCxBQU1DLElBQUE7QUFOWSw0Q0FBZ0IiLCJmaWxlIjoiYXBwL3dpemFyZC9zcmMvd2l6YXJkLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgV2l6YXJkQ29tcG9uZW50IH0gZnJvbSAnLi9zcmMvd2l6YXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBXaXphcmRTdGVwQ29tcG9uZW50IH0gZnJvbSAnLi9zcmMvd2l6YXJkLXN0ZXAuY29tcG9uZW50JztcblxuZXhwb3J0ICogZnJvbSAnLi93aXphcmQvc3JjL3dpemFyZC5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi93aXphcmQvc3JjL3dpemFyZC1zdGVwLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgV2l6YXJkQ29tcG9uZW50LFxuICAgIFdpemFyZFN0ZXBDb21wb25lbnRcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFdpemFyZENvbXBvbmVudCxcbiAgICBXaXphcmRTdGVwQ29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRm9ybVdpemFyZE1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogRm9ybVdpemFyZE1vZHVsZVxuICAgIH07XG4gIH1cbn1cbiJdfQ==
