import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent  {
  
  
  inEdit = false;

  get user() {
    return this.userService.user;
  }

  constructor(private userService: UserService) { }

  updateProfile(form: NgForm): void {
    if (form.invalid) { return; }
    this.userService.updateProfile(form.value).subscribe({
      next: () => {
        this.inEdit = false;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  
}
