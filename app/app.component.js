System.register(['angular2/core', './thing-detail.component', './thing.service', './thing-form.component', './little-tour.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, thing_detail_component_1, thing_service_1, thing_form_component_1, little_tour_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (thing_detail_component_1_1) {
                thing_detail_component_1 = thing_detail_component_1_1;
            },
            function (thing_service_1_1) {
                thing_service_1 = thing_service_1_1;
            },
            function (thing_form_component_1_1) {
                thing_form_component_1 = thing_form_component_1_1;
            },
            function (little_tour_component_1_1) {
                little_tour_component_1 = little_tour_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_thingService) {
                    this._thingService = _thingService;
                    this.title = 'GW APP';
                }
                AppComponent.prototype.ngOnInit = function () {
                    this.getThings();
                };
                ;
                // public thingService: ThingService = new ThingService("test me");
                // public thing2Service: Thing2Service = new Thing2Service();
                AppComponent.prototype.onSelect = function (thing) { this.selectedThing = thing; };
                ;
                AppComponent.prototype.getThings = function () {
                    var _this = this;
                    this._thingService.getThingsDelayed().then(function (things) { return _this.things = things; });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        directives: [thing_detail_component_1.ThingDetailComponent, thing_form_component_1.ThingFormComponent, little_tour_component_1.HelpComponent],
                        selector: 'my-app',
                        template: "\n    <help></help>\n    <h1>{{title}}</h1>\n    <thing-form></thing-form><br>\n    \n    <my-thing-detail [thing]=\"selectedThing\"></my-thing-detail>\n    <h2>My Things</h2>\n    <div *ngIf=\"!things\">...Loading Things...</div>\n    <div *ngIf=\"things && things.length > 2\">... There are {{things.length}} things...</div>\n    <ul class=\"things\">\n      <li *ngFor=\"#thing of things\" [class.selected]=\"thing === selectedThing\" (click)=\"onSelect(thing)\">\n        <span class=\"badge\">{{thing.id}}</span> {{thing.name}} <span class=\"r-badge\">{{thing.color}}</span>\n      </li>\n    </ul>\n    ",
                        styles: ["\n  .selected {\n    background-color: #CFD8DC !important;\n    color: white;\n  }\n  .things {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    min-width: 10em;\n    width: 25em;\n  }\n  .things li {\n    cursor: pointer;\n    \n    \n    background-color: #EEE;\n    margin: .5em;\n    \n    \n    border-radius: 4px;\n  }\n  .things li.selected:hover {\n    color: white;\n  }\n  .things li:hover {\n    color: #607D8B;\n    background-color: #EEE;\n    left: .1em;\n  }\n  .things .text {\n    position: relative;\n    top: -3px;\n  }\n  .things .badge {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    background-color: #607D8B;\n    line-height: 1em;\n    height: 1.8em;\n    margin-right: .8em;\n    border-radius: 4px 0px 0px 4px;\n  }\n  .things .r-badge {\n    vertical-align: middle;\n    text-align: center;\n    width: 9em;\n    height: 1.8em;\n    line-height: 1em;\n    float: right;\n    display: inline-block;\n    background-color: #607D88;\n    border-radius: 0px 4px 4px 0px;\n  }\n"],
                        providers: [thing_service_1.ThingService]
                    }), 
                    __metadata('design:paramtypes', [thing_service_1.ThingService])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
// (function(app) {
//   app.AppComponent =
//     ng.core.Component({
//       selector: 'my-app',
//       template: '<h1>My NEXT BIG THING</h1>'
//     })
//     .Class({
//       constructor: function() {}
//     });
// })(window.app || (window.app = {})); 
//# sourceMappingURL=app.component.js.map