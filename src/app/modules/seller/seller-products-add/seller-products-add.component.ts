import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'app/services/api.service';
import { LoginService } from 'app/services/login.service';

@Component({
  selector: 'app-seller-products-add',
  templateUrl: './seller-products-add.component.html',
  styleUrls: ['./seller-products-add.component.scss']
})
export class SellerProductsAddComponent implements OnInit {

  public id = 5;

  constructor(
    private apiService: ApiService,
    private login: LoginService
  ) { 
    this.login.idCliente.subscribe(msg => this.id = msg);
  }

  ngOnInit(): void {
  }

  miFormulario = new FormGroup({
    nombre:new FormControl('',Validators.required),
    descripcion:new FormControl('',Validators.required),
    stock:new FormControl('',[Validators.required]),
    precio:new FormControl('',Validators.required),
    imagen:new FormControl('',Validators.required),
    categoria: new FormGroup({
      id: new FormControl("")
    }),
    vendedor: new FormGroup({
      id: new FormControl("")
    })

  })

  send():any{
    const product= JSON.parse(JSON.stringify(this.miFormulario.value));
    product.vendedor.id = this.id;
    console.log(product);
    this.apiService.addNewproduct(product)
    .subscribe((res:any) => {
      console.log(res);
    });
  }
}
