import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BlogComponent } from './blog/blog.component';
import { PostListComponent } from './post-list/post-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'test', component: MonPremierComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'posts', component: PostListComponent },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
