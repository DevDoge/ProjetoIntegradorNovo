import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { SidebarComponent } from './header/sidebar/sidebar.component';
import { TopbarComponent } from './header/topbar/topbar.component';
import { DashboardComponent } from './wrapper/dashboard/dashboard.component';
import { AccountComponent } from './wrapper/account/account.component';
import {DocsComponent} from "./wrapper/docs/docs.component";
import {OrdersComponent} from "./wrapper/orders/orders.component";
import { SettingsComponent } from './wrapper/settings/settings.component';
import { NotificationsComponent } from './wrapper/notifications/notifications.component';
import { HelpComponent } from './wrapper/help/help.component';
import { LoginComponent } from './external/login/login.component';
import { ResetPasswordComponent } from './external/reset-password/reset-password.component';
import { SingupComponent } from './external/singup/singup.component';
import { ErrorComponent } from './external/error/error.component';
import { ChartsComponent } from './wrapper/charts/charts.component';
import {AppRoutingModule} from "./app-routing/app-routing.module";
import { WrapperAccountComponent } from './wrapper/account/wrapper-account/wrapper-account.component';
import { LayoutComponent } from './layout/layout.component';
import { WrapperSettingsComponent } from './wrapper/settings/wrapper-settings/wrapper-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    WrapperComponent,
    SidebarComponent,
    TopbarComponent,
    DashboardComponent,
    AccountComponent,
    DocsComponent,
    OrdersComponent,
    DocsComponent,
    OrdersComponent,
    SettingsComponent,
    NotificationsComponent,
    HelpComponent,
    LoginComponent,
    ResetPasswordComponent,
    SingupComponent,
    ErrorComponent,
    ChartsComponent,
    WrapperAccountComponent,
    LayoutComponent,
    WrapperSettingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
