import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { AccountService } from '../_services/userServices';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {

  loginForm!: FormGroup;
  remember = false;
  constructor(
    private accountService: AccountService,
    private formBuilder: FormBuilder,
    private router: Router
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
    this.accountService.login(this.f['phoneNo'].value, this.f['password'].value)
      .pipe(first())
      .subscribe({
        next: (user) => {
          console.log(user);
          // localStorage.setItem('token', user.Token);
          this.router.navigateByUrl('second');
        },
        error: error => {
          console.log(error);
        }
      });
  }

  rememberEvent(_remember:boolean)  {
    this.f['remember'].setValue(_remember);
    this.remember = _remember;
  }

}
