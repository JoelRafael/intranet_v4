import { group } from '@angular/animations';
import { Component, OnInit, Input, ViewChild, AfterViewInit, ViewContainerRef, TemplateRef } from '@angular/core';
import { Product } from './product';
import {ClubtableService} from './../../utils/services/clubtableservice/clubtable.service';
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

  
  constructor() { }

  ngOnInit() {
     
  }

  
}
