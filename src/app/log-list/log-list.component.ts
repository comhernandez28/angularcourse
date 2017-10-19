import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-list',
  templateUrl: './log-list.component.html',
  styleUrls: ['./log-list.component.css']
})
export class LogListComponent implements OnInit {
  displayMore = false;
  requestLog = 0;
  requests = [];
  color = "none";
  isWhiteText = false;

  constructor() { }

  ngOnInit() {
  }

  displayMoreRequest() {
      this.requestLog++;
      this.color = this.requestLog >= 5 ? 'blue' : 'none;';
      this.isWhiteText = this.requestLog >= 5 ? true : false;
      this.requests.push({whiteText: this.isWhiteText , bg: this.color , number:this.requestLog});
      console.log(this.requests);
      console.log(this.requestLog);
      console.log(this.isWhiteText);
      this.displayMore = this.displayMore ? false : true;
  }

  //overFive() {
    //return this.color;
  //}

}
