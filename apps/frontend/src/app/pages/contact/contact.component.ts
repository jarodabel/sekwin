import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'sekwin-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements AfterViewInit {
  showGroup = false;
  pageWidth = 0;

  constructor(private cdr: ChangeDetectorRef) { }

  ngAfterViewInit() {
    this.pageWidth = window.innerWidth;
    console.log(this.pageWidth);
    this.cdr.detectChanges();

    (window as any).FB.XFBML.parse();
  }
}
