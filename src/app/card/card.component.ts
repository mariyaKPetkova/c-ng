import { Component, Input, OnInit } from '@angular/core';
import { ICard } from '../interfaces';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() card: ICard | undefined
  constructor() { }

  ngOnInit(): void {
  }

}
