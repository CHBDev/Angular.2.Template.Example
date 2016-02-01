System.register(['angular2/core', '../../mocks/data.service'], function(exports_1) {
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
    var CLOSEOTHERS, TEMPLATEURL, CSSURL, ListView;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (data_service_1_1) {
                data_service_1 = data_service_1_1;
            }],
        execute: function() {
            CLOSEOTHERS = true;
            TEMPLATEURL = './app/components/' + 'listview/listview.html';
            CSSURL = './app/components/' + 'listview/listview.css';
            ListView = (function () {
                function ListView(ds) {
                    this.sortedBy = "none";
                    this.isCollapsed = true;
                    if (ds) {
                        this._dataService = ds;
                    }
                    else {
                        this._dataService = new data_service_1.DataService();
                    }
                }
                ListView.prototype.collapserClicked = function () {
                    this.isCollapsed = !this.isCollapsed;
                };
                ListView.prototype.ngOnInit = function () {
                    this.getData();
                };
                ListView.prototype.getCellContent = function (rowObj, header) {
                    var data = rowObj[header];
                    if (header === "icon") {
                        return ""; //TODO: look more at options here
                    }
                    return data;
                };
                ListView.prototype.getHeaderString = function (header) {
                    if (header === "icon") {
                        return "";
                    }
                    return header;
                };
                ListView.prototype.setExpanded = function (tr) {
                    if (tr.isExpanded) {
                        tr.isExpanded = false;
                    }
                    else {
                        for (var i = 0, row = void 0; i < this._rows.length; i++) {
                            row = this._rows[i];
                            if (CLOSEOTHERS)
                                row.isExpanded = false;
                        }
                        tr.isExpanded = true;
                    }
                };
                ListView.prototype.refresh = function () {
                    //TODO: do something with searchCriteria?
                    this.getData();
                };
                ListView.prototype.sortRowsBy = function (str) {
                    if (str === "" || this.isCollapsed === true)
                        return;
                    this.sortedBy = str;
                    var sortFunc = function (a, b) {
                        if (a[str] > b[str])
                            return 1;
                        if (a[str] < b[str])
                            return -1;
                        return 0;
                    };
                    //TODO: this is all bad, just creates new arrays and objects everytime
                    //But I have been promised that this is throw away code...
                    this._rows.sort(sortFunc);
                    this.processRows();
                };
                Object.defineProperty(ListView.prototype, "sortedRows", {
                    get: function () {
                        this._sortedRows = this._sortedRows || this._rows;
                        return this._sortedRows;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ListView.prototype, "searchCriteria", {
                    get: function () {
                        return this._searchCriteria;
                    },
                    set: function (crit) {
                        //TODO: not sure what gets done in code here if anything
                        this._searchCriteria = crit;
                    },
                    enumerable: true,
                    configurable: true
                });
                ListView.prototype.getData = function () {
                    var _this = this;
                    this._dataService.getData().then(function (d) {
                        _this._rows = d;
                        _this.headers = Object.keys(d[0]);
                        _this.processRows();
                    });
                };
                ListView.prototype.processRows = function () {
                    var doubleRows = [];
                    var d = this._rows;
                    for (var i = 0; i < d.length; i++) {
                        doubleRows.push(d[i]);
                        doubleRows.push({ extraRow: true });
                    }
                    this._sortedRows = doubleRows;
                };
                ListView.templateUrl = TEMPLATEURL; //so children can make use of it directly
                ListView.cssUrl = CSSURL;
                ListView = __decorate([
                    core_1.Component({
                        selector: 'gw-listview',
                        templateUrl: TEMPLATEURL,
                        directives: [],
                        styleUrls: [CSSURL],
                        inputs: [],
                        providers: [data_service_1.DataService]
                    }), 
                    __metadata('design:paramtypes', [data_service_1.DataService])
                ], ListView);
                return ListView;
            })();
            exports_1("ListView", ListView);
        }
    }
});
//# sourceMappingURL=listview.component.js.map