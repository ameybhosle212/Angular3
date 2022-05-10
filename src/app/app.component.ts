import { Component , Input } from '@angular/core';
import { DataServiceService } from './data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  history:any[] = [];
  title = 'Team_Assignmnet';
  data:string = '';
  arrayOfData: any[]=[];
  ChatData:any;
  constructor(private dataService:DataServiceService){}
  receiveMessage($event: string){
    this.data = $event;
    console.log($event);
    
    this.history.push($event);
    console.log(this.history)
    this.dataService.setData(this.history);
    if(this.data === "Activity"){
      this.arrayOfData = this.dataService.sendActivitydata();
    }else{
      this.arrayOfData = this.dataService.sendChatdata()
    }
    console.log(typeof this.arrayOfData);
  }
  receiveChat(argu:any){
    
  }
}
