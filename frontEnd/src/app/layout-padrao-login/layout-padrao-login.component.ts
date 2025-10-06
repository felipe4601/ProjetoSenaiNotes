import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-layout-padrao-login',
  templateUrl: './layout-padrao-login.component.html',
  styleUrls: ['./layout-padrao-login.component.css']
})
export class LayoutPadraoLoginComponent {

  @Input() title: string ="";
  @Input() primaryBtnText: string ="";
  @Input() secondaryBtnText: string="";
  @Input() disablePrimaryBtn: boolean =true;
  @Output("submit") onSubmit = new EventEmitter();
  @Output("navigate") onNavigate = new EventEmitter();



  submit(){
    this.onSubmit.emit();
  }


   navigate(){
    this.onNavigate.emit();
  }

}
