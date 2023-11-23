import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Posto } from './posto';

@Injectable({
  providedIn: 'root'
})
export class PostoService {

  private URL = 'http://localhost:9090/posto'

  constructor(private http: HttpClient) { }

  public getAll(){
    return this.http.get<Posto[]>(this.URL);
  }
  
public insert(posto: Posto){
  return this.http.post<Posto>(this.URL, posto);
}

getbyid(id: number){
  const newUrl = `${this.URL}/${id}`;
  return this.http.get<Posto>(newUrl);
}

public update(posto: Posto){
  const newUrl = `${this.URL}/${posto.id}`;
  return this.http.put<Posto>(newUrl, posto);
}

public delete(id: number){
  const newUrl = `${this.URL}/${id}`;
  return this.http.delete<Posto>(newUrl);

}

}