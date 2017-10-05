"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_providers_1 = require("./app.providers");
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var shared_1 = require("./shared");
var home_module_1 = require("./home/home.module");
var angular2_wizard_1 = require("angular2-wizard");
var todolist_module_1 = require("./todolist/todolist.module");
var support_module_1 = require("./support/support.module");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                shared_1.NavbarModule,
                home_module_1.HomeModule,
                todolist_module_1.TodolistModule,
                support_module_1.SupportlistModule,
                angular2_wizard_1.FormWizardModule,
                app_routing_1.routing
            ],
            providers: [app_providers_1.APP_PROVIDERS, app_routing_1.appRoutingProviders],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsc0NBQXlDO0FBQ3pDLDhEQUEwRDtBQUUxRCxpREFBZ0Q7QUFDaEQsaURBQStDO0FBQy9DLDZDQUE2RDtBQUM3RCxtQ0FBd0M7QUFDeEMsa0RBQWdEO0FBQ2hELG1EQUFtRDtBQUNuRCw4REFBNEQ7QUFDNUQsMkRBQTZEO0FBa0I3RDtJQUFBO0lBQ0EsQ0FBQztJQURZLFNBQVM7UUFoQnJCLGVBQVEsQ0FBQztZQUNOLFlBQVksRUFBRTtnQkFDViw0QkFBWTthQUNmO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLGdDQUFhO2dCQUNiLHFCQUFZO2dCQUNaLHdCQUFVO2dCQUNWLGdDQUFjO2dCQUNkLGtDQUFpQjtnQkFDakIsa0NBQWdCO2dCQUNoQixxQkFBTzthQUNWO1lBQ0QsU0FBUyxFQUFFLENBQUUsNkJBQWEsRUFBRSxpQ0FBbUIsQ0FBRTtZQUNqRCxTQUFTLEVBQUUsQ0FBRSw0QkFBWSxDQUFFO1NBQzlCLENBQUM7T0FDVyxTQUFTLENBQ3JCO0lBQUQsZ0JBQUM7Q0FERCxBQUNDLElBQUE7QUFEWSw4QkFBUyIsImZpbGUiOiJhcHAvYXBwLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbmltcG9ydCB7IEFQUF9QUk9WSURFUlMgfSBmcm9tICcuL2FwcC5wcm92aWRlcnMnO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAuY29tcG9uZW50JztcbmltcG9ydCB7IGFwcFJvdXRpbmdQcm92aWRlcnMsIHJvdXRpbmcgfSBmcm9tICcuL2FwcC5yb3V0aW5nJztcbmltcG9ydCB7IE5hdmJhck1vZHVsZSB9IGZyb20gJy4vc2hhcmVkJztcbmltcG9ydCB7IEhvbWVNb2R1bGUgfSBmcm9tICcuL2hvbWUvaG9tZS5tb2R1bGUnO1xuaW1wb3J0IHsgRm9ybVdpemFyZE1vZHVsZSB9IGZyb20gJ2FuZ3VsYXIyLXdpemFyZCc7XG5pbXBvcnQgeyBUb2RvbGlzdE1vZHVsZSB9IGZyb20gJy4vdG9kb2xpc3QvdG9kb2xpc3QubW9kdWxlJztcbmltcG9ydCB7IFN1cHBvcnRsaXN0TW9kdWxlIH0gZnJvbSAnLi9zdXBwb3J0L3N1cHBvcnQubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIEJyb3dzZXJNb2R1bGUsXG4gICAgICAgIE5hdmJhck1vZHVsZSxcbiAgICAgICAgSG9tZU1vZHVsZSxcbiAgICAgICAgVG9kb2xpc3RNb2R1bGUsXG4gICAgICAgIFN1cHBvcnRsaXN0TW9kdWxlLFxuICAgICAgICBGb3JtV2l6YXJkTW9kdWxlLFxuICAgICAgICByb3V0aW5nXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFsgQVBQX1BST1ZJREVSUywgYXBwUm91dGluZ1Byb3ZpZGVycyBdLFxuICAgIGJvb3RzdHJhcDogWyBBcHBDb21wb25lbnQgXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge1xufVxuIl19
