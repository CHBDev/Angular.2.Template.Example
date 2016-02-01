import {Component} from 'angular2/core';
import {ListView} from '../listview/listview.component';
import {AddressService} from '../../mocks/addresses.service';

@Component({
  selector: 'gw-address-listview',
  templateUrl: ListView.templateUrl,
  directives: [],
  styleUrls: [ListView.cssUrl],
  inputs: [],
  providers: [AddressService]
})

export class AddressListView extends ListView {
  
  constructor(){
    super(new AddressService());
  }
}