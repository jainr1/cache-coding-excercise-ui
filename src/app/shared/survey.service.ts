import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable()
export class SurveyService {

  endpoint: string = 'survey';

  constructor(protected httpClient: HttpClient) { }

  get(): Observable<Object> {

    return this.httpClient
      .get(`${environment.backendUrl}/${this.endpoint}`);
  }
}
