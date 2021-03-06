import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CardService } from './card.service';
import { CardComponent } from './card/card.component';
import { UserModule } from './user/user.module';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CatalogComponent,
    CardComponent,
    CreateComponent,
    DetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    UserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [
    CardService
  ],
  bootstrap: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class AppModule { }
