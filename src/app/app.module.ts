import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplaycoursesComponent } from './displaycourses/displaycourses.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ContentproviderComponent } from './contentprovider/contentprovider.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplaycoursesComponent,
    NavbarComponent,
    HomeComponent,
    ContentproviderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
