import {Injectable} from '@angular/core';

import {Links} from './links';
import {LINKS} from './links-content';

@Injectable()
export class LinksService {

    constructor() {}

    _promise(): Promise<Links[]> {
        return Promise.resolve(LINKS);
    }

    get(): Promise<any> {
        return new Promise(resolve => {
            return resolve(this._promise());
        });
    }
}