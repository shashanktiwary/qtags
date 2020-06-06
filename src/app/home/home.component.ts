import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, concat, Observable, of, Subscription } from "rxjs";
import { concatMap, delay, map, skip, tap } from 'rxjs/operators';
import { Quiz } from '../../models/Quiz';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pollResult$: Subscription;
  loadResult$ = new BehaviorSubject('');


  constructor(private http: HttpClient, private router: Router) {

  }

  ngOnInit() {
    const job$ = this.http.get('http://localhost:4200/assets/data.json');

    const whenToRefresh$ = of('').pipe(
      delay(5000),
      tap(_ => this.loadResult$.next('')),
      skip(1),
    );

    const poll$ = concat(job$, whenToRefresh$);

    this.pollResult$ = this.loadResult$.pipe(
       concatMap(_ => poll$),
       map((response: {result: {status: String}}) => response.result)
    ).subscribe((result) => this.processJobResult(result));
  }

  processJobResult(result) {
    if(result.status == 'Success') {
      this.pollResult$.unsubscribe();
      const url = this.router.serializeUrl(
        this.router.createUrlTree(['/dashboard'])
      );

      window.open(url, '_blank');
    }
  }

  tryParticipate = function (value) {
    if (!value) {
      this.mbar.open(`Enter pin to search the quiz`, "", { duration: 3000 });
      return;
    }

    var done = new Quiz();
    done.id = value;
    done.name = "Open shift quiz";

    this.router.navigate(['dashboard']);
    // sending to another view to load the quiz details
  }

}
