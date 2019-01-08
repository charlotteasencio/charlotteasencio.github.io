import { Component, OnInit, NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

@NgModule({
  declarations: [
  ],
  imports: [
    MatIconModule
  ],
  providers: [],
  bootstrap: []
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openFullMenu() {
    document.getElementById('fullMenu').classList.toggle("hidden");
  }

  goTo(className: string):void {
    const elementList = document.querySelectorAll('.'  + className);
    const element = elementList[0] 
    element.scrollIntoView({ behavior: 'smooth' })
    document.getElementById('fullMenu').classList.toggle('hidden');
  }
}
