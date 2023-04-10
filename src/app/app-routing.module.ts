import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { PostsComponent } from './component/posts/posts.component';
import { UsersComponent } from './component/users/users.component';
import { ProductsComponent } from './component/products/products.component';
import { PagenotfoundComponent } from './component/pagenotfound/pagenotfound.component';
import { CommentComponent } from './component/comment/comment.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'comment/:id', component: CommentComponent},
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
