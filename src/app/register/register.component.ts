import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from '@progress/kendo-angular-notification';
import { first } from 'rxjs';
import { Register } from '../_models/register';
import { AccountService } from '../_services/userServices';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  signupForm!: FormGroup;
  isLoading: boolean = false;
  show = faEye as IconProp;
  hide = faEyeSlash as IconProp;
  encryptPassword = true;
  encryptCPassword = true;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private accountService: AccountService,
    private toast: NotificationService
  ) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      UserName: ['', Validators.required],
      RegNo: ['', Validators.required],
      email: ['', Validators.required],
      phoneNo: ['', Validators.required],
      passWord: ['', Validators.required],
      cpassWord: ['', Validators.required],
    });

  }

  passwordShow() {
    this.encryptPassword = !this.encryptPassword;
  }

  cpasswordShow() {
    this.encryptCPassword = !this.encryptCPassword;
  }

  get f() { return this.signupForm.value; }

  register(): void {
    this.isLoading = true;
    let user = new Register();
    user = this.f;
    if (user.passWord == this.signupForm.controls['cpassWord'].value) {
      this.accountService.register(user)
        .pipe(first())
        .subscribe({
          next: (data) => {
            if (data != null) {
              this.isLoading = false;
              this.router.navigateByUrl('');
              this.toast.show({
                content: "Successfully signed up!",
                hideAfter: 600,
                position: { horizontal: "right", vertical: "top" },
                animation: { type: "fade", duration: 400 },
                type: { style: "success", icon: true },
              });
            }
          },
          error: (error) => {
            console.log(error);
            this.isLoading = false;
            this.toast.show({
              content: error.error.title != null ? error.error.title : (typeof error.error) == 'string' ? error.error : "Something went wrong",
              hideAfter: 600,
              position: { horizontal: "right", vertical: "top" },
              animation: { type: "fade", duration: 400 },
              type: { style: "error", icon: true },
            });
          }
        }
        );
    } else {
      this.toast.show({
        content: "Confirm password does not match!",
        hideAfter: 600,
        position: { horizontal: "right", vertical: "top" },
        animation: { type: "fade", duration: 400 },
        type: { style: "error", icon: true },
      });
    }
  }

}
