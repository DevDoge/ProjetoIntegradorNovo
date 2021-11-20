import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {WrapperComponent} from "../wrapper/wrapper.component";
import {WrapperAccountComponent} from "../wrapper/account/wrapper-account/wrapper-account.component";
import {LayoutComponent} from "../layout/layout.component";
import {WrapperSettingsComponent} from "../wrapper/settings/wrapper-settings/wrapper-settings.component";
import {ErrorComponent} from "../external/error/error.component";
import {WrapperNotificationsComponent} from "../wrapper/notifications/wrapper-notifications/wrapper-notifications.component";
import {WrapperChartsComponent} from "../wrapper/charts/wrapper-charts/wrapper-charts.component";
import {WrapperHelpComponent} from "../wrapper/help/wrapper-help/wrapper-help.component";
import {WrapperTransactionsComponent} from "../wrapper/transactions/wrapper-transactions/wrapper-transactions.component";
import {WrapperIncomesComponent} from "../wrapper/incomes/wrapper-incomes/wrapper-incomes.component";
import {WrapperExpensesComponent} from "../wrapper/expenses/wrapper-expenses/wrapper-expenses.component";
import {WrapperAccountsComponent} from "../wrapper/accounts/wrapper-accounts/wrapper-accounts.component";
import {WrapperCategoriesComponent} from "../wrapper/categories/wrapper-categories/wrapper-categories.component";


const routes: Routes = [
  {path: '', redirectTo: 'dash', pathMatch: 'full'},
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: 'dash', component: WrapperComponent},
      {path: 'account', component: WrapperAccountComponent},
      {path: 'settings', component: WrapperSettingsComponent},
      {path: 'notifications', component: WrapperNotificationsComponent},
      {path: 'charts', component: WrapperChartsComponent},
      {path: 'help', component: WrapperHelpComponent},
      {path: 'transactions', component: WrapperTransactionsComponent},
      {path: 'incomes', component: WrapperIncomesComponent},
      {path: 'expenses', component: WrapperExpensesComponent},
      {path: 'accounts', component: WrapperAccountsComponent},
      {path: 'categories', component: WrapperCategoriesComponent},
      {path: '**', component: ErrorComponent}

    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
