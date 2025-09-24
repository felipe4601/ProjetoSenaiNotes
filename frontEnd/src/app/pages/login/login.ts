import { Component } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule, Validators , FormBuilder} from '@angular/forms';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login implements OnInit{
  logotipo: string = 'logo.png';
    loginForm!: FormGroup;
    senhaVisivel: boolean = false;
    tipo: string[] = ['password', 'text'];
    iconVisibilidadeSenha: string = 'visibility_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png'
    // Método para alternar a visibilidade da senha
    alternarVisibilidadeSenha(): void {
      const anterior = this.tipo
      for (let index = 0; index < this.tipo.length-1; index++) {
        const anterior = this.tipo[index];



      }
    }

    constructor(
      private formBuilder: FormBuilder
    ){}
    ngOnInit(): void{
      this.loginForm = this.formBuilder.group({
        email:['', Validators.required, Validators.email],
        password:['', Validators.required, Validators]
      })
    }


}
