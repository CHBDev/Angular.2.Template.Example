import {Component} from 'angular2/core'
@Component({
  template: `
    <input (keyup)="onKey($event)">
    <p>{{values}}</p>
    `
})

export class KeyUpComponent{
  values='';
  onKey(event:KeyboardEvent){
    this.values += (<HTMLInputElement>event.target).value + ' | ';
  }
}

//above is version that takes actual event object
//below is version where we've used local template variable

@Component({
  template: `
    <input #box (keyup)="onKey(box.value)">
    <p>{{values}}</p>
    `
})

export class KeyUpComponent_v2{
  values='';
  onKey(value:string){
    this.values += value + ' | ';
  }
}


//now using key filter syntax, as well as the blur event
@Component({
  template: `
    <input #box (keyup.enter)="values=box.value" (blur)="values=box.value">
    <p>{{values}}</p>
    `
})

export class KeyUpComponent_v3{
  values='';
}