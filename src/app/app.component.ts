import { Inject } from '@angular/core';
import { Component } from '@angular/core';
import { inject } from '@angular/core/testing';
import { Goal } from './goal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Goalzzzz';
  goal='Watch Finding nemo'
  newGoals:string[]=[]
  constructor(){
    this.newGoals=["code","work","rest","build"]
         
  }
          //creted an object golas
         
        
}
