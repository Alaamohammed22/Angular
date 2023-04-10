import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  Listofuser: any = [];
  errormessage: any;
  constructor(private user: UserService) {
    //   this.user.GetUser().subscribe(
    //     (usersRetriveData) => {
    //       this.Listofuser = usersRetriveData;
    //     },
    //     (error) => {
    //       this.errormessage = error;
    //     }
    //   );
    // }
  }
  ngOnInit(): void {
    this.Listofuser=this.user.GetUser().subscribe({
      next: data => this.Listofuser = data,
      error: error => this.errormessage=error
    });
  }
}
