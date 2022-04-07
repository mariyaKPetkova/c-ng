import { Component, Input, OnInit } from '@angular/core';
import { ICard } from '../interfaces';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() 
  card: ICard | undefined

  constructor(
    private userService: UserService
  ) { }
  isLog: boolean = this.userService.isLogged
  ngOnInit(): void {
  }

}
