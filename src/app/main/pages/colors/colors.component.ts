
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-color-comp',
    templateUrl: './colors.component.html',
    styleUrls: ['./colors.component.scss']
})
export class ColorsComponent implements OnInit {
    colorVarArr: Array<string> = [];
    colorArr: Array<string> = [];
    constructor() { 
        this.colorArr = ["primary","secondary","success","info","warning","danger","light","dark"]
        this.colorVarArr = ["50","100","200","300","400","500","600","700","800","900","1000"]

    }

    ngOnInit() { }

}