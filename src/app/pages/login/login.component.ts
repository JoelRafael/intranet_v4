import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { AppService } from '../../utils/services/app.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { version } from './../../../../package.json';
import { ApiService, AppUrl } from './../../utils/services/index';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  public loginForm: FormGroup;
  public isAuthLoading = false;
  public appVersion = version;

  constructor(
    private renderer: Renderer2,
    private toastr: ToastrService,
    private appService: AppService,
    private api: ApiService
  ) {}

  ngOnInit() {
    this.renderer.addClass(document.querySelector('app-root'), 'login-page');
    this.loginForm = new FormGroup({
      user: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }

  login() {
    if (this.loginForm.valid) {
      this.api
        .getData(AppUrl.API_URL + 'auth_ctrl/get_login', this.loginForm.value)
        .subscribe(
          (res) => {
            if (!res.error) {
              this.appService.login();
            } else {
              this.toastr.warning(res.mensaje, 'Login!');
            }
          },
          (err) => {
            console.log(err);
          }
        );
    } else {
      this.toastr.error('Complete los campos!', 'Login!');
    }
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.querySelector('app-root'), 'login-page');
  }
}
