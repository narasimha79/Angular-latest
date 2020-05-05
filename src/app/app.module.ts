import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Angular2SwapiModule} from 'angular2-swapi';
import { HerolistComponent } from './herolist/herolist.component';
import { HeaderComponent } from './header/header.component';
import { HerodetailsComponent } from './herodetails/herodetails.component';
import { FooterComponent } from './footer/footer.component';
import { HerosearchComponent } from './herosearch/herosearch.component';
import { FormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data-service.service';







@NgModule({
  declarations: [
    AppComponent,
    HerolistComponent,
    HeaderComponent,
    HerodetailsComponent,
    FooterComponent,
    HerosearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Angular2SwapiModule,
    FormsModule,
    InfiniteScrollModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
