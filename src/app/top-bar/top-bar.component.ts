import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  value:String = "Look for messages and Files"
  value1:String = "Search..."
  history:[]=[]
  index:any
  changeText(){

  }
  ddf(){
    this.history = this.shareData.getData()
    this.index = this.history.length - 2
    console.log("THE VALUE IS " ,this.history);
  }
  constructor(private shareData:DataServiceService) { }
  ngOnInit(): void {
  }
}
