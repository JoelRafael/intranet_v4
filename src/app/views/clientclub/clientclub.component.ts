import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validator, Validators} from '@angular/forms';
import {MessageService} from 'primeng-lts/api';

@Component({
  selector: 'app-clientclub',
  templateUrl: './clientclub.component.html',
  styleUrls: ['./clientclub.component.scss'],
  providers:[MessageService]
})
export class ClientclubComponent implements OnInit {

validator:any={
  club:'', cedula:'', code:'', nombre:'', apellido:'', telefono:'',
  celular:'', direccion:'', ciudad:'', email:'', status:'', tienda:''

};
formregistreclub:FormGroup;

  constructor(private formbuilder:FormBuilder, private messageService: MessageService) {
    this.formregistreclub=this.formbuilder.group({
      club:["",  [Validators.required]],
      cedula:["", [Validators.required, Validators.minLength(8), Validators.maxLength(11) ]],
      code:["",  [Validators.required]],
      nombre:["", [Validators.required]],
      apellido:["", [Validators.required]],
      telefono:["", [Validators.required]],
      celular:["", [Validators.required ]],
      direccion:["", [Validators.required]],
      ciudad:["", [Validators.required]],
      email:["",  [Validators.required, Validators.email, Validators.pattern("[^@]*@[^@]*")]],
      status:["", [Validators.required]],
      tienda:["", [Validators.required]]


    })
  }

  ngOnInit(): void {
  }
onSubmit(paramnt){



  if(this.formregistreclub.valid){
    console.log(this.validator);
    this.messageService.add({severity:'success', summary:'Exito :)', detail:'Bienvenido a la familia Plaza Lama'});
  }
  else{
    this.messageService.add({severity:'error', summary:'Error :(', detail:'Todos los campos son requeridos'});
    this.formregistreclub.markAllAsTouched();
  }
}
clear() {
  this.messageService.clear();
}


}
