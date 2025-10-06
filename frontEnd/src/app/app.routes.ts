import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Signup } from './pages/signup/signup';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './services/guard/auth-guard.service';

export const routes: Routes = [
  {
      path: '', redirectTo: '/login', pathMatch: 'full'
  },
  {
    path: 'login',
    component: Login
  },
  {
    path: 'signup',
    component: Signup
  }
  ,
  {
    path: 'home',
    component: HomeComponent,
    // canActivate:[AuthGuard]
  }
];
