import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from '@progress/kendo-angular-notification';
import { first } from 'rxjs';
import { AccountService } from '../_services/userServices';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {

  loginForm!: FormGroup;
  isLoading: boolean = false;
  show = faEye as IconProp;
  hide = faEyeSlash as IconProp;
  encryptPassword = true;
  remember = false;
  submitButtonText = "Login"
  remembermeText = "Remember me";
  constructor(
    private accountService: AccountService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toast: NotificationService
  ) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      phoneNo: ['', Validators.required],
      password: ['', Validators.required],
      remember: ['']
    });
  }

  get f() { return this.loginForm.controls; }

  ngOnLoginSubmit(): void {
    this.isLoading = true;
    this.submitButtonText = "Loading";
    this.accountService.login(this.f['phoneNo'].value, this.f['password'].value)
      .pipe(first())
      .subscribe({
        next: (user) => {
          this.isLoading = false;
          this.submitButtonText = "Submit";
          console.log(user);
          localStorage.setItem('token', user.token);
          this.toast.show({
            content: "Successfully logged in!",
            hideAfter: 600,
            position: { horizontal: "right", vertical: "top" },
            animation: { type: "fade", duration: 400 },
            type: { style: "success", icon: true },
          })
          this.router.navigateByUrl('second');
        },
        error: error => {
          this.isLoading = false;
          this.submitButtonText = "Submit";
          this.toast.show({
            content: error.error.title != null ? error.error.title : (typeof error.error) == 'string' ?  error.error : "Something went wrong",
            hideAfter: 600,
            position: { horizontal: "right", vertical: "top" },
            animation: { type: "fade", duration: 400 },
            type: { style: "error", icon: true },
          });
          console.log(error);
        }
      });
  }

  rememberEvent(_remember: boolean) {
    this.f['remember'].setValue(_remember);
    this.remember = _remember;
  }

  passwordShow() {
    this.encryptPassword = !this.encryptPassword;
  }

}
