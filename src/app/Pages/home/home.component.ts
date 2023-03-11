import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  slides = [
    {img: "/assets/images/hero_img.jpg"},
    {img: "/assets/images/hero_img.jpg"},
    {img: "/assets/images/hero_img.jpg"},
    {img: "/assets/images/hero_img.jpg"}
  ];
  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1};




}
