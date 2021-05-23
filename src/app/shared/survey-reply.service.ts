import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable()
export class SurveyReplyService {

  endpoint: string = 'survey/replies';

  constructor(protected httpClient: HttpClient) { }

  create(content: any): Observable<any> {

    console.log(JSON.stringify(content));
    let headers = new HttpHeaders().set('content-type', 'application/json')
    return this.httpClient
      .post(`${environment.backendUrl}/${this.endpoint}`, JSON.stringify(content), { headers: headers });
  }
}
