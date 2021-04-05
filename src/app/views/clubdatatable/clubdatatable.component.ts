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


  constructor() { 
    
  }

  ngOnInit() {
     
  }

  
}

  

