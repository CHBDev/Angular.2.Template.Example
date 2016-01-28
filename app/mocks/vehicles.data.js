System.register([], function(exports_1) {
    var _these, VEHICLES;
    return {
        setters:[],
        execute: function() {
            _these = [
                { make: "Honda", model: "Civic", tag: "AAABBB1", vin: "123456789", icon: { src: "http://lorempixel.com/16/16/abstract", click: function () { } } },
                { make: "Ford", model: "Explorer", tag: "CCCHHH2", vin: "987654161", icon: { src: "http://lorempixel.com/16/16/abstract", click: function () { } } },
                { make: "BMW", model: "M6", tag: "DDDFFF3", vin: "abcdefghijklmno", icon: { src: "http://lorempixel.com/16/16/abstract", click: function () { } } },
                { make: "Lexus", model: "Rutebega", tag: "EEEMMM4", vin: "zxcvbnmasdf", icon: { src: "http://lorempixel.com/16/16/abstract", click: function () { } } }
            ];
            exports_1("VEHICLES", VEHICLES = _these);
        }
    }
});
//# sourceMappingURL=vehicles.data.js.map