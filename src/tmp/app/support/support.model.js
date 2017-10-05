"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Support = /** @class */ (function () {
    function Support(name, done) {
        if (done === void 0) { done = false; }
        this.name = name;
        this.done = done;
    }
    Support.clone = function (support) {
        return new Support(support.name, support.done);
    };
    Support.prototype.clear = function () {
        this.name = '';
        this.done = false;
    };
    return Support;
}());
exports.Support = Support;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zdXBwb3J0L3N1cHBvcnQubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtJQVFJLGlCQUFZLElBQVksRUFBRSxJQUFZO1FBQVoscUJBQUEsRUFBQSxZQUFZO1FBQ2xDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFQTSxhQUFLLEdBQVosVUFBYSxPQUFnQjtRQUN6QixNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQU9ELHVCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFDTCxjQUFDO0FBQUQsQ0FqQkEsQUFpQkMsSUFBQTtBQWpCWSwwQkFBTyIsImZpbGUiOiJhcHAvc3VwcG9ydC9zdXBwb3J0Lm1vZGVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFN1cHBvcnQge1xuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG4gICAgcHVibGljIGRvbmU6IGJvb2xlYW47XG5cbiAgICBzdGF0aWMgY2xvbmUoc3VwcG9ydDogU3VwcG9ydCk6IFN1cHBvcnQge1xuICAgICAgICByZXR1cm4gbmV3IFN1cHBvcnQoc3VwcG9ydC5uYW1lLCBzdXBwb3J0LmRvbmUpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgZG9uZSA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuZG9uZSA9IGRvbmU7XG4gICAgfVxuXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMubmFtZSA9ICcnO1xuICAgICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICB9XG59XG4iXX0=
