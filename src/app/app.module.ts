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
    HelpComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
