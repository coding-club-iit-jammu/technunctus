import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var M: any;
@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit, AfterViewInit {

  team:any = [];

  constructor() { }

  ngOnInit(): void {
    this.createTeam();
  }

  ngAfterViewInit(){
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems);
  }

  createTeam(){
    this.team = [
      {
        'name' : 'Rishabh Ranjan',
        'img' : 'rishabh.jpg',
        'position' : 'Chairman'
      },
      {
        'name' : 'Shubham Gupta',
        'img' : 'default.png',
        'position' : 'Convenor'
      },
      {
        'name' : 'Abhinav',
        'img' : 'Abhinav.jpg',
        'position' : 'Convenor'
      },
      {
        'name' : 'Abhishek',
        'img' : 'abhis.jpeg',
        'position' : 'Coding Club Head'
      },
      {
        'name' : 'Abhyam',
        'img' : 'abhyam.jpg',
        'position' : 'Robotics Club Head'
      },
      {
        'name' : 'Akshat Mehra',
        'img' : 'default.png',
        'position' : 'Astronomy Club Head'
      },
      {
        'name' : 'Amol Jaggi',
        'img' : 'amol.jpg',
        'position' : 'SAE Club Head'
      },
      {
        'name' : 'Apurv',
        'img' : 'Apurv.jpg',
        'position' : 'Media Team Head'
      },
      {
        'name' : 'Lovish Bains',
        'img' : 'lovish.jpg',
        'position' : 'Design Team Head'
      },
      {
        'name' : 'Shreyas',
        'img' : 'Shreyas.jpg',
        'position' : 'Overall Event Head'
      },
      {
        'name' : 'Dhiraj',
        'img' : 'default.png',
        'position' : 'Marketing & Sponsorship Head'
      },
      {
        'name' : 'Abhishek Suman',
        'img' : 'abhishek_suman.jpg',
        'position' : 'Marketing & Sponsors'
      },
      {
        'name' : 'Jaswant',
        'img' : 'jaswant.jpg',
        'position' : 'Networking & Outreach Head'
      },
      {
        'name' : 'Priyanshu',
        'img' : 'priyanshu.jpg',
        'position' : 'Networking & Outreach Head'
      },
      {
        'name' : 'Sachin',
        'img' : 'sachin.jpg',
        'position' : 'Event Head (Blockchain)'
      },
      {
        'name' : 'Sai Vishnu',
        'img' : 'sai_vishnu.jpg',
        'position' : 'Event Head (Beacon)'
      },
      {
        'name' : 'Siddharth',
        'img' : 'default.png',
        'position' : 'Event Head (Treasure Hunt)'
      },
    ]
  }

}
