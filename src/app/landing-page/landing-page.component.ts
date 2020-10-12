import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  sideBarInfoContent: Array<string> = 
  ['Follow your interests.','Hear what people are talking about.','Join the conversation.'];

  constructor() { }

  ngOnInit(): void {
  }

}
