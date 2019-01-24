import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BlogComponent } from './blog/blog.component';
import { PostListComponent } from './post-list/post-list.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { AuthComponent } from './auth/auth.component';
import { DecoComponent } from './deco/deco.component';
import { HttpComponent } from './http/http.component';
import { AppareilComponent } from './appareil/appareil.component';
import { LoginComponent } from './loginUndAdmin/login/login.component';
import { AdminComponent } from './loginUndAdmin/admin/admin.component';
import { RegisterComponent } from './loginUndAdmin/register/register.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'test', component: MonPremierComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'posts', component: PostListComponent },
  { path: 'appareils', component: AppareilViewComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'deco', component: DecoComponent },
  { path: 'http', component: HttpComponent },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
