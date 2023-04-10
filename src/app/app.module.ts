import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { ProductsComponent } from './component/products/products.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ParentComponent } from './component/parent/parent.component';
import { ChildComponent } from './component/child/child.component';
import { ListEmployeeComponent } from './component/list-employee/list-employee.component';
import { UsersComponent } from './component/users/users.component';
import { PostsComponent } from './component/posts/posts.component';
import { PagenotfoundComponent } from './component/pagenotfound/pagenotfound.component';
import { HttpClientModule } from '@angular/common/http';
import { CommentComponent } from './component/comment/comment.component';
import { ReactiveformsComponent } from './component/reactiveforms/reactiveforms.component';
import { LoginComponent } from './component/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SidebarComponent,
    ProductsComponent,
    ParentComponent,
    ChildComponent,
    ListEmployeeComponent,
    UsersComponent,
    PostsComponent,
    PagenotfoundComponent,
    CommentComponent,
    ReactiveformsComponent,
    LoginComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule,ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
