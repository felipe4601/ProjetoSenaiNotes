
import { Component } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule, Validators , FormBuilder, FormControl} from '@angular/forms';
import { OnInit } from '@angular/core';
import { LayoutPadraoLoginComponent } from '../../layout-padrao-login/layout-padrao-login.component';
import { PrimaryInputComponent } from '../../componentes/primaryInput/primaryInput.component';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { SignupService } from '../../services/signup/signup.service';

interface SignupForm {
  nome: FormControl,
  email: FormControl,
  senha: FormControl,
  confirmaSenha: FormControl
}
@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule, FormsModule, LayoutPadraoLoginComponent, PrimaryInputComponent],
  providers: [
    Signup
  ],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup {
  signupForm!: FormGroup<SignupForm>;

  constructor(
    private router: Router,
    private signupService : SignupService,
    private toastrService: ToastrService
  ){
  this.signupForm = new FormGroup({
    nome: new FormControl('', [Validators.minLength(3), Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    senha: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmaSenha: new FormControl('', [Validators.required, Validators.minLength(6)])
  });
  }

  submit(){
      this.signupService.signup(
        this.signupForm.value.email,
        this.signupForm.value.senha,
        this.signupForm.value.nome
      ).subscribe({
        next: () => this.toastrService.success("Cadastro feito com sucesso"),
        error: () => this.toastrService.error("Erro inesperado! Tente novamente mais tarde")

  })
  }

  navigate(){
    this.router.navigate(['/login'])
  }

}
