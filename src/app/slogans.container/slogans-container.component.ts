import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'slogans-container',
  templateUrl: './slogans-container.component.html',
  styleUrls: ['./slogans-container.component.css'],
})
export class SlogansContainerComponent implements OnInit {
  slogan: string = this.sloganGenerator();

  constructor() {


  }



  ngOnInit(): void {
    this.sloganGenerator()
  }

  chooseStart() {
    const start: Array<string> = [
      'Feel',
      'Go for',
      'Max',
      'Change',
      'Murder',
      'Loosen',
      'Interrogate',
    ];
    return start[Math.floor(Math.random() * start.length)];
  }
  chooseEnd() {
    const end: Array<string> = [
      'Paradigm',
      'Chipmunk',
      'Badger',
      'Cheese',
      'Burn',
      'Gurn',
      'Toaster',
    ];
    return end[Math.floor(Math.random() * end.length)];
  }

  sloganGenerator() {
    const newStart = this.chooseStart();
    const newEnd = this.chooseEnd();
    return `${newStart} the ${newEnd}`;
  }
}
