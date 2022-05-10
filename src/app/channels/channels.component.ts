import { Component, OnInit , Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.css']
})
export class ChannelsComponent implements OnInit {
  @Output() event = new EventEmitter<any>()
  selectedChannel={
    Activity:['ABC','BCD','DCF','EKG'],
    Chat:['ABC','BCD','DCF','EKG']
  };
  constructor() { }
  df(value:string){
    console.log("I AM IN CHID");
     this.event.emit(value)
  }

  ngOnInit(): void {
  }

}
