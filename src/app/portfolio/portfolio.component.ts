import { Component } from '@angular/core';
import { ImageModalComponent } from '../image-modal/image-modal.component';
import { OpenClodeModalImageService } from '../open-clode-modal-image.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ImageModalComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  imgSrc:string='';
  open:boolean = false;

  constructor(private  openCloseModalImageServices:OpenClodeModalImageService){}

  openModal(img:string):void{
    this.imgSrc = img;

    this.open = true;
    this.openCloseModalImageServices.open = true;
   
  }
}
