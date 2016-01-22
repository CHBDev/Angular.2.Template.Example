import {Component, OnInit} from 'angular2/core';
import {Thing} from './thing';
import {ThingDetailComponent} from './thing-detail.component';
import {ThingService} from './thing.service';
import {ThingFormComponent} from './thing-form.component';
import {HelpComponent} from './little-tour.component';





@Component({
  directives: [ThingDetailComponent, ThingFormComponent, HelpComponent],
  selector: 'my-app',
  template: `
    <help></help>
    <h1>{{title}}</h1>
    <thing-form></thing-form><br>
    
    <my-thing-detail [thing]="selectedThing"></my-thing-detail>
    <h2>My Things</h2>
    <div *ngIf="!things">...Loading Things...</div>
    <div *ngIf="things && things.length > 2">... There are {{things.length}} things...</div>
    <ul class="things">
      <li *ngFor="#thing of things" [class.selected]="thing === selectedThing" (click)="onSelect(thing)">
        <span class="badge">{{thing.id}}</span> {{thing.name}} <span class="r-badge">{{thing.color}}</span>
      </li>
    </ul>
    `,
  styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .things {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    min-width: 10em;
    width: 25em;
  }
  .things li {
    cursor: pointer;
    
    
    background-color: #EEE;
    margin: .5em;
    
    
    border-radius: 4px;
  }
  .things li.selected:hover {
    color: white;
  }
  .things li:hover {
    color: #607D8B;
    background-color: #EEE;
    left: .1em;
  }
  .things .text {
    position: relative;
    top: -3px;
  }
  .things .badge {
    display: inline-block;
    font-size: small;
    color: white;
    background-color: #607D8B;
    line-height: 1em;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0px 0px 4px;
  }
  .things .r-badge {
    vertical-align: middle;
    text-align: center;
    width: 9em;
    height: 1.8em;
    line-height: 1em;
    float: right;
    display: inline-block;
    background-color: #607D88;
    border-radius: 0px 4px 4px 0px;
  }
`],
  providers: [ThingService]
})

export class AppComponent implements OnInit {

  ngOnInit() {
    this.getThings();
  }
  public title = 'GW APP';
  public selectedThing: Thing;
  public things: Thing[]; //this infers its type from the strongly typed array
  
  constructor(private _thingService: ThingService){
  };
  
  // public thingService: ThingService = new ThingService("test me");
  // public thing2Service: Thing2Service = new Thing2Service();

  onSelect(thing: Thing) { this.selectedThing = thing; };

  getThings() {
    this._thingService.getThingsDelayed().then(things => this.things = things);
  }


}


// (function(app) {
//   app.AppComponent =
//     ng.core.Component({
//       selector: 'my-app',
//       template: '<h1>My NEXT BIG THING</h1>'
//     })
//     .Class({
//       constructor: function() {}
//     });
// })(window.app || (window.app = {}));