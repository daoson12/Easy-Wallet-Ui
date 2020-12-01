import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { LandingPageComponent } from './layout/landing-page/landing-page.component';
import { LoginComponent } from './security/login/login.component';
import { SignUpComponent } from './security/sign-up/sign-up.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },

  { path: 'login', component: LoginComponent },

  { path: 'sign-up', component: SignUpComponent },

  {path: 'home', component: HomeComponent,
  children:[
  {
     path: '', 
    loadChildren: () => import('./layout/dashboard/dashboard.module').then(m => m.DashboardModule) 
  },
  {
    path: 'deposit', 
    loadChildren: () => import('./components/wallet/deposit/deposit.module').then(m => m.DepositModule)
  },
  {
    path: 'withdrawal', 
    loadChildren: () => import('./components/wallet/withdrawal/withdrawal.module').then(m => m.WithdrawalModule)
  },
  {
    path: 'transfer', 
    loadChildren: () => import('./components/wallet/transfer/transfer.module').then(m => m.TransferModule)
  },
  {
    path: 'transactions', 
    loadChildren: () => import('./components/wallet/transactions/transactions.module').then(m => m.TransactionsModule)
  },
  {
    path: 'buy-airtime-data', 
    loadChildren: () => import('./components/wallet/buy-airtime-data/buy-airtime-data.module').then(m => m.BuyAirtimeDataModule)
  },
  {
    path: 'referrals', 
    loadChildren: () => import('./components/wallet/referrals/referrals.module').then(m => m.ReferralsModule)
  },
]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],


exports: [RouterModule]
})
export class AppRoutingModule { }
