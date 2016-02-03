import {Component, OnInit} from 'angular2/core';
import {VehicleListView} from './components/vehicle.listview/vehicle.listview.component';
import {AddressListView} from './components/address.listview/address.listview.component';
import {Server} from './mocks/wave1server.service';

@Component({
  directives: [VehicleListView, AddressListView],
  selector: 'my-app',
  template: `
      <div class="main">
        <div class="holder">
          <gw-vehicle-listview></gw-vehicle-listview>
        </div>
        <div class="holder">
          <gw-address-listview></gw-address-listview>
        </div>
      </div>
    `,
    
  styles: [],
  providers: [Server]
})

export class AppComponent implements OnInit {

  ngOnInit() {
  }
  
  public title = 'GW APP';
  
  
  constructor(){
    
  };
}