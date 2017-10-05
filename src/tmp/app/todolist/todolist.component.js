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
var todo_model_1 = require("./todo.model");
var TodolistComponent = /** @class */ (function () {
    function TodolistComponent() {
        this.showCompleted = true;
        this.todo = new todo_model_1.Todo('Add me to list!', false);
        this.list = [
            new todo_model_1.Todo('jane doe'),
            new todo_model_1.Todo('john doe', true)
        ];
    }
    TodolistComponent.prototype.addTodo = function () {
        this.list = this.list.concat(todo_model_1.Todo.clone(this.todo));
        this.todo.clear();
    };
    TodolistComponent.prototype.delTodo = function (todoIndex) {
        this.list = this.list.filter(function (todo, index) { return index !== todoIndex; });
    };
    TodolistComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            styleUrls: ['/todolist.css'],
            selector: 'as-todolist',
            templateUrl: 'todolist.html',
        }),
        __metadata("design:paramtypes", [])
    ], TodolistComponent);
    return TodolistComponent;
}());
exports.TodolistComponent = TodolistComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC90b2RvbGlzdC90b2RvbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMEM7QUFFMUMsMkNBQW9DO0FBU3BDO0lBS0k7UUFDSSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUMxQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksaUJBQUksQ0FBQyxpQkFBaUIsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsSUFBSSxHQUFHO1lBQ1IsSUFBSSxpQkFBSSxDQUFDLFVBQVUsQ0FBQztZQUNwQixJQUFJLGlCQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQztTQUM3QixDQUFDO0lBQ04sQ0FBQztJQUVELG1DQUFPLEdBQVA7UUFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELG1DQUFPLEdBQVAsVUFBUSxTQUFpQjtRQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUN4QixVQUFDLElBQUksRUFBRSxLQUFLLElBQUssT0FBQSxLQUFLLEtBQUssU0FBUyxFQUFuQixDQUFtQixDQUFDLENBQUM7SUFDOUMsQ0FBQztJQXRCUSxpQkFBaUI7UUFQN0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixTQUFTLEVBQUUsQ0FBQyxlQUFlLENBQUM7WUFDNUIsUUFBUSxFQUFFLGFBQWE7WUFDdkIsV0FBVyxFQUFFLGVBQWU7U0FFL0IsQ0FBQzs7T0FDVyxpQkFBaUIsQ0F1QjdCO0lBQUQsd0JBQUM7Q0F2QkQsQUF1QkMsSUFBQTtBQXZCWSw4Q0FBaUIiLCJmaWxlIjoiYXBwL3RvZG9saXN0L3RvZG9saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBUb2RvIH0gZnJvbSAnLi90b2RvLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzdHlsZVVybHM6IFsnL3RvZG9saXN0LmNzcyddLFxuICAgIHNlbGVjdG9yOiAnYXMtdG9kb2xpc3QnLFxuICAgIHRlbXBsYXRlVXJsOiAndG9kb2xpc3QuaHRtbCcsXG5cbn0pXG5leHBvcnQgY2xhc3MgVG9kb2xpc3RDb21wb25lbnQge1xuICAgIHB1YmxpYyB0b2RvOiBUb2RvO1xuICAgIHByaXZhdGUgbGlzdDogVG9kb1tdO1xuICAgIHByaXZhdGUgc2hvd0NvbXBsZXRlZDogQm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnNob3dDb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnRvZG8gPSBuZXcgVG9kbygnQWRkIG1lIHRvIGxpc3QhJywgZmFsc2UpO1xuICAgICAgICB0aGlzLmxpc3QgPSBbXG4gICAgICAgICAgICBuZXcgVG9kbygnamFuZSBkb2UnKSxcbiAgICAgICAgICAgIG5ldyBUb2RvKCdqb2huIGRvZScsIHRydWUpXG4gICAgICAgIF07XG4gICAgfVxuXG4gICAgYWRkVG9kbygpIHtcbiAgICAgICAgdGhpcy5saXN0ID0gdGhpcy5saXN0LmNvbmNhdChUb2RvLmNsb25lKHRoaXMudG9kbykpO1xuICAgICAgICB0aGlzLnRvZG8uY2xlYXIoKTtcbiAgICB9XG5cbiAgICBkZWxUb2RvKHRvZG9JbmRleDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMubGlzdCA9IHRoaXMubGlzdC5maWx0ZXIoXG4gICAgICAgICAgICAodG9kbywgaW5kZXgpID0+IGluZGV4ICE9PSB0b2RvSW5kZXgpO1xuICAgIH1cbn1cbiJdfQ==
