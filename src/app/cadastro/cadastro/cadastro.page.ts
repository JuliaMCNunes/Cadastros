import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  cliente = {}
  clienteForm: FormGroup

  constructor(private cadastroBuilder: FormBuilder) { }

  submit(){
    if(this.clienteForm.invalid || this.clienteForm.pending){
      return}
      
    else{
      console.log(this.cliente)}
  }

  ngOnInit() {
    this.clienteForm = this.cadastroBuilder.group({
      nome: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(40), Validators.pattern('[a-zA-Z ""]*')])],
      cpf: ['', Validators.compose([Validators.required, Validators.minLength(14), Validators.maxLength(14)])],
      tele: ['', Validators.compose([Validators.required, Validators.minLength(17), Validators.maxLength(17)])]
    })
  }
}
