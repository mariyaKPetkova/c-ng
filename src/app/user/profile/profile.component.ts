import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent  {
  
  get username(): string {
    return this.userService.user?.username || '';
  }
  constructor(
    private userService: UserService,
  ) { }

  
}
