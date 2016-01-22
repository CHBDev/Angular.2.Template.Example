import {Component} from 'angular2/core'
import {ParentService} from './test.service'
import {ChildService} from './test.service'

@Component({
  selector: 'my-app',
  template: `
  <div><h1>TESTING BASE</h1>
    <div *ngIf="parentService">
      <div>Parent Info: {{parentService.myString}}</div>
      <div>Child Info: {{childService.myString}}</div>
    </div>
  </div>
  `,
  providers: [ParentService, ChildService]
})

export class TestComponent {
  constructor(parentService: ParentService, childService: ChildService){
  }
}