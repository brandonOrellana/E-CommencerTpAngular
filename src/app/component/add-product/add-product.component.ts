import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { INewProduct } from 'app/interfaces/newProduct.metadata';
import { ApiService } from 'app/services/api.service';
import { LoginService } from 'app/services/login.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  public id = 5;

  constructor(
    private apiService: ApiService,
    private login: LoginService
  ) { }

  ngOnInit(): void {
    this.login.idCliente.subscribe(msg => this.id = msg);
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
