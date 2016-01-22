System.register(['./thing'], function(exports_1) {
    var thing_1;
    var THINGS;
    return {
        setters:[
            function (thing_1_1) {
                thing_1 = thing_1_1;
            }],
        execute: function() {
            exports_1("THINGS", THINGS = [
                new thing_1.Thing(11, "someone", "yellow", "San Francisco"),
                new thing_1.Thing(12, "sometwo", "yellow", "San Francisco"),
                new thing_1.Thing(13, "somethree", "yellow", "San Francisco"),
                new thing_1.Thing(14, "somefour", "yellow", "San Francisco"),
                new thing_1.Thing(15, "somefive", "yellow", "San Francisco"),
                new thing_1.Thing(16, "somesix", "yellow", "San Francisco"),
                new thing_1.Thing(17, "someseven", "yellow", "San Francisco"),
                new thing_1.Thing(18, "someeight", "yellow", "San Francisco")
            ]);
        }
    }
});
//# sourceMappingURL=mock-things.js.map