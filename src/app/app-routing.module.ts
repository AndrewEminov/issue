import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const accountModule = () => import('./pages/account/account.module').then(x => x.AccountModule);

const routes: Routes = [
  // { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'account', loadChildren: accountModule },

  // { path: 'profile', loadChildren: profileModule, canActivate: [AuthGuard] },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
