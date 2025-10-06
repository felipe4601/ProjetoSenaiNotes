import { Component, OnInit,Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
type InputTypes = "text" | "email" | "password"
@Component({
  selector: 'app-primaryInput',
  templateUrl: './primaryInput.component.html',
  styleUrls: ['./primaryInput.component.css'],
  imports:[ReactiveFormsModule],
  providers:[
    {
      provide:NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PrimaryInputComponent),
      multi:true
    }
  ]
})
export class PrimaryInputComponent implements ControlValueAccessor{
// Recebendo propriedades da classe mãe
@Input() type: InputTypes = "text";
@Input() placeholder: string ="";
@Input() label: string = "";
@Input() inputName: string = "";

value: string =''
onChange: any = () => {}
onTouched: any = () => {}

onInput(event: Event){
  const value = (event.target as HTMLInputElement).value
  this.onChange(value)
}

writeValue(value: any): void {
  this.value = value
}
registerOnChange(fn: any): void {
  this.onChange = fn
}

registerOnTouched(fn: any): void {
  this.onTouched = fn
}

setDisabledState(isDisabled: boolean): void {

}

}
