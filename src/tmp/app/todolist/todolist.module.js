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
var forms_1 = require("@angular/forms");
var index_1 = require("./index");
var TodolistModule = /** @class */ (function () {
    function TodolistModule() {
    }
    TodolistModule = __decorate([
        core_1.NgModule({
            declarations: [
                index_1.CompletedFilterPipe,
                index_1.TodolistComponent
            ],
            imports: [
                forms_1.FormsModule,
                platform_browser_1.BrowserModule
            ],
            exports: [
                index_1.CompletedFilterPipe,
                index_1.TodolistComponent
            ]
        })
    ], TodolistModule);
    return TodolistModule;
}());
exports.TodolistModule = TodolistModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC90b2RvbGlzdC90b2RvbGlzdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxzQ0FBeUM7QUFDekMsOERBQTBEO0FBQzFELHdDQUE2QztBQUM3QyxpQ0FBaUU7QUFnQmpFO0lBQUE7SUFDQSxDQUFDO0lBRFksY0FBYztRQWQxQixlQUFRLENBQUM7WUFDTixZQUFZLEVBQUU7Z0JBQ1YsMkJBQW1CO2dCQUNuQix5QkFBaUI7YUFDcEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsbUJBQVc7Z0JBQ1gsZ0NBQWE7YUFDaEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsMkJBQW1CO2dCQUNuQix5QkFBaUI7YUFDcEI7U0FDSixDQUFDO09BQ1csY0FBYyxDQUMxQjtJQUFELHFCQUFDO0NBREQsQUFDQyxJQUFBO0FBRFksd0NBQWMiLCJmaWxlIjoiYXBwL3RvZG9saXN0L3RvZG9saXN0Lm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbXBsZXRlZEZpbHRlclBpcGUsIFRvZG9saXN0Q29tcG9uZW50IH0gZnJvbSAnLi9pbmRleCc7XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIENvbXBsZXRlZEZpbHRlclBpcGUsXG4gICAgICAgIFRvZG9saXN0Q29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIEZvcm1zTW9kdWxlLFxuICAgICAgICBCcm93c2VyTW9kdWxlXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIENvbXBsZXRlZEZpbHRlclBpcGUsXG4gICAgICAgIFRvZG9saXN0Q29tcG9uZW50XG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBUb2RvbGlzdE1vZHVsZSB7XG59XG4iXX0=
