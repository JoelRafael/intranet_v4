import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './pages/main/header/header.component';
import { FooterComponent } from './pages/main/footer/footer.component';
import { MenuSidebarComponent } from './pages/main/menu-sidebar/menu-sidebar.component';
import { BlankComponent } from './views/blank/blank.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './views/profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ToastrModule } from 'ngx-toastr';
import { MessagesDropdownMenuComponent } from './pages/main/header/messages-dropdown-menu/messages-dropdown-menu.component';
import { NotificationsDropdownMenuComponent } from './pages/main/header/notifications-dropdown-menu/notifications-dropdown-menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppButtonComponent } from './components/app-button/app-button.component';

import { registerLocaleData } from '@angular/common';
import localeEn from '@angular/common/locales/en';
import { UserDropdownMenuComponent } from './pages/main/header/user-dropdown-menu/user-dropdown-menu.component';

import { ApiService } from './utils/services/index';
import { ClientclubComponent } from './views/clientclub/clientclub.component';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {InputTextModule} from 'primeng-lts/inputtext';
import {TabViewModule} from 'primeng-lts/tabview';
import { PanelClientClubComponent } from './views/panel-client-club/panel-client-club.component';
import {ButtonModule} from 'primeng-lts/button';
import {MatTabsModule} from '@angular/material/tabs';
import {ToastModule} from 'primeng-lts/toast';
import {InputMaskModule} from 'primeng-lts/inputmask';
import { NgxMaskModule, IConfig } from 'ngx-mask';


import { ClubdatatableComponent } from './views/clubdatatable/clubdatatable.component';
export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;




let services = [ApiService];

registerLocaleData(localeEn, 'en-EN');

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    MenuSidebarComponent,
    BlankComponent,
    ProfileComponent,
    RegisterComponent,
    DashboardComponent,
    MessagesDropdownMenuComponent,
    NotificationsDropdownMenuComponent,
    AppButtonComponent,
    UserDropdownMenuComponent,
    ClientclubComponent,
    PanelClientClubComponent,
    ClubdatatableComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    NgbModule,
    HttpClientModule,
    MatInputModule,
    MatSelectModule,
    InputTextModule,
    TabViewModule,
    ButtonModule,
    MatTabsModule,
    ToastModule,
    //InputMaskModule,
    NgxMaskModule.forRoot({dropSpecialCharacters:false}),
  ],
  providers: [...services],
  bootstrap: [AppComponent],
})
export class AppModule {}
