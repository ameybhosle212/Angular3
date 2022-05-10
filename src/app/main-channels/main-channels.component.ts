import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-main-channels',
  templateUrl: './main-channels.component.html',
  styleUrls: ['./main-channels.component.css']
})
export class MainChannelsComponent implements OnInit {
  @Input() ChatData:any;
  constructor() { }
  df(){
    console.log("WORKING");
    
  }
  ngOnInit(): void {
  }

}
