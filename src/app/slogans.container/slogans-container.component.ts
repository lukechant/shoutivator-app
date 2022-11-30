import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'slogans-container',
  templateUrl: './slogans-container.component.html',
  styleUrls: ['./slogans-container.component.css']
})
export class SlogansContainerComponent implements OnInit {

  slogan = 'Chuffing Slogans!';

  constructor() { }

  ngOnInit(): void {
  }


}
