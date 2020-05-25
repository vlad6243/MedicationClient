import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import { FullCalendarModule } from '@fullcalendar/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { LoginComponent } from './auth-components/login/login.component';
import { RegisterComponent } from './auth-components/register/register.component';
import { MainPageComponent } from './main-components/main-page/main-page.component';
import { BlogPageComponent } from './main-components/blog-page/blog-page.component';
import { ContactPageComponent } from './main-components/contact-page/contact-page.component';
import { EventsComponent } from './service-components/events/events.component';
import { ScheduleComponent } from './service-components/schedule/schedule.component';
import { ProfileComponent } from './service-components/profile/profile.component';
import { HistoryComponent } from './service-components/history/history.component';

import { TokenInterceptor } from './shared/classes/token.interceptor';

import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { LoaderComponent } from './shared/components/loader/loader.component';




@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    MainLayoutComponent,
    LoginComponent,
    RegisterComponent,
    MainPageComponent,
    NavbarComponent,
    FooterComponent,
    DashboardLayoutComponent,
    ProfileComponent,
    HistoryComponent,
    ScheduleComponent,
    EventsComponent,
    BlogPageComponent,
    ContactPageComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FullCalendarModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    multi: true,
    useClass: TokenInterceptor
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
