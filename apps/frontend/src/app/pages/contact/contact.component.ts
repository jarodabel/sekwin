import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'sekwin-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements AfterViewInit {
  showGroup = false;

  constructor(private cdr: ChangeDetectorRef) { }
  ngAfterViewInit() {
    (window as any).FB.XFBML.parse()
  }
}
