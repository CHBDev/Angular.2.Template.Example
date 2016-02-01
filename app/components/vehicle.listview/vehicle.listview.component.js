System.register(['angular2/core', '../listview/listview.component', '../../mocks/vehicles.service'], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, listview_component_1, vehicles_service_1;
    var VehicleListView;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (listview_component_1_1) {
                listview_component_1 = listview_component_1_1;
            },
            function (vehicles_service_1_1) {
                vehicles_service_1 = vehicles_service_1_1;
            }],
        execute: function() {
            VehicleListView = (function (_super) {
                __extends(VehicleListView, _super);
                function VehicleListView() {
                    _super.call(this, new vehicles_service_1.VehiclesService());
                }
                VehicleListView = __decorate([
                    core_1.Component({
                        selector: 'gw-vehicle-listview',
                        templateUrl: listview_component_1.ListView.templateUrl,
                        directives: [],
                        styleUrls: [listview_component_1.ListView.cssUrl],
                        inputs: [],
                        providers: [vehicles_service_1.VehiclesService]
                    }), 
                    __metadata('design:paramtypes', [])
                ], VehicleListView);
                return VehicleListView;
            })(listview_component_1.ListView);
            exports_1("VehicleListView", VehicleListView);
        }
    }
});
//# sourceMappingURL=vehicle.listview.component.js.map