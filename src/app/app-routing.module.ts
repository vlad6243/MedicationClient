import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {AuthGuard} from './shared/classes/auth.guard'

import {AuthLayoutComponent} from './layouts/auth-layout/auth-layout.component'
import {MainLayoutComponent} from './layouts/main-layout/main-layout.component'
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component'
import { MainPageComponent } from './main-components/main-page/main-page.component'
import { BlogPageComponent } from './main-components/blog-page/blog-page.component'
import { ContactPageComponent } from './main-components/contact-page/contact-page.component'
import { LoginComponent } from './auth-components/login/login.component'
import { RegisterComponent } from './auth-components/register/register.component'
import { ProfileComponent } from './service-components/profile/profile.component'
import { HistoryComponent } from './service-components/history/history.component'
import { ScheduleComponent } from './service-components/schedule/schedule.component'
import { EventsComponent } from './service-components/events/events.component'

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: '/main', pathMatch: 'full'},
      {path: 'main', component: MainPageComponent},
      {path: 'blog', component: BlogPageComponent},
      {path: 'contact', component: ContactPageComponent}
    ]
  },
  {
    path: '', component: AuthLayoutComponent, children: [
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent}
    ]
  },
  {
    path: '', component: DashboardLayoutComponent, canActivate: [AuthGuard], children: [
      {path: 'profile', component: ProfileComponent},
      {path: 'history', component: HistoryComponent},
      {path: 'schedule', component: ScheduleComponent},
      {path: 'events', component: EventsComponent}

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
