import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Quiz } from '../../models/Quiz';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router : Router, private mbar : MatSnackBar) { }

  ngOnInit() {

  }

  tryParticipate = function(value){
    if(!value){
      this.mbar.open(`Enter pin to search the quiz`,"", {duration: 3000});
      return;
    }

    var done = new Quiz();
    done.id = value;
    done.name = "Open shift quiz";

    this.router.navigate(['dashboard']);
    // sending to another view to load the quiz details
  }

}
