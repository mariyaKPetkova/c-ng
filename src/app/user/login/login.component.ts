import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
 errorMessage: string =''
  constructor(
    private userService: UserService,
    private router : Router,

  ) { }

  loginHandler(form: NgForm): void{
    if (form.invalid) { return; }
    const { email, password } = form.value;
    this.userService.login({ email, password }).subscribe({
      next: () => {
        const redirectUrl = '/'
        this.router.navigate([redirectUrl])
      },
      error: (err) => {
        const errorMess = err.error.message;
        this.errorMessage = errorMess
        // alert(errorMess)
      }
    });
  }

}
