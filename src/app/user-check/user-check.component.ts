import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-check',
  templateUrl: './user-check.component.html',
  styleUrls: ['./user-check.component.css']
})
export class UserCheckComponent implements OnInit {
  allowNewUser = false;
  username = '';


  constructor() { }

  ngOnInit() {
  }

  onUserEvent() {
      if(this.username == '') {
        this.allowNewUser = false;
      } else {
        this.allowNewUser = true;
      }
  }

  onAddUsername() {
    this.username = '';
    this.onUserEvent();
  }

}
