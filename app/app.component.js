System.register(['angular2/core', './components/vehicle.listview/vehicle.listview.component', './components/address.listview/address.listview.component', '../server/wave1server.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, vehicle_listview_component_1, address_listview_component_1, wave1server_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (vehicle_listview_component_1_1) {
                vehicle_listview_component_1 = vehicle_listview_component_1_1;
            },
            function (address_listview_component_1_1) {
                address_listview_component_1 = address_listview_component_1_1;
            },
            function (wave1server_service_1_1) {
                wave1server_service_1 = wave1server_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_server) {
                    this.title = 'GW APP';
                }
                AppComponent.prototype.ngOnInit = function () {
                };
                ;
                AppComponent = __decorate([
                    core_1.Component({
                        directives: [vehicle_listview_component_1.VehicleListView, address_listview_component_1.AddressListView],
                        selector: 'my-app',
                        template: "\n      <div class=\"main\">\n        <div class=\"holder\">\n          <gw-vehicle-listview></gw-vehicle-listview>\n        </div>\n        <div class=\"holder\">\n          <gw-address-listview></gw-address-listview>\n        </div>\n      </div>\n    ",
                        styles: [],
                        providers: [wave1server_service_1.Server]
                    }), 
                    __metadata('design:paramtypes', [wave1server_service_1.Server])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map