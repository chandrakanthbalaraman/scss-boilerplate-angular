
import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-label-comp',
    templateUrl: './labels.component.html',
    styleUrls: ['./labels.component.scss']
})
export class LabelsComponent implements OnInit {
    themeTypeArr: Array<string> = [];
    iconThemeColor:Array<any> = [];
    constructor() { 
        this.iconThemeColor = [
            {type:"primary",icon:'tasks'},
            {type:"secondary",icon:'times-circle'},
            {type:"success",icon:'random'},
            {type:"info",icon:'magnet'},
            {type:"warning",icon:'phone'},
            {type:"danger",icon:'twitter'},
            {type:"light",icon:'unlock'},
            {type:"dark",icon:'github'}
        ]
    }

    ngOnInit() { 
        
    }

    
}