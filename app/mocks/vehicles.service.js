System.register(['angular2/core', '../mocks/data.service'], function(exports_1) {
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
    var core_1, data_service_1;
    var VehiclesService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (data_service_1_1) {
                data_service_1 = data_service_1_1;
            }],
        execute: function() {
            VehiclesService = (function (_super) {
                __extends(VehiclesService, _super);
                function VehiclesService() {
                    _super.call(this);
                }
                VehiclesService.prototype.getData = function () {
                    return this._server.getVehicles();
                    //return new Promise(res => setTimeout(() => res(this._data), 330));
                };
                VehiclesService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], VehiclesService);
                return VehiclesService;
            })(data_service_1.DataService);
            exports_1("VehiclesService", VehiclesService);
        }
    }
});
//# sourceMappingURL=vehicles.service.js.map