import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DetailsComponent} from "./details/details.component";
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { appRoutes } from './routes';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FeedComponent } from './feed/feed.component';
import { NavbarModule } from './navbar/navbar.module';

@NgModule({
  declarations: [AppComponent,
    DetailsComponent,
    RegistrationComponent,
    FeedComponent,
    LoginComponent,
    ProfileComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NavbarModule,
    HttpClientModule,
    [RouterModule.forRoot(appRoutes)]
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
