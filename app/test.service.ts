import {Injectable} from 'angular2/core'

@Injectable()
export class ParentService {
  public myString: string = "base";
  constructor(str?: any) {
    this.myString = str;
  }
}

@Injectable()
export class ChildService extends ParentService {
  constructor(){
    super("I AM CHILD");
  }
}