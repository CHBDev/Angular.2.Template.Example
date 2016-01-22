// export interface Thing {
//   id: number;
//   name: string;
// }
System.register([], function(exports_1) {
    var Thing;
    return {
        setters:[],
        execute: function() {
            Thing = (function () {
                function Thing(id, name, color, location) {
                    this.id = id;
                    this.name = name;
                    this.color = color;
                    this.location = location;
                } //note: this is a ts shortcut that defines the properties on the class by defining them in the constructor
                return Thing;
            })();
            exports_1("Thing", Thing);
        }
    }
});
//# sourceMappingURL=thing.js.map