import { NgClass } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  isNavOpen:boolean = false;
  activeLink:string = '';
  isScrolled:boolean = false;

  toggleNav(){
    this.isNavOpen = !this.isNavOpen;
  }

  setActiveLink(link:string) {
    this.activeLink = link;
  }
  
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const scrollPosition:number = window.scrollY; 
    this.isScrolled = scrollPosition > 0;

  }

}
