import { group } from '@angular/animations';
import { Component, OnInit, Input, ViewChild, AfterViewInit, ViewContainerRef, TemplateRef } from '@angular/core';
//import { DataItem } from './product';
//import {ClubtableService} from './../../utils/services/clubtableservice/clubtable.service';
//import { ConfirmationService } from 'primeng-lts/api';
//import { MessageService } from 'primeng-lts/api';
interface DataItem {
  pl: string;
  cedula: string;
  club: string;
  nombre: string;
  apellido: string;
  direccion: string;
  code: string;
  estatus: string;
}

@Component({
  selector: 'app-clubdatatable',
  templateUrl: './clubdatatable.component.html',
  styleUrls: ['./clubdatatable.component.scss'],
 
   })
   
export class ClubdatatableComponent implements OnInit {

  isVisible = false;
  isOkLoading = false;
  constructor() { 
    
  }

  ngOnInit() {
     
  }

  searchValue = '';
  visible = false;
  listOfData: DataItem[] = [
    {
      pl: 'PL08',
      cedula: "40235040074",
      club: '0000000000000',
      nombre:"Joel",
      apellido:"Paredes",
      direccion:"Calle Altagracia",
      code:"V08079473",
      estatus:"Activo"
    }
    
  ];
  listOfDisplayData = [...this.listOfData];

  reset(): void {
    this.searchValue = '';
    this.search();
  }

  search(): void {
    this.visible = false;
    this.listOfDisplayData = this.listOfData.filter((item: DataItem) => item.cedula.indexOf(this.searchValue) !== -1);

  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isOkLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isOkLoading = false;
    }, 3000);
  }

  handleCancel(): void {
    this.isVisible = false;
  }
}

  

