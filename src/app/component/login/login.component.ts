import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ILogin } from 'app/interfaces/login.metadata';
import { ApiService } from 'app/services/api.service';
import { LoginService } from 'app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  usuario :ILogin = {
    email: '',
    contrasenia: '',
    id:-1,
    nombre:''
  }
  datoUsuario? :ILogin;

  valido?:boolean;

  constructor(
    private loginService: ApiService, //Renombrar como apiService
    private router: Router,
    private login: LoginService
    ) { }

  ngOnInit(): void {
  }

  Ingresar(){
    this.loginService.authLogin(this.usuario)
    .subscribe((res:any)=>{
      this.datoUsuario = res;
      //console.log(res)
      console.log(this.datoUsuario);
      if(this.datoUsuario?.estado){
        this.login.changeMessage(this.datoUsuario.id);
        this.login.changeCliente(this.datoUsuario.nombre);
        this.router.navigate(['/panelDeControl']);
      }
    });
  }

}
//this.router.navigate(['/panelDeControl'])
//