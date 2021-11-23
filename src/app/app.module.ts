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
import {TransactionsComponent} from "./wrapper/transactions/transactions.component";
import {IncomesComponent} from "./wrapper/incomes/incomes.component";
import {ExpensesComponent} from "./wrapper/expenses/expenses.component";
import {AccountsComponent} from "./wrapper/accounts/accounts.component";
import {CategoriesComponent} from "./wrapper/categories/categories.component";
import { SettingsComponent } from './wrapper/settings/settings.component';
import { NotificationsComponent } from './wrapper/notifications/notifications.component';
import { HelpComponent } from './wrapper/help/help.component';
import { LoginComponent } from './external/login/login.component';
import { ResetPasswordComponent } from './external/reset-password/reset-password.component';
import { SingupComponent } from './external/singup/singup.component';
import { ErrorComponent } from './external/error/error.component';
import {AppRoutingModule} from "./app-routing/app-routing.module";
import { WrapperAccountComponent } from './wrapper/account/wrapper-account/wrapper-account.component';
import { LayoutComponent } from './layout/layout.component';
import { WrapperSettingsComponent } from './wrapper/settings/wrapper-settings/wrapper-settings.component';
import { WrapperNotificationsComponent } from './wrapper/notifications/wrapper-notifications/wrapper-notifications.component';
import { WrapperHelpComponent } from './wrapper/help/wrapper-help/wrapper-help.component';
import {WrapperTransactionsComponent} from "./wrapper/transactions/wrapper-transactions/wrapper-transactions.component";
import {WrapperIncomesComponent} from "./wrapper/incomes/wrapper-incomes/wrapper-incomes.component";
import {WrapperExpensesComponent} from "./wrapper/expenses/wrapper-expenses/wrapper-expenses.component";
import {WrapperAccountsComponent} from "./wrapper/accounts/wrapper-accounts/wrapper-accounts.component";
import {WrapperCategoriesComponent} from "./wrapper/categories/wrapper-categories/wrapper-categories.component";

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
    TransactionsComponent,
    IncomesComponent,
    ExpensesComponent,
    AccountsComponent,
    CategoriesComponent,
    DocsComponent,
    SettingsComponent,
    NotificationsComponent,
    HelpComponent,
    LoginComponent,
    ResetPasswordComponent,
    SingupComponent,
    ErrorComponent,
    WrapperAccountComponent,
    LayoutComponent,
    WrapperSettingsComponent,
    WrapperNotificationsComponent,
    WrapperHelpComponent,
    WrapperTransactionsComponent,
    WrapperIncomesComponent,
    WrapperExpensesComponent,
    WrapperAccountsComponent,
    WrapperCategoriesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
