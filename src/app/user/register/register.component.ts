import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(
    private userService: UserService,
    private router : Router
  ) { }

  registerHandler(form: NgForm): void{
    if (form.invalid) { return; }
    const { email, password, repeatpassword} = form.value;
    this.userService.register({ email, password}).subscribe({
      next: () => {
        const redirectUrl = '/'
        this.router.navigate([redirectUrl])
      },
      error: (err) => {
        console.log(err);
      }
    });
  
  }

}
