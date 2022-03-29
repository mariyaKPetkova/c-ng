import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CardService } from '../card.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  constructor(
    private contentService: CardService,
    private router: Router
  ) { }

  createHandler(form: NgForm): void{
   console.log(form);
   if (form.invalid) { return; }
   this.contentService.saveCard(form.value).subscribe({
     next: () => {
       this.router.navigate(['/']);
     },
     error: (err) => {
       console.log(err);
     }
   })
 }

}
