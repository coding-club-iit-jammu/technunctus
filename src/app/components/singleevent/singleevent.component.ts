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
      'BCHAINGT' : this.getBlockchainTalk
    }
    try{
      this.event = funmap[this.eventID]();
    }
    catch(err){
      console.log("not found")
    }
  }

  getBlockchainTalk(){
    var event = {
      'name' : 'Guest Talk on Blockchain',
      'img' : 'assets/events/cc_guesttalk.png',
      'link' : '',
      'desc' : `This will be a workshop/talk on the topic of
                or Blockchain. The event will be conducted by
                a senior scientist/researcher/industry experts `,
      'guest' : [
      ],
      'heads' : [
        {
          'name' : 'Sachin',
          'contact' : '6005053183'
        }
      ]
    }
    return event;
  }

  getROBOGT(){
    var event = {
      'name' : 'Guest Talk',
      'img' : 'assets/events/preservance_rover.png',
      'link' : '',
      'desc' : `Get ready to know the technicalities of the Perseverance
                rover sent by NASA recently to seek signs of ancient life
                and collect samples of rock from Mars. Guest Nachit
                Chahat who is a member of team Mars Rover will be
                throwing light on this buzzing topic.`,
      'guest' : [
        'Deputy Electrical Integration and Test Lead for perseverance assembly, test, and launch operations team.',
        'Psyche ATLO Electrical Integration & Test Lead (JPL)+ VP of Innovation & Technology (SHPE LA Chapter).',
        `System Engineer in NASA's Jet Propulsion Laboratory, Pasadena, CA, USA.Perseverance Rover Mission.`
      ],
      'heads' : [
        {
          'name' : 'Sharan',
          'contact' : '9818713571'
        },
        {
          'name' : 'Abhyam',
          'contact' : '7206683371'
        }
      ]
    }
    return event;
  }

  getROBOHDL(){
    var event = {
      'name' : 'HDL Coding Contest',
      'img' : 'assets/events/vhdl.png',
      'link' :'https://forms.gle/HKL2NmKc2NVdcFN56',
      'desc' : `This is a digital design contest, where participants will be
              given some real life problems to solve within 2-2.5 hours.
              Participants can use VHDL or Verilog to code their
              solutions. Top 3 Teams will be eligible for the prizes.`,
      'guidelines' : [
        'Participants have to write code in VHDL or Verilog.',
        'Writing a test bench is not mandatory, writing it will add privilege for the participants',
        'Code should be simulateble, synthesis is not mandatory',
        'Judging will be based on the hidden test case',
        'In case of tie, creativity and simulation time will be the judging criteria.',
        'E-certificates will be given to the winners',
        'Prizes worth Rs 11.5k.'
      ],
      'conduct' : [
        'It is an individual event.',
        'Event details will be shared through whatsapp group.',
        'The time limit is 2 - 2.5 hr.'
      ],
      'heads' : [
        {
          'name' : 'Shadan',
          'contact' : '6205289589'
        },
        {
          'name' : 'Jaswant',
          'contact' : '8107820647'
        }
      ]
    }
    return event;
  }
  getROBOREBB(){
    var event = {
      'name' : 'Rebbecca',
      'img' : 'assets/events/rebeca.png',
      'link' :'https://forms.gle/KxLHzE3Y1vxqBb8p9',
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
      ],
      'heads' : [
        {
          'name' : 'Saurabh',
          'contact' : '6005530882'
        },
        {
          'name' : 'Abhyam',
          'contact' : '7206683371'
        }
      ]
    }
    return event;
  }
  getASTROCH(){
    var event = {
      'name' : 'AstroChallenge',
      'img' : 'assets/events/astro_challenge.png',
      'link' :'https://forms.gle/B8uBHBuD3zSXqufZ9',
      'desc' : `This is an exclusive event wherein the participants will
                have to find solutions to some mind-bending astronomy
                problems statements within a given time frame. The top
                three victors will be given prizes worth INR 9000/-.`,
      'guidelines' : [
        'General problem statements on Astrophysics will be uploaded on D2C/fest website.',
        'Participants will have to submit the solution/explanation/answer through google form within 1.5 hours from the time of releasing of questions (preferably in pdf or doc format).',
        'In case of a tie in scores, earlier submission will be preferred. And in case the tie persists, date of birth will be considered(younger first).',
        'If any extra data is used by the participant which is not trivial according to the problem statement then he/she is required to duly mention its source and reference.',
        'The decision of the jury will be final under any circumstances.',
        'Total prize money for top three participants is INR 9000.'
      ],
      'conduct' : [
        'It is an individual event.',
        'The event will be conducted on D2C/Technunctus website or any other online platform.',
        'A whatsapp group will be created with all the participants, where the event details will be shared and queries will be addressed.'
      ],
      'heads' : [
        {
          'name' : 'Tanishq Midha',
          'contact' : '7827547962'
        },
        {
          'name' : 'Paridhi Mayande',
          'contact' : '7051786809'
        }
      ]
    }
    return event;
  }
  getASTROGT(){
    var event = {
      'name' : 'Astronomy Guest Talk',
      'img' : 'assets/events/astrophysics.png',
      'link' :'https://forms.gle/4vZvBmeowJpHdS5M6',
      'desc' : `This will be a workshop on the topic on the theme of
                astronomy/astrophysics. The event will be conducted by
                a senior scientist/researcher in the field of astrophysics.`,
      'conduct' : [
        'The event will be conmpletely online.',
        'The time limit is 1.5 hours.'
      ],
      'heads' : [
        {
          'name' : 'Akshat Mehra',
          'contact' : '9797092089'
        },
        {
          'name' : 'Siddharth Mishra',
          'contact' : '9596282691'
        }
      ]
    }
    return event;
  }

  getASTROTH(){
    var event = {
      'name' : 'Treasure Hunt',
      'img' : 'assets/events/treasure_hunt.png',
      'link' :'https://forms.gle/72yGXBpnigttkEyu8',
      'desc' : `Astronomy Club presents Treasure Hunt for
                Technunctus ‘21 edition. Participants have to solve
                many pieces of a puzzle with the help of given hints to
                get the right answers. Participants who solve the
                maximum number of questions in the least amount of
                time will be winners.`,
      'guidelines' : [
        'The participant who submits most answers in the least timewill be declared the winner.',
        'In case of tie, the participant who submits earlier will be given the upper rank. If tie still exists, then in that case the participant from IIT Jammu will be given upper rank. If a tie still exists, then a toss will be used to break the tie.',
        'E-certificates to winners.',
        'Prizes worth Rs. 16k will be distributed.'
      ],
      'conduct' : [
        'It is an individual event.',
        'The event will be conducted on D2C / google forms / anyother website.',
        'Event details will be shared through whatsapp group'
      ],
      'heads' : [
        {
          'name' : 'Siddharth Mishra',
          'contact' : '9596282691'
        },
        {
          'name' : 'Akshat Mehra',
          'contact' : '9797092089'
        }
      ]
    }
    return event;
  }

  getMasterCAD(){
    var event = {
      'name' : 'MasterCAD',
      'img' : 'assets/events/mastercad.png',
      'link' :'https://forms.gle/9mXtoGGj1uBQpFq86',
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
        'Volunteers  will  be  present  to  assist  the participants during the workshop.'
      ],
      'conduct' : [
        'The event will be conducted through online mode.',
        'Participants will join the meeting on their mobile phones, and use the software on their PCs.'
      ],
      'heads' : [
        {
          'name' : 'Tanishq Midha',
          'contact' : '7827547962'
        },
        {
          'name' : 'Amol Jaggi',
          'contact' : '9906293894'
        }
      ]
    }
    return event;
  }

  getTPC(){
    var event = {
      'name' : 'Technunctus Programming Comptetion',
      'img' : 'assets/events/tpc.png',
      'link' :'https://forms.gle/YCCF3t8XE6JqNhPt6',
      'desc' : `This is a team programming contest, where participants will be given some
                algorithmic problems to solve  within 2-3  hours. Participants can use
                any language of their choice to code their solutions. This event will be a
                single online round. \n Top 3 Teams willbe eligible for the prizes.`,
      'guidelines' : [
        'All teams must have 2-3 participants.',
        'All participants must be from the same college.',
        'There will be 5-6 algorithmic questions.',
        'E-certificates to all.',
        'Prizes worth Rs. 27K'
      ],
      'conduct' : [
        'The event will be completely online on a given website',
        'Team formation is mandatory for participation',
        'The time limit is 2.5-3 hrs.'
      ],
      'heads' : [
        {
          'name' : 'Daksh',
          'contact' : '9622979011'
        },
        {
          'name' : 'Samarth Singh',
          'contact' : '8826763678'
        }
      ]
    }
    return event;
  }
  getConundrum(){
    var event = {
      'name' : 'Conundrum',
      'img' : 'assets/events/puzzle.png',
      'link' :'https://docs.google.com/forms/d/e/1FAIpQLSctibXGmRTdBdthynkW5VWlIEXl5kGdyjbU5L5GjzSYeMfEuQ/viewform?usp=sf_link',
      'desc' : `The event aims to have fun while coding. One has to
                  either code or find the hint to solve a technical problem.
                  The one to complete the maximum number of levels will
                  win the challenge`,
      'guidelines' : [
        'The one to complete all level with the least time will be the winner.',
        'One has to code to solve the puzzle',
        'There will be 5-10 levels in the game.',
        'E-certificates to all.',
        'Prizes worth Rs. 9K'
      ],
      'conduct' : [
        'The event will be complete online on a given website',
        'It will be the individual participation',
        'The time limit is 2.5-3 hrs.'
      ],
      'heads' : [
        {
          'name' : 'Bhavyta Aggarwal',
          'contact' : '7060245008'
        },
        {
          'name' : 'Shivam Sharma',
          'contact' : '9897259284'
        }
      ]
    }
    return event;
  }
  getBeacon(){
    var event = {
      'name' : 'Beacon',
      'img' : 'assets/events/beacon.png',
      'link' :'https://forms.gle/3SGYB6uQEKA7fGK48',
      'desc' : `This event is an opportunity for the students to explore
                and bring out their maximum potential in innovation
                and creativity in technical expertise. Participants are
                required to come up with interesting and innovative
                solutions to tackle the real life challenges faced by
                industries. There would be a short Q&A session at the end of each presentation.`,
      'guidelines' : [
        'Team size - Minimum 2 , Maximum 4',
        'Presentation (time limit)    - 10 min',
        'Q/A session (by judging panel) - 5 min',
        'Submission of soft copy- 12 hrs before the event',
        'Prizes worth Rs. 9K'
      ],
      'conduct' : [
        'Online mode - Through Zoom',
        'Students in the campus  will be provided with college wifi and a separate place during event timings.',
        'Teams have to come with their own laptops.'
      ],
      'heads' : [
        {
          'name' : 'M Sai Vishnu',
          'contact' : '7093017719'
        },
        {
          'name' : 'Poorvi Joshi',
          'contact' : '9411722780'
        }
      ]
    }
    return event;
  }
  getCADstar(){
    var event = {
      'name' : 'CADstar',
      'img' : 'assets/events/cadstar.png',
      'link' :'https://forms.gle/LZXQ7EypPPaG17Mu7',
      'desc' : `Performance, reliability and market are what drives the designs in modern engineering.
                You might find a lot of designs for the same thing but not all of them make it to the top.
                Do you have what it takes to make a perfect engineering design?CADstar  is  a  unique  one 
                of  its  kind competitions where designing, analysis and simulation  skills  along  with
                innovation,reasoning and logic are put to test. Come and put your brains to work and
                be the next CADstar!`,
      'guidelines' : [
        'Team size - 2 to 4 Students',
        'Students will be given a problem statement on the spot',
        '5 hours time limit',
        'Participants will be provided with certificates',
        'Prizes worth Rs. 9K'
      ],
      'conduct' : [
        'It will be conducted in online mode.',
        'The files shall be submitted using one of the following software:-  Solidworks 2019,Autodesk 2020/21, Inventor 2020, OnShape.',
        'Any form of plagiarism in the answers would not be tolerated.'
      ],
      'heads' : [
        {
          'name' : 'Tanishq Midha',
          'contact' : '7827547962'
        },
        {
          'name' : 'Amol Jaggi',
          'contact' : '9906293894'
        }
      ]
    }
    return event;
  }

}
