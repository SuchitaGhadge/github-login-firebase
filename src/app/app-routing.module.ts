import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// pages
import { HomeComponent } from './pages/home/home.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';

// guarding
import { AngularFireAuthGuard, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';
import { AngularFireAuth } from '@angular/fire/compat/auth';

const redirectUnauthorizedToSignin = () => redirectUnauthorizedTo(['signin']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['']);

const routes: Routes = [
  { 
    path: 'signin', 
    component: SigninComponent,        
    canActivate: [AngularFireAuthGuard], 
    data: { authGuardPipe: redirectLoggedInToHome },
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: '',
    component: HomeComponent,
    canActivate: [AngularFireAuthGuard],
    data: { autGuardPipe: redirectUnauthorizedToSignin}
  },
  {
    path:'repodetails',
    loadChildren: () => import('./repo-details/repo-details.module').then(mod => mod.RepoDetailsModule)
  },
  // {
  //   path: "**",
  //   component: PagenotfoundComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
