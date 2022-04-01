import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  API="http://localhost:3000"
  constructor(private _http:HttpClient) {}

  getRestroList(){
 return this._http.get(this.API+"/restro");
  }

  addRestro(restroData:any){
    return this._http.post(this.API+"/restro",restroData);
  }

  deleteRestro(id:any){
    return this._http.delete(this.API+"/restro/"+id);
  }

  getRestoDataUsingId(id:any){
    return this._http.get(this.API+"/restro/"+id);
  }

  updateRestro(id:any,data:any){
    return this._http.put(this.API+"/restro/"+id,data);
  }

  createUser(data:any){
    return this._http.post(this.API+"/user",data);
  }

}
