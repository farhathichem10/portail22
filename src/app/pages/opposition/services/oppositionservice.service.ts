import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenStorage } from 'src/app/core/services/token-storage.service';
const AUTH_API = 'http://192.168.2.232:8080';

@Injectable({
  providedIn: 'root'
})
export class OppositionserviceService {

  constructor(private http: HttpClient,public token:TokenStorage) { 



  }

  
  fetchCessionPers(params :any){

    return this.http.post<any[]>(AUTH_API + '/cessionpers/cessionPersLig',params)
  
    
   }

   fetchListCodPret(codSoc : any ,matPers:any){

    return this.http.get<any[]>(AUTH_API + '/getlistpret/getlistpret/'+codSoc+"/"+matPers)
  
    
   }
   




}
