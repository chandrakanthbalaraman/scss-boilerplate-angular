
import { Component, OnInit } from '@angular/core';
import { AppService } from '../core/services/app.service';

@Component({
    selector: 'app-main-component',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
    parentPath:string = "./assets/partials/module/";
    baseFileName:string = "kui";
    fileExt:string = ".scss";
    constructor(
        private appService: AppService
    ) { }

    ngOnInit() { }

    getBaseFiles(){
        let fileArr = [];
        let baseFile = this.parentPath+this.baseFileName+this.fileExt;
        this.appService.getScss(baseFile).subscribe(data=>{
            var lines = data.split('\n');
            for(var line = 0; line < lines.length; line++){
                var find = ["@import",",",";","'"];
                var replace = ['','','',''];
                
                let fileNames = this.replaceStr(lines[line], find, replace);
                if(fileNames!=null && fileNames!=undefined && fileNames!=""){
                    fileArr.push(fileNames);
                }
                
            }
        },err=>{
            console.log("error on fetching Files");
        },
        ()=>{
            this.getFiles(fileArr);
        })
    }

    getFiles(fileArr){
        let scssCodes = [];
        let inr = 0;
        for(let name of fileArr){
            let scssFilePath = this.parentPath+name+this.fileExt;
            let filename = name.substring(name.lastIndexOf('/')+1);
            let prevDir = name.substring(0,name.lastIndexOf('/'));
            this.appService.getScss(scssFilePath).subscribe(data=>{
                    let obj = {
                        path:this.parentPath+prevDir,
                        name:filename,
                        ext:this.fileExt,
                        code:data
                    }
                    scssCodes.push(obj);
                    inr++;
                    if(inr==fileArr.length){
                        this.postScssCodes(scssCodes);
                        console.log("scssCodes",scssCodes);
                    }
            },err=>{
                console.log("error on fetching Files");
            });
        }
        
    }

    replaceStr(str, find, replace) {
        for (var i = 0; i < find.length; i++) {
            str = str.replace(new RegExp(find[i], 'gi'), replace[i]);
        }
        return str.trim();
    }
    
    postScssCodes(codes){
        this.appService.postCodes(codes).subscribe(data=>{
            console.log("data",data);
        },err=>{

        });    
    }
    
}