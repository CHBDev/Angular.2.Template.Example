System.register(['angular2/core', './thing'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, thing_1;
    var ThingFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (thing_1_1) {
                thing_1 = thing_1_1;
            }],
        execute: function() {
            ThingFormComponent = (function () {
                function ThingFormComponent() {
                    this.colors = ['Yellow', 'Red', 'Green', 'Blue'];
                    this.model = new thing_1.Thing(27, 'A Thing Title', this.colors[0], 'San Francisco');
                    this.submitted = false;
                }
                ThingFormComponent.prototype.onSubmit = function () { this.submitted = true; };
                Object.defineProperty(ThingFormComponent.prototype, "diagnostic", {
                    //
                    get: function () { return JSON.stringify(this.model); },
                    enumerable: true,
                    configurable: true
                });
                ThingFormComponent = __decorate([
                    core_1.Component({
                        selector: 'thing-form',
                        templateUrl: 'app/thing-form.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], ThingFormComponent);
                return ThingFormComponent;
            })();
            exports_1("ThingFormComponent", ThingFormComponent);
        }
    }
});
//# sourceMappingURL=thing-form.component.js.map