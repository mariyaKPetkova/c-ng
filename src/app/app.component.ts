import { Component } from '@angular/core';
import { ICard} from './interfaces/'
import { UserService } from './user/user.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  recentPosts: ICard[] | undefined;

  toggleTemplate = false;

  get isAuthenticating(): boolean {
    return this.userService.user === undefined;
  }

  constructor(
    private userService: UserService
  ) {
    this.userService.getProfileInfo().subscribe({
      error: () => {
        this.userService.user = null;
      }
    })
  }
}
