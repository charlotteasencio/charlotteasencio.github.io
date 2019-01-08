import { Component, OnInit, NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
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

export class ContactComponent implements OnInit {

  scrollToAbout(className: string):void {
    const elementList = document.querySelectorAll('.'  + className);
    const element = elementList[0] 
    element.scrollIntoView({ behavior: 'smooth' })
  }

  constructor() { }

  ngOnInit() {
  }

}
