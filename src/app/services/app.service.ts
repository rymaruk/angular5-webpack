import {Output, EventEmitter, Injectable} from "@angular/core";
import {Observable as RxObservable} from "rxjs/Observable";

@Injectable()
export class AppService {

    @Output() toggle = new EventEmitter<Boolean>();

    constructor () {}

    setToggle ( _arg: Boolean ) {
        this.toggle.next(_arg);
    }

}