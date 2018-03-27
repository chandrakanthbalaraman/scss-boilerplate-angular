
import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../core/services/app.service';

@Component({
    selector: 'app-color-comp',
    templateUrl: './colors.component.html',
    styleUrls: ['./colors.component.scss']
})
export class ColorsComponent implements OnInit {
    colorVarArr: Array<string> = [];
    colorArr: Array<string> = [];
    themeColor:any;
    constructor(
        private appService: AppService
    ) { 
        this.colorArr = ["primary","secondary","success","info","warning","danger","light","dark"]
        this.colorVarArr = ["50","100","200","300","400","500","600","700","800","900","1000"]
        this.themeColor = {
                primary:"#1565C0",
                secondary: "#B39DDB",
                success: "#66BB6A",
                info: "#80CBC4",
                warning: "#FFA000",
                danger: "#b71c1c",
                light: "#616161",
                dark: "#212121"
        }

    }

    ngOnInit() {
        this.appService.convertScss(this.themeColor).subscribe(data=>{
            console.log("data",data);
        },err=>{

        });    
     }

}