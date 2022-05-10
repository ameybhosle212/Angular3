import { Component, OnInit , Input , Output , EventEmitter } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.css']
})
export class AppBarComponent {
  @Input() data:string = '';
  @Input() arrayOfData:any;
  @Output() event = new EventEmitter<any>();
  chatData:any;
  // arrayOfData:any;
  constructor(private servi:DataServiceService) {}
  showValue(name:any){
    console.log(name);
    this.chatData = this.servi.getChat(name)
    this.event.emit(this.chatData);
  }
}
