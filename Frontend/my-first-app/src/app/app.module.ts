import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyCard } from './PropertyCard/PropertyCard.component';
import { PropertyListComponent } from './PropertyCard/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';


@NgModule({
  declarations: [	
    AppComponent,
    PropertyCard,
    PropertyListComponent,
      NavBarComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
