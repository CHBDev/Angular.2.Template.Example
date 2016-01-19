import {Component} from 'angular2/core';
import {Thing} from './thing';
@Component({
  selector: 'my-thing-detail',
  template: `
     <div *ngIf="thing">
      <h2>{{thing.name}} details!</h2>
      <div><label>id: </label>{{thing.id}}</div>
      <div>
        <label>name: </label>
        <div><input [(ngModel)]="thing.name" placeholder="name"></div>
      </div>
    </div>
    `,
  inputs: ['thing']
    
})
export class ThingDetailComponent{
  public thing: Thing;
}

