import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MainRoutingModule } from './main.routing.module'

import { Main } from './main'
import { diagListComponent} from './diagList/diagList'
import { adiagListComponent } from './adiagList/adiagList'
@NgModule({
  declarations: [
    Main,
    diagListComponent,
    adiagListComponent
  ],
  imports: [
    BrowserModule,
    MainRoutingModule
  ],
  providers: [],
})
export class MainModule { }
