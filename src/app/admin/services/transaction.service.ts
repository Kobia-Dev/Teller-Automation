import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenStorageService } from 'src/app/core/service/token-storage.service';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  enable(value: any) {
    throw new Error('Method not implemented.');
  }

  constructor(
    private httpClient: HttpClient
  ) { }

//this function is not working  
  public updateTeller(tellerId: any, accessToken: any): Observable<any> {
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${accessToken}`);
    return this.httpClient.put<any>(`${environment.baseUrl}/api/v1/tellers/modify/${tellerId}`, { headers: headers });
  }
  
  // add a function to create teller in the database
  public addTeller(teller: any): Observable<any> {
    return this.httpClient.post<any>(`${environment.baseUrl}/api/v1/tellers/add`, teller);
  }
  
  public getAllTellers(): Observable<any>{
    return this.httpClient.get<any>(`${environment.baseUrl}/api/v1/tellers/getAll`)
  }
  public getAllTransactions(): Observable<any>{
    return this.httpClient.get<any>(`${environment.baseUrl}/api/v1/Transaction/getAllTransactions`)
  }
  public getAllWithdrawals(): Observable<any>{
    return this.httpClient.get<any>(`${environment.baseUrl}/api/v1/Transaction/getAllWithdrawals`);
  }
  public getAllDeposits(): Observable<any>{
    return this.httpClient.get<any>(`${environment.baseUrl}/api/v1/Transaction/getDeposits`);
  }

  ///api/v1/gl/getAll
  getAllGls(): Observable<any>{
    const url = `${environment.baseUrl}/api/v1/gl/getAll`
    return this.httpClient.get<any>(url);
  }
  
  //create function to get transactions per tellers pfNumber
  getTellerTransaction(pfNumber: number): Observable<any> {
    return this.httpClient.get<any>(`${environment.baseUrl}/api/v1/Transaction/getTransactionByPf?pfNumber=${pfNumber}`);
  }
  
}
