import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from "ngx-bootstrap/carousel";

@Component({
  selector: 'app-vaccine',
  templateUrl: './vaccine.component.html',
  styleUrls: ['./vaccine.component.scss'],
  providers:[{
    provide:CarouselConfig,useValue:{interval:1500,noPause:true,showIndicators:true}
  }]
})
export class VaccineComponent implements OnInit {

  // images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor() { }

  ngOnInit(): void {
  }

}
