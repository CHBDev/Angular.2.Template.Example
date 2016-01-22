import {Component} from 'angular2/core'
//the keyup gets bound to nothing, to ensure that angular updates the bindings on every stroke, othewise interpolation won't be notified
@Component({
  selector: 'loop-back',
  template:`
    <input #box (keyup)="0">
    <p>{{box.value}}</p>
    `
})

export class LoopbackComponent{}