import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee-list/employee';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url = "http://localhost:51926/api/employees";
  constructor(private http: HttpClient) { }

  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url)
      .catch(this.errorHandler);
  }

  errorHandler(error: HttpErrorResponse) {
    console.error(error);
    return Observable.throw(error.message || "Server Error");
  }
}
