import {Component} from 'angular2/core';
import {ListView} from '../listview/listview.component';
import {VehiclesService} from '../../mocks/vehicles.service';

@Component({
  selector: 'gw-vehicle-listview',
  templateUrl: './app/components/' + 'listview/listview.html',
  directives: [],
  styles: [],
  inputs: [],
  providers: [VehiclesService]
})

export class VehicleListView extends ListView {
  
  constructor(){
    super(new VehiclesService());
  }
}
