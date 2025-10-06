import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { tap } from 'rxjs';
import { LoginResponse } from '../../types/login-response';
@Injectable({
  providedIn: 'root'
})
export class SignupService {

  apiUrl: string = "http://localhost:8080/api/usuario"
 constructor(private httpClient: HttpClient){

  }

signup(email: string, senha: string, nome:string){
    return this.httpClient.post<LoginResponse>(this.apiUrl, {email, senha, nome}).pipe(
      tap((value) => {
        sessionStorage.setItem("auth-token", value.token)

      })
    )
    }
}
