import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { AppBarComponent } from './app-bar/app-bar.component';
import { ChannelsComponent } from './channels/channels.component';
import { MainChannelsComponent } from './main-channels/main-channels.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    AppBarComponent,
    ChannelsComponent,
    MainChannelsComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    FormsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
