import {Component} from 'angular2/core';
import {ListView} from '../listview/listview.component';
import {AddressService} from '../../mocks/addresses.service';

@Component({
  selector: 'gw-address-listview',
  templateUrl: './app/components/' + 'listview/listview.html',
  directives: [],
  styles: [],
  inputs: [],
  providers: [AddressService]
})

export class AddressListView extends ListView {
  
  constructor(){
    super(new AddressService());
  }
}