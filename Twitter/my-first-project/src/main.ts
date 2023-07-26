import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { Routes } from '@angular/router';
import { DetailsComponent } from './app/details/details.component';
import { RegistrationComponent } from './app/registration/registration.component';
import { LoginComponent } from './app/login/login.component';
import { ProfileComponent } from './app/profile/profile.component';

const routes: Routes = [
  { path: 'details', component: DetailsComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
];

platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.error(err));
