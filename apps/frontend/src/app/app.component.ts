import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'sekwin-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'frontend';
  showMenu = false;

  toggleMenu(override?:boolean) {
    if(override !== undefined){
      this.showMenu = override;
      return;
    }
    this.showMenu = !this.showMenu;
  }
}
