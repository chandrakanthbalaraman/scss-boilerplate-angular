import { Injectable } from '@angular/core';
import {HttpClient,HttpParams,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class AppService {
    constructor(private http: HttpClient){}

    getScss(path): Observable<any>{
        return this.http.get(path,{responseType: 'text'});
    }

    postCodes(data): Observable<any>{
        let path = "http://localhost:3000/convert-scss"
        let headers = new HttpHeaders();
        headers.set('Content-Type', 'application/json');
        return this.http.post(path,data,{headers:headers});
    }
   
}