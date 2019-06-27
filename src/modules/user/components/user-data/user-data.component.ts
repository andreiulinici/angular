import { Component, Input, OnInit, Optional } from '@angular/core';
import { UserInterface } from '../../../../interfaces';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  @Input() user: UserInterface;

  displayedColumns = ['avatar', 'first_name', 'last_name', 'email'];

  constructor(@Optional() private parent: UserComponent) {
    console.log(this.parent);
    if (this.parent) {
      this.parent.user = { ...this.user };
    }
  }

  ngOnInit() { }
}
