import { Component, AfterViewInit, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-page',
  templateUrl: './loading-page.component.html',
  styleUrls: ['./loading-page.component.css']
})
export class LoadingPageComponent implements OnInit {

  tagLines: string[] = [
    'Loading...',
    'Generating Prompt...',
    'Calling OpenAI...'
  ]

  currentTagLine: string = '';

  ngOnInit(): void {
    this.displayTagLineAtIntervals();
  }

  displayTagLineAtIntervals(): void {
    let currentIndex = 0;
    setInterval(() => {
      this.currentTagLine = this.tagLines[currentIndex];
      currentIndex = (currentIndex + 1) % this.tagLines.length;
    }, 2000);
  }
}
