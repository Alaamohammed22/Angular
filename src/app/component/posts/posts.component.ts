import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent {
  Listofpost: any = [];
  errormessage: any;

  constructor(private post: PostService, private router: Router) {}
  ngOnInit(): void {
    this.Listofpost = this.post.GetUser().subscribe({
      next: (data) => (this.Listofpost = data),
      error: (error) => (this.errormessage = error),
    });
  }
  onselect(post: any) {
    this.router.navigate(['/comment', post.id]);
  }
}
