import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {LoginComponent} from './login/login.component'
import {AuthLayoutComponent} from './layouts/auth-layout/auth-layout.component'
import {MainLayoutComponent} from './layouts/main-layout/main-layout.component'
import {RegisterComponent} from './register/register.component'
import {AuthGuard} from './shared/classes/auth.guard'
import { MainPageComponent } from './main-page/main-page.component'
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component'
import { ProfileComponent } from './profile/profile.component'

const routes: Routes = [
  {
    path: '', component: AuthLayoutComponent, children: [
      {path: '', redirectTo: '/login', pathMatch: 'full'},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent}
    ]
  },
 {
    path: '', component: MainLayoutComponent, children: [
      {path: 'main', component: MainPageComponent}
      
    ]
  },
  {
    path: '', component: DashboardLayoutComponent, canActivate: [AuthGuard], children: [
      {path: 'myProfile', component: ProfileComponent}
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
