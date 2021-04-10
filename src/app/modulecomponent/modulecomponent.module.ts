import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { PanelClientClubComponent } from './../views/club/panel-client-club/panel-client-club.component';
import { ClientclubComponent } from './../views/club/clientclub/clientclub.component';
import { ClubdatatableComponent } from './../views/club/clubdatatable/clubdatatable.component';
import { InputTextModule } from 'primeng-lts/inputtext';
import { TabViewModule } from 'primeng-lts/tabview';
import { ButtonModule } from 'primeng-lts/button';
import { ToastModule } from 'primeng-lts/toast';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const viewcomponent=[PanelClientClubComponent,ClientclubComponent, ClubdatatableComponent  ]
/*const primeng = [InputTextModule, TabViewModule, ButtonModule, ToastModule];
const material = [MatTabsModule, MatInputModule, MatSelectModule];*/
export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;


@NgModule({
  declarations: [...viewcomponent],
  imports: [
    InputTextModule,
    TabViewModule,
    ToastModule,
    ButtonModule,
    MatTabsModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    CommonModule,
    NgxMaskModule.forRoot({ dropSpecialCharacters: false }),
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    BrowserAnimationsModule,
    BrowserModule 

  
    
  ],
  exports:[
    InputTextModule,
    InputTextModule,
    TabViewModule,
    ToastModule,
    ButtonModule,
    MatTabsModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
    ...viewcomponent,
    
   
  ]
})
export class ModulecomponentModule { }
