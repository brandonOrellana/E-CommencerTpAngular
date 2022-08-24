import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ICliente } from 'app/interfaces/cliente.metada';
import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public rol:string | undefined;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
  }

  miFormulario = new FormGroup({
    nombre:new FormControl('',Validators.required),
    apellido:new FormControl('',Validators.required),
    gmail:new FormControl('',[Validators.required,Validators.email]),
    telefono:new FormControl('',Validators.required),
    dni:new FormControl('',Validators.required),
    fechaNacimiento:new FormControl(''),
    direccion: new FormGroup({
      calle: new FormControl(''),
      ciudad: new FormControl(''),
      codigoPostal: new FormControl(''),
      pais: new FormControl('')
    }),
    cuenta: new FormGroup({
      usuario: new FormControl(''),
      contrasenia: new FormControl('')
    })
  })
  
  send():any{
    const cliente= JSON.parse(JSON.stringify(this.miFormulario.value));
    if(this.rol === "vendedor"){
      this.apiService.addNewVendedor(cliente)
      .subscribe((res:any) => {
        console.log(res);
      });
      }else{
        this.apiService.addNewCliente(cliente)
        .subscribe((res:any) => {
          console.log(res);
        });
      }
    }
  }
