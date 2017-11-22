import { Component, OnInit } from '@angular/core';
import { LinksService } from '../services/links.service';
import { Links } from '../services/links';

@Component({
    moduleId: module.id + ``,
    selector: 'links',
    templateUrl: './links.component.html',
    styleUrls: ['./links.component.scss'],
})

export class AppComponentLinks implements OnInit {

    private links: Array<Links[]>;

    constructor (private linksServices: LinksService) {
        // Get content by page
        this.linksServices.get().then(data => {
            this.links = data[0].data;
        });

    }

    ngOnInit(): void { }
}
