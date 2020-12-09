import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { LandingPageComponent } from './layout/landing-page/landing-page.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HomeComponent } from './layout/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './security/login/login.component';
import { SignUpComponent } from './security/sign-up/sign-up.component';
import { AuthGuard } from './security/helper/auth.guard';
import { NotAuthGuard } from './security/helper/notAuth.guard';
import { AuthInterceptor } from './security/helper/auth.interceptor';
import { CustomValidatorsService } from './security/validator/custom-validators.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LandingPageComponent,
    SidebarComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    ToastrModule.forRoot()
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }, AuthGuard,NotAuthGuard,CustomValidatorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
