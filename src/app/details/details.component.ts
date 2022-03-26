import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../card.service';
import { ICard } from '../interfaces';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
card: ICard | undefined
  constructor(
    private contentService: CardService,
    private activateRouter: ActivatedRoute
  ) {
    this.fetchDetails()
   }
   
   fetchDetails(): void {
  const id = this.activateRouter.snapshot.params?.['id']
  this.contentService.loadCard(id).subscribe(card => this.card = card)  
}

}
