import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  userLabel:boolean = false;
  userAgeLabel:boolean = false;
  uesrEmailLabel:boolean = false;
  userPasswordLabel:boolean = false;
  userNameLapbel() {
    this.userLabel = true;
    
  }
  setUserAgeLapbel() {
    this.userAgeLabel = true;
    
  }
  setUserEmailLapbel() {
    this.uesrEmailLabel = true;
    
  }
  setUserPasswordLapbel() {
    this.userPasswordLabel = true;
    
  }


}
