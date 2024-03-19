import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  constructor(
    private httpClient: HttpClient
  ) { }

  // public registerStaff(staffReg: any): Observable<any> {
  //   return this.httpClient.post<any>(`${environment.baseUrl}/api/v1/auth/register`, staffReg);
  // }
  public updateStaff(userId: any, staffUpdate: any, accessToken: any): Observable<any> {
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${accessToken}`);
    return this.httpClient.put<any>(`${environment.baseUrl}/api/v1/staff/update/by/userId/${userId}`, staffUpdate, { headers: headers });
  }
  // public getAllStaff(): Observable<any>{
  //   return this.httpClient.get<any>(`${environment.baseUrl}/api/v1/serviceProvider/get/all`);
  // }
  // add a function to create teller in the database
  public addTeller(teller: any): Observable<any> {
    return this.httpClient.post<any>(`${environment.baseUrl}/api/v1/tellers/add`, teller);
  }
  //create function read all tellers from the database and display it as a list
  // public getAllTellers(): Observable<any>{
  //   return this.httpClient.get<any>(`${environment.baseUrl}/api/v1/tellers/getAll`);
  // }
  public getAllTellers(): Observable<any>{
    return this.httpClient.get<any>(`${environment.baseUrl}/api/v1/tellers/getAll`)
  }
  public getAllTransactions(): Observable<any>{
    return this.httpClient.get<any>(`${environment.baseUrl}/api/v1/Transaction/getAllTransactions`)
  }
  // getTellers(): Observable<any[]> {
  //   return this.httpClient.get<any[]>('http://your-backend-api-url/tellers');
  // }
}
