import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  url = environment.baseUrl;

  constructor(
    private httpClient: HttpClient) { }

  public registerAdmin(adminReg: any): Observable<any> {
    return this.httpClient.post<any>(`${environment.baseUrl}/api/v1/auth/register`, adminReg);
  }

  public updateAdmin(userId: any, adminUpdate: any, accessToken: any): Observable<any> {
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${accessToken}`);
    return this.httpClient.put<any>(`${environment.baseUrl}/api/v1/admin/update/by/userId/${userId}`,adminUpdate, { headers: headers });
  }

  public logoutAdmin(token: any): Observable<any> {
    return this.httpClient.post<any>(`${environment.baseUrl}/api/v1/auth/logout`, token);
    
  }

  //http://192.168.89.54:7700/api/v1/auth/reset-password
  //  changePassword(request: any): Observable<any> {
  //   const url = `${environment.baseUrl}/api/v1/auth/reset-password`
  //   return this.httpClient.post<any>(url, request);
  // }

  changePassword(data: any){
    return this.httpClient.post(this.url + "/api/v1/auth/reset-password", data, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    })
  }

  forgotPassword(request: any): Observable<any> {
    const url = `${environment.baseUrl}/api/v1/auth/forgot/password`
    return this.httpClient.post<any>(url, request)
  }

  public getAllUsers(accessToken: any): Observable<any>{
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${accessToken}`);
      return this.httpClient.get<any>(`${environment.baseUrl}/api/v1/user/get/all`, { headers: headers })
  }
}