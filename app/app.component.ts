import {Component} from 'angular2/core';
import {Thing} from './thing';
import {ThingDetailComponent} from './thing-detail.component';

@Component({
  directives: [ThingDetailComponent],
  selector: 'my-app',
  template:`
    <h1>{{title}}</h1>
    <my-thing-detail [thing]="selectedThing"></my-thing-detail>
    <h2>My Things</h2>
    <ul class="things">
      <li *ngFor="#thing of things" [class.selected]="thing === selectedThing" (click)="onSelect(thing)">
        <span class="badge">{{thing.id}}</span> {{thing.name}}
      </li>
    </ul>
    `,
  styles:[`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .things {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 10em;
  }
  .things li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0em;
    height: 1.6em;
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
    padding: 0.8em 0.7em 0em 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0px 0px 4px;
  }
`]
})

export class AppComponent{
  public title = 'GW APP';
  public selectedThing: Thing;
  public things = THINGS; //this infers its type from the strongly typed array
  
  onSelect(thing: Thing){ this.selectedThing = thing;};
  
}


var THINGS: Thing[] = [
  { "id": 11, "name": "Mr. Nice" },
  { "id": 12, "name": "Narco" },
  { "id": 13, "name": "Bombasto" },
  { "id": 14, "name": "Celeritas" },
  { "id": 15, "name": "Magneta" },
  { "id": 16, "name": "RubberMan" },
  { "id": 17, "name": "Dynama" },
  { "id": 18, "name": "Dr IQ" },
  { "id": 19, "name": "Magma" },
  { "id": 20, "name": "Tornado" }
];








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