System.register([], function(exports_1) {
    var _these, VEHICLES;
    return {
        setters:[],
        execute: function() {
            _these = [
                { make: "Honda", model: "Civic", tag: "AAABBB1", vin: "123456789" },
                { make: "Ford", model: "Explorer", tag: "CCCHHH2", vin: "987654321" },
                { make: "BMW", model: "M6", tag: "DDDFFF3", vin: "abcdefghijklmno" },
                { make: "Lexus", model: "Rutebega", tag: "EEEMMM4", vin: "zxcvbnmasdf" }
            ];
            exports_1("VEHICLES", VEHICLES = _these);
        }
    }
});
//# sourceMappingURL=vehicles.data.js.map