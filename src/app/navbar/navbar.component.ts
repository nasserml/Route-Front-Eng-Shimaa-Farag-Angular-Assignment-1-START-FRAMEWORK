import { NgClass } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';

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
  constructor(private titleService: Title){}

  toggleNav(){
    this.isNavOpen = !this.isNavOpen;
  }

  setActiveLink(link:string) {
    this.activeLink = link;

    switch(link){
      case '/':
        this.titleService.setTitle('home');
        break;
      case '/about':
        this.titleService.setTitle('about');
        break;
      case '/portfolio':
        this.titleService.setTitle('portfolio');
        break;
      case '/contact':
        this.titleService.setTitle('contact');
        break;
      default:
        this.titleService.setTitle('not found');
    }

  }
  
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const scrollPosition:number = window.scrollY; 
    this.isScrolled = scrollPosition > 0;

  }

}
