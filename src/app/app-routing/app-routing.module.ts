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
import {WrapperOrdersComponent} from "../wrapper/orders/wrapper-orders/wrapper-orders.component";

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
      {path: 'orders', component: WrapperOrdersComponent},
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
