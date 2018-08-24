import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UsersServices } from '../../../core/services';
import { Users } from '../../../shared/models';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css'],
  providers: [UsersServices]
})
export class AdminUsersComponent implements OnInit {

  id: string;
  users: Users[];
  constructor(private usersServices: UsersServices, private toastr: ToastrService) { }

  ngOnInit() {
    var data = this.usersServices.getUsers();
    data.snapshotChanges().subscribe(item => {
      this.users = [];
      item.forEach(element => {
        var x = element.payload.toJSON();
        x["$key"] = element.key;
        this.users.push(x as Users);
      });
    });

  }

  onRemove(key: string) {
    // if(confirm("Delete this user?") == true) {
      this.usersServices.removeUserFromAdmin(key);
      this.toastr.warning('You have deleted a user.', 'User Deleted!');
    // }
  }

}
