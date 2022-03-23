import { Component, OnInit } from '@angular/core';
import { CardService } from '../card.service';
import { ICard } from '../interfaces';
@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  cardList: ICard[] | undefined;

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    this.cardService.loadCardList().subscribe(list=>{
this.cardList = list
    })
  }

}
