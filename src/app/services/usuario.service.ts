import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url='https://gorest.co.in/public/v2/users';
  token='0beb3d1ad7aca5c35ddcd7fcb04944daaa2de741cfe308eb8825588044a8df49';
  constructor(private httpClient:HttpClient) { }
  getUsuarios():Observable<any>{
    return this.httpClient.get<any>(this.url+'?access-token='+this.token);
  }
  getUsuario(id:number):Observable<any>{
    return this.httpClient.get<any>(this.url + '/'+id + '?access-token='+this.token);
  }
}
