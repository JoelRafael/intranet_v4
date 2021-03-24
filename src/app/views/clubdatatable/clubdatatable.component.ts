import { group } from '@angular/animations';
import { Component, OnInit, Input, ViewChild, AfterViewInit, ViewContainerRef, TemplateRef } from '@angular/core';
import { Product } from './product';
//import {ClubtableService} from './../../utils/services/clubtableservice/clubtable.service';
import { ConfirmationService } from 'primeng-lts/api';
import { MessageService } from 'primeng-lts/api';

@Component({
  selector: 'app-clubdatatable',
  templateUrl: './clubdatatable.component.html',
  styleUrls: ['./clubdatatable.component.scss'],
  styles: [`
        :host ::ng-deep .p-dialog {
            width: 150px;
            margin: 0 auto 2rem auto;
            display: block;
        }
    `],
    providers: [MessageService,ConfirmationService]
})
export class ClubdatatableComponent implements OnInit {

  productDialog: boolean;

  products: Product[];

  product: Product;

  selectedProducts: Product[];

  submitted: boolean;

  clientclub:any=[{
      pl:"PL08", cedula:"40235040074", club:"V00254784", nombre:"Joel Rafael", apellido:"Paredes Brioso", 
      direccion:"Calle Altagracia #21", code:"000000000", status:"Activo"
  }];

  constructor( private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit() {
     // this.productService.getProducts().then(data => this.products = data);
  }

 

  deleteSelectedProducts() {
      this.confirmationService.confirm({
          message: 'Are you sure you want to delete the selected products?',
          header: 'Confirm',
          icon: 'pi pi-exclamation-triangle',
          accept: () => {
              this.products = this.products.filter(val => !this.selectedProducts.includes(val));
              this.selectedProducts = null;
              this.messageService.add({severity:'success', summary: 'Successful', detail: 'Products Deleted', life: 3000});
          }
      });
  }

  editProduct(product: Product) {
      this.product = {...product};
      this.productDialog = true;
  }

  deleteProduct(product: Product) {
      this.confirmationService.confirm({
          message: 'Are you sure you want to delete ' + product.name + '?',
          header: 'Confirm',
          icon: 'pi pi-exclamation-triangle',
          accept: () => {
              this.products = this.products.filter(val => val.id !== product.id);
              //this.product = {};
              this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Deleted', life: 3000});
          }
      });
  }

  hideDialog() {
      this.productDialog = false;
      this.submitted = false;
  }

  saveProduct() {
     
  }




}
