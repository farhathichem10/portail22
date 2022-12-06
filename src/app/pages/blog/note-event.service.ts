import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NoteEventService {

  constructor(  private http:HttpClient) { }
  getall(){


    return this.http.get('http://192.168.2.95:8080/noteevent/getall')
  }
  getbyid(id:number){


    return this.http.get('http://192.168.2.95:8080/noteevent/getbyid/'+id)
  }
  download(file: number | undefined): Observable<Blob> {
    return this.http.get('http://192.168.2.95:8080/noteevent/files/'+file, {
      responseType: 'blob'
    });
  }
}
