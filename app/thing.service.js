System.register(['./mock-things', 'angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var mock_things_1, core_1;
    var ThingService;
    return {
        setters:[
            function (mock_things_1_1) {
                mock_things_1 = mock_things_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ThingService = (function () {
                function ThingService() {
                }
                ThingService.prototype.getThings = function () {
                    return Promise.resolve(mock_things_1.THINGS);
                };
                ThingService.prototype.getThingsDelayed = function () {
                    return new Promise(function (res) { return setTimeout(function () { return res(mock_things_1.THINGS); }, 2000); });
                };
                ThingService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ThingService);
                return ThingService;
            })();
            exports_1("ThingService", ThingService);
        }
    }
});
//thing.service.ts
// @Injectable()
// export class ThingService {
//   public myString: string = "base";
//   constructor(str: string) {
//     this.myString = str;
//   }
// }
// @Injectable()
// export class Thing2Service extends ThingService {
//   constructor(){
//     super('I AM CHILD');
//   }
// }
// //app.component.ts
// public thingService: ThingService = new ThingService("I AM PARENT");
// public thing2Service: Thing2Service = new Thing2Service();
// ThingService.myString === "I AM PARENT"; //true
// Thing2Service.myString === "I AM CHILD"; //true
//# sourceMappingURL=thing.service.js.map