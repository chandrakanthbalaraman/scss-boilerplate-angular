
import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-card-comp',
    templateUrl: './cards.component.html',
    styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
    themeTypeArr: Array<string> = [];
    constructor() { 
        this.themeTypeArr = ["primary","secondary","success","info","warning","danger","light","dark"]
    }

    ngOnInit() { 
        
    }

    
}