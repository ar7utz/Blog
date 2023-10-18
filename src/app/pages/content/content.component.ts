import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover:string = "https://m.media-amazon.com/images/M/MV5BMTU4OTA5MTY0M15BMl5BanBnXkFtZTcwMTgyMzA4NA@@._V1_.jpg"
  contentTitle:string = "EXEMPLO"
  contentDescription:string = " balbalblalbalblabl"

  constructor() { }

  ngOnInit(): void {
  }

}
