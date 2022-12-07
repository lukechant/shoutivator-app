import { Component, OnInit, Output,EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-slogans',
  templateUrl: './slogans.component.html',
  styleUrls: ['./slogans.component.css']
})
export class SlogansComponent implements OnInit {
  @Output() refreshSlogan: EventEmitter<string> = new EventEmitter<string>();
  slogan: string = this.sloganGenerator();
  constructor() { }

  ngOnInit(): void {
  }

  chooseStart(): string {
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
  chooseEnd(): string {
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

  sloganGenerator(): any {
    const newStart = this.chooseStart();
    const newEnd = this.chooseEnd();
    const newSlogan = `${newStart} the ${newEnd}`;
    this.refreshSlogan.emit(newSlogan);
  }


}
