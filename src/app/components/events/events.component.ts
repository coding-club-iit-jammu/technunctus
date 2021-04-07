import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var M: any;

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit, AfterViewInit {

  allEvents: any = [];
  constructor() { }

  ngOnInit(): void {
    this.createEvent();
  }
  ngAfterViewInit(){
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems);
  }
  createEvent(){
    this.allEvents = [
      {
        'title' : 'Technunctus Programming Contest',
        'img' : 'assets/events/tpc.png',
        'code' : 'TPC21',
        'description' : `This is a team programming contest, where participants
                        will be given some algorithmic problems to solve within
                        2-3 hours. Participants can use any language of their
                        choice to code their solutions. This event will be a single
                        online round. Top 3 Teams will be eligible for the prizes.`
      },
      {
        'title' : 'Treasure Hunt',
        'code' : 'ASTROTH',
        'img' : 'assets/events/treasure_hunt.png',
        'description' : `Astronomy Club presents Treasure Hunt for
                        Technunctus ‘21 edition. Participants have to solve
                        many pieces of a puzzle with the help of given hints to
                        get the right answers. Participants who solve the
                        maximum number of questions in the least amount of
                        time will be winners.`
      },
      {
        'title' : 'Rebbecca',
        'code' : 'ROBOREBB',
        'img' : 'assets/events/rebeca.png',
        'description' : `Hit and Trail is one of the fundamental practices which
                          have been the enlightenment candle for the human
                          civilization, you all would have at any point of time have
                          seen the trial attempts Tony Stark did while trying to
                          make his suit and did crash landed on his Porsche Car
                          certainly we cannot afford that luxury, but you would
                          have dreamt that someday you will also be able to do it.
                          Now you have your chance, in this event you will be
                          making and simultaneously simulating your robot in
                          Gazebo Platform and you will have to perform certain
                          specific tasks which will be provided to you after
                          registering for the event.`
      },
      {
        'title' : 'CADstar',
        'code' : 'CADSTAR',
        'img' : 'assets/events/cadstar.png',
        'description' : `CADstar is a unique one of its kind competitions where
                          designing, analysis and simulation skills along with
                          innovation, reasoning and logic are put to test.
                          Come and put your brains to work and be the next
                          CADstar!`
      },
      {
        'title' : 'AstroChallenge',
        'code' : 'ASTROCH',
        'img' : 'assets/events/astro_challenge.png',
        'description' : `This is an exclusive event wherein the participants will
                          have to find solutions to some mind-bending astronomy
                          problems statements within a given time frame. The top
                          three victors will be given prizes worth INR 9000/-.`
      },
      {
        'title' : 'Guest Talk',
        'code' : 'ROBOGT',
        'img' : 'assets/events/preservance_rover.png',
        'description' : `Get ready to know the technicalities of the Perseverance
                        rover sent by NASA recently to seek signs of ancient life
                        and collect samples of rock from Mars. Guest Nachit
                        Chahat who is a member of team Mars Rover will be
                        throwing light on this buzzing topic.`
      },
      {
        'title' : 'Beacon',
        'code' : 'BEACON',
        'img' : 'assets/events/beacon.png',
        'description' : `This event is an opportunity for the students to explore
                        and bring out their maximum potential in innovation
                        and creativity in technical expertise. Participants are
                        required to come up with interesting and innovative
                        solutions to tackle the real life challenges faced by
                        industries. There would be expert speeches by the
                        speakers on industries and other engineering fields.`
      },
      {
        'title' : 'Conundrum',
        'img' : 'assets/events/puzzle.png',
        'code' : 'CONUNDRUM',
        'description' : `The event aims to have fun while coding. One has to
                        either code or find the hint to solve a technical problem.
                        The one to complete the maximum number of levels will
                        win the challenge`
      },
      {
        'title' : 'HDL Coding Contest',
        'code' : 'ROBOHDL',
        'img' : 'assets/events/vhdl.png',
        'description' : `This is a digital design contest, where participants will be
                        given some real life problems to solve within 2-2.5 hours.
                        Participants can use VHDL or Verilog to code their
                        solutions. Top 3 Teams will be eligible for the prizes.`
      },
      {
        'title' : 'Astronomy Guest Talk',
        'code' : 'ASTROGT',
        'img' : 'assets/events/astrophysics.png',
        'description' : `This will be a workshop on the topic on the theme of
                        astronomy/astrophysics. The event will be conducted by
                        a senior scientist/researcher in the field of astrophysics.`
      },
      {
        'title' : 'MasterCAD',
        'code' : 'MASTERCAD',
        'img' : 'assets/events/mastercad.png',
        'description' : `CAD forms a crucial component of not just engineering
                          but of other domains as well. Workshops from
                          professionals itself would help get a feel of how things
                          work in industries.
                          Extending over three days, students get armed with the
                          best of the techniques, all ready to fight it out in the
                          world with an armory of ideas and knowledge of CAD - a
                          weapon to reckon with!`
      },
      {
        'title' : 'Guest Talk on Blockchain',
        'code' : 'BCHAINGT',
        'img' : 'assets/events/cc_guesttalk.png',
        'description' : `This will be a workshop/talk on the topic of
                    or Blockchain. The event will be conducted by
                    a senior scientist/researcher/industry experts .`
      },
    ]
  }

}
