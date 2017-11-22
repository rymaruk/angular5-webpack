import { Component, ViewChild, ElementRef, OnInit, Renderer, HostListener } from '@angular/core';
import { AppService } from "../services/app.service";

@Component({
    moduleId: module.id + ``,
    selector: 'top-panel',
    templateUrl: './top-panel.component.html',
    styleUrls: ['./top-panel.component.scss']
})

export class AppTopPanel implements OnInit {

    // Boolean
    private booleanFlag: Boolean;

    ngOnInit(): void {
        // Init
        this.booleanFlag = false;
    }

    // Constructor
    constructor ( private elementRef: ElementRef, private appService: AppService ) { }

    // Show / hidden popup
    private toggle():void {
        this.appService.setToggle(this.booleanFlag = !this.booleanFlag);
    }
}