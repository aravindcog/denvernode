import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID, ErrorHandler } from "@angular/core";
import { HTTP_INTERCEPTORS, HttpClientModule, HttpClient } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpErrorInterceptor } from "./core/interceptor/http-error.interceptor";
import { TokenInterceptor } from "./core/interceptor/authentication.interceptor";
import { CommonMethods } from "src/app/core";
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LoginComponent } from './modules/auth/login/login.component';
import { SharedModule } from "./shared/modules/shared.module";
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
import {
  Authguard,
  AuthService,
   LoginAuthguard, MasterDataService,
} from "src/app/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';
import { MaterialModule } from './shared/modules/material.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { from } from 'rxjs';
import { FlexLayoutModule } from '@angular/flex-layout';
// import { LoaderComponent } from "./shared/components/loader/loader.component";
import { LoginLayoutComponent } from "./shared/components/login-layout/login-layout.component";
import { NavLayoutComponent } from "./shared/components/nav-layout/nav-layout.component";
import { HomeLayoutComponent } from "./shared/components/home-layout/home-layout.component";

import { SidenavcomponentComponent } from './shared/sidenavcomponent/sidenavcomponent.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginLayoutComponent,
    NavLayoutComponent,
    HomeLayoutComponent,
    SidenavcomponentComponent,
    // LoaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    MaterialModule,
    SharedModule,
    FlexLayoutModule
    // SignaturePadModule,

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    CommonMethods,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
