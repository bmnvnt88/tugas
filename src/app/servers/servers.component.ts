import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  template: '<h1>hello {{name}}</h1>',
  // templateUrl: './servers.component.html',
  styles: ['h1 {color:dodgerblue;}'],
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  name = 'angular';
  constructor() { }

  ngOnInit(): void {
  }

}
