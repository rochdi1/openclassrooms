import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './nav/nav.component';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppareilComponent } from './appareil/appareil.component';
import { FormsModule } from '@angular/forms';
import { BlogComponent } from './blog/blog.component';
import { BlogItemComponent } from './blog-item/blog-item.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import {NgxWebstorageModule} from 'ngx-webstorage';
import { AppareilService } from './services/appareil.service';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { DecoComponent } from './deco/deco.component';
import { HttpComponent } from './http/http.component';
import { HttpClientModule } from '@angular/common/http';
import { RecordsService } from './services/records.service';
import { LoginComponent } from './loginUndAdmin/login/login.component';
import { AdminComponent } from './loginUndAdmin/admin/admin.component';
import { RegisterComponent } from './loginUndAdmin/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    NavComponent,
    HomeComponent,
    PageNotFoundComponent,
    AppareilComponent,
    BlogComponent,
    BlogItemComponent,
    PostListComponent,
    PostListItemComponent,
    AuthComponent,
    AppareilViewComponent,
    DecoComponent,
    HttpComponent,
    LoginComponent,
    AdminComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlashMessagesModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgxWebstorageModule.forRoot(),

  ],
  providers: [
    AppareilService,
    RecordsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
