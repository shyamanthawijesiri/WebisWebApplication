import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule,
         MatCardModule,
         MatButtonModule,
         MatToolbarModule,
         MatExpansionModule,
         MatCheckboxModule,
         MatFormFieldModule,
         MatAutocompleteModule,
         MatSelectModule,
         MatIconModule
        } from '@angular/material';
import { RatingModule } from 'ng-starrating';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplaycoursesComponent } from './displaycourses/displaycourses.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ContentproviderComponent } from './contentprovider/contentprovider.component';
import { AddcourseComponent } from './contentprovider/addcourse/addcourse.component';
import { MycoursesComponent } from './user/mycourses/mycourses.component';
import { AccountComponent } from './user/account/account.component';
import { CourseComponent } from './course/course.component';


import { MaincategoriesPipe } from './pipes/maincategories.pipe';
import { SubcateroiesPipe } from './pipes/subcateroies.pipe';
import { AdminComponent } from './admin/admin.component';
import { RecentAddedCourseComponent } from './admin/recent-added-course/recent-added-course.component';
import { UserComponent } from './admin/user/user.component';
import { TypePipe } from './pipes/type.pipe';
import { SkillLevelPipe } from './pipes/skill-level.pipe';
import { DurationPipe } from './pipes/duration.pipe';
import { EnrolledCourseComponent } from './course/enrolled-course/enrolled-course.component';

import { SocialLoginModule, AuthServiceConfig, LoginOpt } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";
import { AddContentComponent } from './contentprovider/addcourse/add-content/add-content.component';

export function tokenGetter() {
  return localStorage.getItem('id_token');
}

export function provideConfig() {
  return config;
}

const googleLoginOptions: LoginOpt = {
  scope: 'profile email https://www.googleapis.com/auth/youtube.force-ssl'
};

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("46660554208-qdtpdimir6hni2le5e8bkpdqff7dksei.apps.googleusercontent.com",googleLoginOptions)
  }
])



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
    CourseComponent,
    AdminComponent,
    RecentAddedCourseComponent,
    UserComponent,
    TypePipe,
    SkillLevelPipe,
    DurationPipe,
    EnrolledCourseComponent,
    AddContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RatingModule,
    SocialLoginModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter

      }
    })
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
