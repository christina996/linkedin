import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AngularFireModule } from "@angular/fire";
import { AngularFireAnalyticsModule } from "@angular/fire/analytics";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { environment } from "../environments/environment";

<<<<<<< HEAD
import { AppRoutingModule } from "./app-routing.module";
import { ProfileModule } from "./features/profile/profile.module";
import { HomeModule } from "./core/home/home.module";
import { SharedModule } from "./shared/shared.module";
import { NewsFeedModule } from "./features/news-feed/news-feed.module";
import { SearchResultsModule } from "./features/search-results/search-results.module";
=======
import { AppRoutingModule } from './app-routing.module';
import { ProfileModule } from './features/profile/profile.module';
import { SharedModule } from './shared/shared.module';
import { NewsFeedModule } from './features/news-feed/news-feed.module';
import { SearchResultsModule } from './features/search-results/search-results.module';

import { AppComponent } from './app.component';
import { SignupComponent } from './core/signup/signup.component';
import { LoginComponent } from './core/login/login.component';
import { FooterComponent } from './core/footer/footer.component';
import { CopyrightComponent } from './core/copyright/copyright.component';

import { NavMainComponent } from './core/nav-main/nav-main.component';
import { HomeComponent } from './core/home-page/home-page.component';
>>>>>>> 2239e59511d6fce6122223bbd94d37a29ba8ac02

import { AppComponent } from "./app.component";
import { SignupComponent } from "./core/signup/signup.component";
import { LoginComponent } from "./core/login/login.component";
import { FooterComponent } from "./core/footer/footer.component";
import { CopyrightComponent } from "./core/copyright/copyright.component";
import { NavMainComponent } from "./core/nav-main/nav-main.component";

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    FooterComponent,
    CopyrightComponent,
    NavMainComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ProfileModule,
    NewsFeedModule,
    SearchResultsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
