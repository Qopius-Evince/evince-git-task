import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError} from 'rxjs/operators';
import { AbstractService } from './abstract.service';

@Injectable({
  providedIn: 'root'
})
export class RepoService extends AbstractService {

  constructor(protected http: HttpClient) {
    super(http);
  }
  getAllCommits() {
    return this.http.get<[]>(`${this.apiUrl}/repos/Qopius-Evince/evince-git-task/commits`, {})
    .pipe(catchError(this.handleError));
  }
}
