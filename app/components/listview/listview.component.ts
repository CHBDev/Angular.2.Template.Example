const CLOSEOTHERS = true;
const TEMPLATEURL = './app/components/' + 'listview/listview.html';
const CSSURL = './app/components/' + 'listview/listview.css';
//TODO: meta data that loads an icon
//hover state for rows
//whole row changes selected state
import {Component, OnInit} from 'angular2/core';
import {DataService} from '../../mocks/data.service';

@Component({
  selector: 'gw-listview',
  templateUrl: TEMPLATEURL,
  directives: [],
  styleUrls: [CSSURL],
  inputs: [],
  providers: [DataService]
})

export class ListView implements OnInit {
  static templateUrl: string = TEMPLATEURL; //so children can make use of it directly
  static cssUrl: string = CSSURL;
  public _searchCriteria:Object;
  public _rows:Array<Object>;
  public _sortedRows:Array<Object>;
  public _dataService: DataService;
  public headers: Array<string>;
  public sortedBy: string = "none";
  public isCollapsed: boolean = true;
  
  
  collapserClicked(){
    this.isCollapsed = !this.isCollapsed;
  }
  
  ngOnInit(){
    this.getData();
  }
  
  constructor( ds?: DataService){
    if(ds){
      this._dataService = ds
    }else{
      this._dataService = new DataService();
    }
  }
  
  getCellContent(rowObj: Object, header:string){
    let data = rowObj[header];
    if(header === "icon"){
      return ""; //TODO: look more at options here
      //return "<img src='" + data.src + "/>"
    }
    return data;
  }
  
  getHeaderString(header:string){
    if(header === "icon"){
      return "";
    }
    return header;
  }
  
  setExpanded(tr:any){
    if(tr.isExpanded){
      tr.isExpanded = false;
    }else{
      for(let i = 0, row:any; i < this._rows.length; i++){
        row = <any> this._rows[i];
        if(CLOSEOTHERS) row.isExpanded = false;
      }
      tr.isExpanded = true;
    }
  }
  
  refresh(){
    //TODO: do something with searchCriteria?
    this.getData();
  }
  
  sortRowsBy(str:string){
    if(str === "" || this.isCollapsed === true) return;
    this.sortedBy = str;
    
    var sortFunc = function(a:Object, b:Object){
      if(a[str] > b[str]) return 1;
      if(a[str] < b[str]) return -1;
      return 0;
    };
    //TODO: this is all bad, just creates new arrays and objects everytime
    //But I have been promised that this is throw away code...
    this._rows.sort(sortFunc);
    this.processRows();
  }
  
  get sortedRows(){
    this._sortedRows = this._sortedRows || this._rows;
    return this._sortedRows;
  }
  
  get searchCriteria(){
    return this._searchCriteria;
  }
    
  set searchCriteria(crit:Object){
    //TODO: not sure what gets done in code here if anything
    this._searchCriteria = crit;
  }
  
  getData(){
    this._dataService.getData().then((d:Array<Object>) => {
      this._rows = d;
      this.headers = Object.keys(d[0]);
      this.processRows();
    });
  }
  
  processRows(){
    let doubleRows:any = [];
    let d = this._rows;
    for(let i = 0; i < d.length; i++){
      doubleRows.push(d[i]);
      doubleRows.push({extraRow:true});
    }
    this._sortedRows = doubleRows;
  }
  
}