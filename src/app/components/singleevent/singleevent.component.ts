import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
declare var M: any;
@Component({
  selector: 'app-singleevent',
  templateUrl: './singleevent.component.html',
  styleUrls: ['./singleevent.component.css']
})
export class SingleeventComponent implements OnInit, AfterViewInit {
  eventID = "";
  event: any = {
    'name' : '',
    'desc' : '',
    'img' : '',
    'guidelines' : [],
    'conduct' : []
  };

  constructor(
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.eventID = params['eventID'];
      this.initialiseState(); // reset and set based on new parameter this time
    });
  }

  ngAfterViewInit(){
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems);
  }

  initialiseState(){
    console.log(this.eventID)
    var funmap = {
      'TPC21' : this.getTPC,
      'CONUNDRUM' : this.getConundrum,
      'BEACON' : this.getBeacon,
      'CADSTAR' : this.getCADstar ,
      'MASTERCAD': this.getMasterCAD ,
      'ASTROTH' : this.getASTROTH,
      'ASTROGT': this.getASTROGT,
      'ASTROCH': this.getASTROCH,
      'ROBOREBB':  this.getROBOREBB,
      'ROBOHDL' : this.getROBOHDL,
      'ROBOGT' : this.getROBOGT,

    }
    try{
      this.event = funmap[this.eventID]();
    }
    catch(err){
      console.log("not found")
    }
  }

  getROBOGT(){
    var event = {
      'name' : 'Guest Talk',
      'img' : 'assets/events/tpc.png',
      'desc' : `Get ready to know the technicalities of the Perseverance
                rover sent by NASA recently to seek signs of ancient life
                and collect samples of rock from Mars. Guest Nachit
                Chahat who is a member of team Mars Rover will be
                throwing light on this buzzing topic.`,
      'guest' : [
        'Deputy Electrical Integration and Test Lead forperseverance assembly, test, and launch operations team.',
        'Psyche ATLO Electrical Integration & Test Lead (JPL)+ VP of Innovation & Technology (SHPE LA Chapter).',
        `System Engineer in NASA's Jet PropulsionLaboratory, Pasadena, CA, USA.everance roverMission.`
      ]
    }
    return event;
  }

  getROBOHDL(){
    var event = {
      'name' : 'HDL Coding Contest',
      'img' : 'assets/events/tpc.png',
      'desc' : `This is a digital design contest, where participants will be
              given some real life problems to solve within 2-2.5 hours.
              Participants can use VHDL or Verilog to code their
              solutions. Top 3 Teams will be eligible for the prizes.`,
      'guidelines' : [
        'Participants have to write code in VHDL or Verilog.',
        'Writing a test bench is not mandatory, writing it will addprivilege for the participants',
        'Code should be simulateble, synthesis is not mandatory',
        'Judging will be based on the hidden test case',
        'In case of tie, creativity and simulation time will be thejudging criteria.',
        'E-certificates will be given to the winners',
        'Prizes worth Rs 11.5k.'
      ],
      'conduct' : [
        'It is an individual event.',
        'Event details will be shared through whatsapp group.',
        'The time limit is 2 - 2.5 hr.'
      ]
    }
    return event;
  }
  getROBOREBB(){
    var event = {
      'name' : 'Rebbecca',
      'img' : 'assets/events/tpc.png',
      'desc' : `Hit and Trail is one of the fundamental practices which
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
                registering for the event.`,
      'guidelines' : [
        'Team should consist of three members',
        'All the participants should be from same college'
      ],
      'conduct' : [
        'Event will be happening totally online',
        'Team information is mandatory for participation',
        'Time alloted for submission from the point when problem statement will be released : 36 Hours'
      ]
    }
    return event;
  }
  getASTROCH(){
    var event = {
      'name' : 'AstroChallenge',
      'img' : 'assets/events/tpc.png',
      'desc' : `This is an exclusive event wherein the participants will
                have to find solutions to some mind-bending astronomy
                problems statements within a given time frame. The top
                three victors will be given prizes worth INR 9000/-.`,
      'guidelines' : [
        'General problem statements on Astrophysics will be uploaded on D2C/fest website.',
        'Participants will have to submit the solution/explanation/answer through googleform within 1.5 hours from the time of releasing of questions (preferably in pdf ordoc format).',
        'In case of a tie in scores, earlier submission will be preferred. And in case the tiepersists, date of birth will be considered(younger first).',
        'If any extra data is used by the participant which is not trivial according to theproblem statement then he/she is required to duly mention its source andreference.',
        'The decision of the jury will be final under any circumstances.',
        'Total prize money for top three participants is INR 9000.'
      ],
      'conduct' : [
        'It is an individual event.',
        'The event will be conducted on D2C/Technunctus website or any other online platform.',
        'A whatsapp group will be created with all the participants, where the event details willbe shared and queries will be addressed.'
      ]
    }
    return event;
  }
  getASTROGT(){
    var event = {
      'name' : 'Astronomy Guest Talk',
      'img' : 'assets/events/tpc.png',
      'desc' : `This will be a workshop on the topic on the theme of
                astronomy/astrophysics. The event will be conducted by
                a senior scientist/researcher in the field of astrophysics.`,
      'conduct' : [
        'The event will be conmpletely online.',
        'The time limit is 1.5 hours.'
      ]
    }
    return event;
  }

  getASTROTH(){
    var event = {
      'name' : 'Treasure Hunt',
      'img' : 'assets/events/tpc.png',
      'desc' : `Astronomy Club presents Treasure Hunt for
                Technunctus ‘21 edition. Participants have to solve
                many pieces of a puzzle with the help of given hints to
                get the right answers. Participants who solve the
                maximum number of questions in the least amount of
                time will be winners.`,
      'guidelines' : [
        'The participant who submits most answers in the least timewill be declared the winner.',
        'In case of tie, the participant who submits earlier will begiven the upper rank. If tie still exists, then in that case theparticipant from IIT Jammu will be given upper rank. If a tiestill exists, then a toss will be used to break the tie.',
        'E-certificates to winners.',
        'Prizes worth Rs. 16k will be distributed.'
      ],
      'conduct' : [
        'It is an individual event.',
        'The event will be conducted on D2C / google forms / anyother website.',
        'Event details will be shared through whatsapp group'
      ]
    }
    return event;
  }

  getMasterCAD(){
    var event = {
      'name' : 'MasterCAD',
      'img' : 'assets/events/tpc.png',
      'desc' : `CAD forms a crucial component of not just engineering
                but of other domains as well. Workshops from
                professionals itself would help get a feel of how things
                work in industries.
                Extending over three days, students get armed with the
                best of the techniques, all ready to fight it out in the
                world with an armory of ideas and knowledge of CAD - a
                weapon to reckon with!`,
      'guidelines' : [
        'E-certificates to all.',
        'Volunteers  will  be  present  to  assist  theparticipants during the workshop.'
      ],
      'conduct' : [
        'The event will be conducted through online mode.',
        'Participants will join the meeting on their mobilephones, and use the software ontheir PCs.'
      ]
    }
    return event;
  }

  getTPC(){
    var event = {
      'name' : 'Technunctus Programming Comptetion',
      'img' : 'assets/events/tpc.png',
      'desc' : `This is a team programming contest, whereparticipants will be given some
                algorithmicproblems  to  solve  within  2-3  hours.Participants can use
                any language of theirchoice to code their solutions. This event willbe a
                single online round. \n Top 3 Teams willbe eligible for the prizes.`,
      'guidelines' : [
        'All teams must have 2-3 participants.',
        'All participants must be from the same college.',
        'There will be 5-6 algorithmic questions.',
        'E-certificates to all.',
        'Prizes worth Rs. 27K'
      ],
      'conduct' : [
        'The event will be complete online on a given website',
        'Team formation is mandatory for participation',
        'The time limit is 2.5-3 hrs.'
      ]
    }
    return event;
  }
  getConundrum(){
    var event = {
      'name' : 'Conundrum',
      'img' : 'assets/events/puzzle.png',
      'desc' : `The event aims to have fun while coding. One has to
                  either code or find the hint to solve a technical problem.
                  The one to complete the maximum number of levels will
                  win the challenge`,
      'guidelines' : [
        'The one to complete all level with the least timewill be the winner.',
        'One has to code to solve the puzzle',
        'There will be 5-10 levels in the game.',
        'E-certificates to all.',
        'Prizes worth Rs. 9K'
      ],
      'conduct' : [
        'The event will be complete online on a given website',
        'It will be the individual participation',
        'The time limit is 2.5-3 hrs.'
      ]
    }
    return event;
  }
  getBeacon(){
    var event = {
      'name' : 'Beacon',
      'img' : 'assets/events/puzzle.png',
      'desc' : `This event is an opportunity for the students to explore
                and bring out their maximum potential in innovation
                and creativity in technical expertise. Participants are
                required to come up with interesting and innovative
                solutions to tackle the real life challenges faced by
                industries. There would be expert speeches by the
                speakers on industries and other engineering fields.`,
      'guidelines' : [
        'Team size - Minimum 2 , Maximum 4',
        'Presentation (time limit)    - 10 min',
        'Q/A session (by judging panel) - 5 min',
        'Submission of soft- 12 hrs beforethe event',
        'Prizes worth Rs. 9K'
      ],
      'conduct' : [
        'Online mode - Through Zoom',
        'Students in the campus  will be provided with collegewifi and a separate place during event timings.',
        'Teams have to come with their own laptops.'
      ]
    }
    return event;
  }
  getCADstar(){
    var event = {
      'name' : 'CADstar',
      'img' : 'assets/events/puzzle.png',
      'desc' : `Performance, reliability and market arewhat drives the designs in modernengineering.
                You might find a lot of designsfor the same thing but not all of them makeit to the top.
                Do you have what it takes tomake a perfect engineering design?CADstar  is  a  unique  one 
                of  its  kindcompetitions where designing, analysis andsimulation  skills  along  with
                innovation,reasoning and logic are put to test.Come and put your brains to work and
                bethe next CADstar!`,
      'guidelines' : [
        'Team size - 2 to 4 Students',
        'Students will be given a problem statement onthe spot',
        '5 hours time limit',
        'Participants will be provided with certificates',
        'Prizes worth Rs. 10K'
      ],
      'conduct' : [
        'It will be conducted in online mode.',
        'The files shall be submitted using one of the followingsoftware:-  Solidworks/Autodesk  Inventor/Onshape(ifyou do not have access to any software)',
        'Any form of plagiarism in the answers would not betolerated.'
      ]
    }
    return event;
  }

}