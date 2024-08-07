import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { OpenClodeModalImageService } from '../open-clode-modal-image.service';

@Component({
  selector: 'app-image-modal',
  standalone: true,
  imports: [],
  templateUrl: './image-modal.component.html',
  styleUrl: './image-modal.component.css'
})
export class ImageModalComponent  {
  @Input() imgSrc!:string;
  @Input() openP! : boolean;
  open:boolean = true;

  

  constructor(private openCloseModalImageServices:OpenClodeModalImageService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    this.open = this.openCloseModalImageServices.open;
  }

  closeModal(){

    this.open = false
    this.openCloseModalImageServices.open = false


  }

  stayOpen(event:any):void{
    event.stopPropagation()
  }
}
