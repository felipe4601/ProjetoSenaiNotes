
import { Component } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule, Validators , FormBuilder, FormControl} from '@angular/forms';
import { OnInit } from '@angular/core';
import { LayoutPadraoLoginComponent } from '../../layout-padrao-login/layout-padrao-login.component';
import { PrimaryInputComponent } from '../../componentes/primaryInput/primaryInput.component';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../../services/login/login.service';


interface LoginForm {
  email: FormControl,
  senha: FormControl,
}
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, FormsModule, LayoutPadraoLoginComponent, PrimaryInputComponent],
  providers: [
    Login
  ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  loginForm!: FormGroup<LoginForm>;

  constructor(
    private router: Router,
    private loginService : LoginService,
    private toastrService: ToastrService
  ){
  this.loginForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required],),
    senha: new FormControl('', [Validators.required, Validators.minLength(6)],
)
  });
  }

  submit(){
      this.loginService.login(
        this.loginForm.value.email,
        this.loginForm.value.senha,
      ).subscribe({
        next: () => {
          this.toastrService.success("Login feito com sucesso");
          this.router.navigate(['/home'])
        },
        error: () => this.toastrService.error("Erro inesperado! Tente novamente mais tarde")

  })
  }

  navigate(){
    this.router.navigate(['signup'])
  }

}
