import {Component} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {Thing} from './thing';

@Component({
  selector: 'thing-form',
  templateUrl: 'app/thing-form.component.html'
})

export class ThingFormComponent {
  colors = ['Yellow', 'Red', 'Green', 'Blue'];
  model = new Thing(27, 'A Thing Title', this.colors[0], 'San Francisco');
  submitted = false;
  onSubmit() { this.submitted = true; }
  
  //
  get diagnostic() { return JSON.stringify(this.model); }
}