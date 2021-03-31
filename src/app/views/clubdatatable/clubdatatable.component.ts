import { group } from '@angular/animations';
import { Component, OnInit, Input, ViewChild, AfterViewInit, ViewContainerRef, TemplateRef } from '@angular/core';
//import { DataItem } from './product';
//import {ClubtableService} from './../../utils/services/clubtableservice/clubtable.service';
//import { ConfirmationService } from 'primeng-lts/api';
//import { MessageService } from 'primeng-lts/api';
interface DataItem {
  name: string;
  age: number;
  address: string;
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

  searchValue = '';
  visible = false;
  listOfData: DataItem[] = [
    {
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    },
    {
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park'
    }
  ];
  listOfDisplayData = [...this.listOfData];

  reset(): void {
    this.searchValue = '';
    this.search();
  }

  search(): void {
    this.visible = false;
    this.listOfDisplayData = this.listOfData.filter((item: DataItem) => item.name.indexOf(this.searchValue) !== -1);
  }
}

  

