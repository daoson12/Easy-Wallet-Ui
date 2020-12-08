import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
// import { LandingPageComponent } from './layout/landing-page/landing-page.component';
import { LoginComponent } from './security/login/login.component';
import { SignUpComponent } from './security/sign-up/sign-up.component';
import { AuthGuard } from './security/helper/auth.guard';
import { NotAuthGuard } from './security/helper/notAuth.guard';
const routes: Routes = [
  // { path: '', component: LandingPageComponent },

  { path: 'login', component: LoginComponent,canActivate:[NotAuthGuard] },
  
  {path:'sign-up', component:SignUpComponent,canActivate:[NotAuthGuard]},

  {path: '', component: HomeComponent,

  
  children:[
  {
     path: '', 
    loadChildren: () => import('./layout/dashboard/dashboard.module').then(m => m.DashboardModule), canActivate:[AuthGuard] 
  },
  {
    path: 'deposit', 
    loadChildren: () => import('./components/wallet/deposit/deposit.module').then(m => m.DepositModule), canActivate:[AuthGuard]
  },
  {
    path: 'withdrawal', 
    loadChildren: () => import('./components/wallet/withdrawal/withdrawal.module').then(m => m.WithdrawalModule), canActivate:[AuthGuard]
  },
  {
    path: 'transfer', 
    loadChildren: () => import('./components/wallet/transfer/transfer.module').then(m => m.TransferModule), canActivate:[AuthGuard]
  },
  {
    path: 'transactions', 
    loadChildren: () => import('./components/wallet/transactions/transactions.module').then(m => m.TransactionsModule), canActivate:[AuthGuard]
  },
  {
    path: 'buy-airtime-data', 
    loadChildren: () => import('./components/wallet/buy-airtime-data/buy-airtime-data.module').then(m => m.BuyAirtimeDataModule), canActivate:[AuthGuard]
  },
  {
    path: 'referrals', 
    loadChildren: () => import('./components/wallet/referrals/referrals.module').then(m => m.ReferralsModule), canActivate:[AuthGuard]
  },
]},
{path:'**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],


exports: [RouterModule]
})
export class AppRoutingModule { }
