System.register(['angular2/core', './thing-detail.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, thing_detail_component_1;
    var AppComponent, THINGS;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (thing_detail_component_1_1) {
                thing_detail_component_1 = thing_detail_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'GW APP';
                    this.things = THINGS; //this infers its type from the strongly typed array
                }
                AppComponent.prototype.onSelect = function (thing) { this.selectedThing = thing; };
                ;
                AppComponent = __decorate([
                    core_1.Component({
                        directives: [thing_detail_component_1.ThingDetailComponent],
                        selector: 'my-app',
                        template: "\n    <h1>{{title}}</h1>\n    <my-thing-detail [thing]=\"selectedThing\"></my-thing-detail>\n    <h2>My Things</h2>\n    <ul class=\"things\">\n      <li *ngFor=\"#thing of things\" [class.selected]=\"thing === selectedThing\" (click)=\"onSelect(thing)\">\n        <span class=\"badge\">{{thing.id}}</span> {{thing.name}}\n      </li>\n    </ul>\n    ",
                        styles: ["\n  .selected {\n    background-color: #CFD8DC !important;\n    color: white;\n  }\n  .things {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 10em;\n  }\n  .things li {\n    cursor: pointer;\n    position: relative;\n    left: 0;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0em;\n    height: 1.6em;\n    border-radius: 4px;\n  }\n  .things li.selected:hover {\n    color: white;\n  }\n  .things li:hover {\n    color: #607D8B;\n    background-color: #EEE;\n    left: .1em;\n  }\n  .things .text {\n    position: relative;\n    top: -3px;\n  }\n  .things .badge {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0em 0.7em;\n    background-color: #607D8B;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    margin-right: .8em;\n    border-radius: 4px 0px 0px 4px;\n  }\n"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
            THINGS = [
                { "id": 11, "name": "Mr. Nice" },
                { "id": 12, "name": "Narco" },
                { "id": 13, "name": "Bombasto" },
                { "id": 14, "name": "Celeritas" },
                { "id": 15, "name": "Magneta" },
                { "id": 16, "name": "RubberMan" },
                { "id": 17, "name": "Dynama" },
                { "id": 18, "name": "Dr IQ" },
                { "id": 19, "name": "Magma" },
                { "id": 20, "name": "Tornado" }
            ];
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