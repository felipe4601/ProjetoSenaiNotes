import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { tap } from 'rxjs';
import { LoginResponse } from '../../types/login-response';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiUrl: string = "http://localhost:8080/api/auth"

  constructor(private httpClient: HttpClient){

  }
  login(email: string, senha:string){
    return this.httpClient.post<LoginResponse>(this.apiUrl, {email, senha}).pipe(
      tap((value) => {
        sessionStorage.setItem("auth-token", value.token)
      })
    )
    }
}
