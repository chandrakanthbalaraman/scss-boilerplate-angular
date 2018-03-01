
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-alert-comp',
    templateUrl: './alerts.component.html',
    styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {
    themeTypeArr: Array<string> = [];
    constructor() { 
        this.themeTypeArr = ["primary","secondary","success","info","warning","danger","light","dark"]

    }

    ngOnInit() { }

}