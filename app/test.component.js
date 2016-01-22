System.register(['angular2/core', './test.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, test_service_1, test_service_2;
    var TestComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (test_service_1_1) {
                test_service_1 = test_service_1_1;
                test_service_2 = test_service_1_1;
            }],
        execute: function() {
            TestComponent = (function () {
                function TestComponent(parentService, childService) {
                }
                TestComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n  <div><h1>TESTING BASE</h1>\n    <div *ngIf=\"parentService\">\n      <div>Parent Info: {{parentService.myString}}</div>\n      <div>Child Info: {{childService.myString}}</div>\n    </div>\n  </div>\n  ",
                        providers: [test_service_1.ParentService, test_service_2.ChildService]
                    }), 
                    __metadata('design:paramtypes', [test_service_1.ParentService, test_service_2.ChildService])
                ], TestComponent);
                return TestComponent;
            })();
            exports_1("TestComponent", TestComponent);
        }
    }
});
//# sourceMappingURL=test.component.js.map