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
        'name' : 'Rishabh',
        'img' : 'rishabh.jpg',
        'position' : 'Chairman',
        'phone' : '9622804256'
      },
      {
        'name' : 'Shreyas',
        'img' : 'Shreyas.jpg',
        'position' : 'Overall Event Head',
        'phone' : '7000172797'
      },
      {
        'name' : 'Shubham',
        'img' : 'Shubham.jpg',
        'position' : 'Convenor',
        'phone' : '8082437683'
      },
      {
        'name' : 'Abhinav',
        'img' : 'Abhinav.jpg',
        'position' : 'Convenor',
        'phone' : '8511507692'
      },
      {
        'name' : 'Abhishek',
        'img' : 'abhis.jpeg',
        'position' : 'Coding Club Head',
        'phone' : '9794866746'
      },
      {
        'name' : 'Abhyam',
        'img' : 'abhyam.jpg',
        'position' : 'Robotics Club Head',
        'phone' : '7206683371'
      },
      {
        'name' : 'Akshat',
        'img' : 'default.png',
        'position' : 'Astronomy Club Head',
        'phone' : '9797092089'
      },
      {
        'name' : 'Amol',
        'img' : 'amol.jpg',
        'position' : 'SAE Club Head',
        'phone' : '9906293894'
      },
      {
        'name' : 'Apurv',
        'img' : 'Apurv.jpg',
        'position' : 'Media Team Head',
        'phone' : '7455023823'
      },
      {
        'name' : 'Lovish',
        'img' : 'lovish.jpg',
        'position' : 'Design Team Head',
        'phone' : '7497808239'
      },
      {
        'name' : 'Dhiraj',
        'img' : 'Dhiraj.jpg',
        'position' : 'Marketing & Sponsorship Head',
        'phone' : '9850192860'
      },
      {
        'name' : 'Abhishek',
        'img' : 'abhishek_suman.jpg',
        'position' : 'Marketing & Sponsors Head',
        'phone' : '7018995400'
      },
      {
        'name' : 'Jaswant',
        'img' : 'jaswant.jpg',
        'position' : 'Networking & Outreach Head',
        'phone' : '8107820647'
      },
      {
        'name' : 'Priyanshu',
        'img' : 'priyanshu.jpg',
        'position' : 'Networking & Outreach Head',
        'phone' : '6388115067'
      }
    ]
  }
}
