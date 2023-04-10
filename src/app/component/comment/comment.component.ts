import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent {
  Listofcomment: any = [];
  errormessage: any;
  postid:any;
  constructor(private comment: CommentService,private active:ActivatedRoute) {}
  ngOnInit(): void {
    this.active.paramMap.subscribe((params:ParamMap)=>{
      this.postid=params.get("id");
    }),
    this.Listofcomment = this.comment.GetComments(this.postid).subscribe({
      next: (data) => (this.Listofcomment = data),
      error: (error) => (this.errormessage = error),
    });
  }

  }



