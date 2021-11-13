import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {WrapperComponent} from "../wrapper/wrapper.component";
import {WrapperAccountComponent} from "../wrapper/account/wrapper-account/wrapper-account.component";
import {LayoutComponent} from "../layout/layout.component";
import {WrapperSettingsComponent} from "../wrapper/settings/wrapper-settings/wrapper-settings.component";

const routes: Routes = [
  {path: '', redirectTo: 'dash', pathMatch: 'full'},
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: 'dash', component: WrapperComponent},
      {path: 'account', component: WrapperAccountComponent},
      {path: 'settings', component: WrapperSettingsComponent},

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
