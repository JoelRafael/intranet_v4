import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import {HttpClient,  HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CluballService {

  constructor(private httpClient:HttpClient) { }


agregandoclienteclub(clineteclub:any){
  let json=JSON.stringify(clineteclub);
let headers=new HttpHeaders().set('Content-Type', 'application/json');
return this.httpClient.post("http://homestead.test/api/clienteclub", json, {headers: headers});
}


obtenerquest(): Observable<any>{

  return this.httpClient.get("http://homestead.test/api/clienteclub");
}
}
