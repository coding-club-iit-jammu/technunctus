import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var M: any;
@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems);
  }

}