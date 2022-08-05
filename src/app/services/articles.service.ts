import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private httpClient: HttpClient) { }

  getData(): Observable<any>{
    let res = this.httpClient.get('https://social.runwayclub.dev/api/articles/latest?page=1&per_page=10')
    return res
  }

}
