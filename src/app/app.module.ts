import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplaycoursesComponent } from './displaycourses/displaycourses.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ContentproviderComponent } from './contentprovider/contentprovider.component';
import { AddcourseComponent } from './contentprovider/addcourse/addcourse.component';
import { SubcateroiesPipe } from './pipes/subcateroies.pipe';
import { MycoursesComponent } from './user/mycourses/mycourses.component';
import { AccountComponent } from './user/account/account.component';
import { MaincategoriesPipe } from './pipes/maincategories.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule,MatCardModule,MatButtonModule,MatToolbarModule, MatExpansionModule,MatCheckboxModule} from '@angular/material';
import { CourseComponent } from './course/course.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplaycoursesComponent,
    NavbarComponent,
    HomeComponent,
    ContentproviderComponent,
    AddcourseComponent,
    SubcateroiesPipe,
    MycoursesComponent,
    AccountComponent,
    MaincategoriesPipe,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
