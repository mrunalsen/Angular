import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, timer, zip } from 'rxjs';
import { combineLatest} from 'rxjs/internal/observable/combineLatest';
import { buffer, bufferTime, filter, min, pairwise, take, throttleTime } from 'rxjs/operators';
import { takeUntil } from 'rxjs/operators';
import { of, concat } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'app-trial',
  templateUrl: './trial.component.html',
  styleUrls: ['./trial.component.scss']
})
export class TrialComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  // Combine Latest  & interval

  // const x = interval(1000);
  // const y = interval(1000);
  
  // combineLatest(x, y).subscribe({
  //   next: value=>console.log(value),
  //   complete:()=>console.log('completed')
    
  // })


  
  // Concat
  // it will subscribe to observables in order as previous completes
  // (Emit variable amount of values in a sequence and then emits a complete notification)
  // concat(
  //   of(1,2,3),
  //   of(4,5,6),
  //   of(7,8,9)
  // )
  // .subscribe(console.log)
    



  // Take Until
// Until an observable emits a value it will keep on emitting the values

// it will emit value every 1 second
// const source = interval(1000);

//after 5 seconds, emit value
// const timer$ = timer(5000);
//when timer emits after 5s, complete source
// const example = source.pipe(takeUntil(timer$));
// const subscribe = example.subscribe(val => console.log(val));




// ZIP
// After all observables emit, emit values as an array

// const source = interval(1000);

//when one observable completes no more values will be emitted
// const example = zip(source, source.pipe(take(5)));
// const subscribe = example.subscribe(val => console.log(val));


// Min Max
// of(5, 4, 7, 2, 8, 10).pipe(
//   min(),
// )
//   .subscribe(x => console.log(x));


// Buffer
// const clicks$ = fromEvent(document, 'click');

// clicks$.pipe(
//   buffer(clicks$.pipe(throttleTime(250))),
//   filter(clickArray => clickArray.length > 2)
// )
//   .subscribe(() => console.log('Double Click!'));


// Buffer Time
// const source = interval(500);

// const example = source.pipe(bufferTime(2000));
// var i = 0;
// const subscribe = example.subscribe(val => {
//   console.log(i, 'Buffered with Time:', val);
//   if (i == 10) {
//     subscribe.unsubscribe();
//   }
//   i++;
// }
// );


// Pair Wise
// const source = interval(500);

// const example = source.pipe(pairwise());
// var i = 0;
// const subscribe = example.subscribe(val => {
//   console.log(i, 'Buffered with Time:', val);
//   if (i == 10) {
//     subscribe.unsubscribe();
//   }
//   i++;
// }
// );


  }
}