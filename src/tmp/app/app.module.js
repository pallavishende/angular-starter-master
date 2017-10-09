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
var contact_module_1 = require("./contacts/contact.module");
var feed_module_1 = require("./feed/feed.module");
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
                contact_module_1.ContactModule,
                feed_module_1.FeedModule,
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsc0NBQXlDO0FBQ3pDLDhEQUEwRDtBQUUxRCxpREFBZ0Q7QUFDaEQsaURBQStDO0FBQy9DLDZDQUE2RDtBQUM3RCxtQ0FBd0M7QUFDeEMsa0RBQWdEO0FBQ2hELG1EQUFtRDtBQUNuRCw4REFBNEQ7QUFDNUQsMkRBQTZEO0FBQzdELDREQUEwRDtBQUMxRCxrREFBZ0Q7QUFvQmhEO0lBQUE7SUFDQSxDQUFDO0lBRFksU0FBUztRQWxCckIsZUFBUSxDQUFDO1lBQ04sWUFBWSxFQUFFO2dCQUNWLDRCQUFZO2FBQ2Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsZ0NBQWE7Z0JBQ2IscUJBQVk7Z0JBQ1osd0JBQVU7Z0JBQ1YsZ0NBQWM7Z0JBQ2Qsa0NBQWlCO2dCQUNqQiw4QkFBYTtnQkFDYix3QkFBVTtnQkFDVixrQ0FBZ0I7Z0JBQ2hCLHFCQUFPO2FBQ1Y7WUFDRCxTQUFTLEVBQUUsQ0FBRSw2QkFBYSxFQUFFLGlDQUFtQixDQUFFO1lBQ2pELFNBQVMsRUFBRSxDQUFFLDRCQUFZLENBQUU7U0FDOUIsQ0FBQztPQUNXLFNBQVMsQ0FDckI7SUFBRCxnQkFBQztDQURELEFBQ0MsSUFBQTtBQURZLDhCQUFTIiwiZmlsZSI6ImFwcC9hcHAubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuaW1wb3J0IHsgQVBQX1BST1ZJREVSUyB9IGZyb20gJy4vYXBwLnByb3ZpZGVycyc7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgYXBwUm91dGluZ1Byb3ZpZGVycywgcm91dGluZyB9IGZyb20gJy4vYXBwLnJvdXRpbmcnO1xuaW1wb3J0IHsgTmF2YmFyTW9kdWxlIH0gZnJvbSAnLi9zaGFyZWQnO1xuaW1wb3J0IHsgSG9tZU1vZHVsZSB9IGZyb20gJy4vaG9tZS9ob21lLm1vZHVsZSc7XG5pbXBvcnQgeyBGb3JtV2l6YXJkTW9kdWxlIH0gZnJvbSAnYW5ndWxhcjItd2l6YXJkJztcbmltcG9ydCB7IFRvZG9saXN0TW9kdWxlIH0gZnJvbSAnLi90b2RvbGlzdC90b2RvbGlzdC5tb2R1bGUnO1xuaW1wb3J0IHsgU3VwcG9ydGxpc3RNb2R1bGUgfSBmcm9tICcuL3N1cHBvcnQvc3VwcG9ydC5tb2R1bGUnO1xuaW1wb3J0IHsgQ29udGFjdE1vZHVsZSB9IGZyb20gJy4vY29udGFjdHMvY29udGFjdC5tb2R1bGUnO1xuaW1wb3J0IHsgRmVlZE1vZHVsZSB9IGZyb20gJy4vZmVlZC9mZWVkLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBCcm93c2VyTW9kdWxlLFxuICAgICAgICBOYXZiYXJNb2R1bGUsXG4gICAgICAgIEhvbWVNb2R1bGUsXG4gICAgICAgIFRvZG9saXN0TW9kdWxlLFxuICAgICAgICBTdXBwb3J0bGlzdE1vZHVsZSxcbiAgICAgICAgQ29udGFjdE1vZHVsZSxcbiAgICAgICAgRmVlZE1vZHVsZSxcbiAgICAgICAgRm9ybVdpemFyZE1vZHVsZSxcbiAgICAgICAgcm91dGluZ1xuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbIEFQUF9QUk9WSURFUlMsIGFwcFJvdXRpbmdQcm92aWRlcnMgXSxcbiAgICBib290c3RyYXA6IFsgQXBwQ29tcG9uZW50IF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHtcbn1cbiJdfQ==
