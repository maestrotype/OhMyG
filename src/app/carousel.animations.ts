import { trigger, style, state, transition, animate } from "@angular/core";
// import {trigger, state, style, transition, animate,keyframes} from '@angular/animations';
let x = 0;

export const HighlightTrigger = trigger("rowHighlight", [
  state("selected", style({
      backgroundColor: "lightgreen",
      fontSize: "20px"
  })),
  state("notselected", style({
      backgroundColor: "lightsalmon",
      fontSize: "12px"
  })),
  transition("selected => notselected", animate("200 ms")),
  transition("notselected => selected", animate("400 ms"))
]);

export const myAnimation =
    trigger('myAnimation', [

        transition('void => *', [
            style({transform: 'scale(0.9)', opacity: 0.5}),
            animate('800ms ease-in-out')
          ]),
          // transition('* => void', [
          //   animate('1000ms ease-in-out', style({transform: 'translateY(-100px)'}))
          // ])
        
        // state('*', style({
        //     transform: 'translateX(' + x + 'px)',
        // })),
        // state('next', style({
        //     transform: 'translateX(' + (x = x - 270) + 'px)',
        // })),
        // state('prev', style({
        //     transform: 'translateX(' + (x = x + 270) + 'px)',
        // })),
        // state('void', style({
        //     transform: 'translateX(270px)'
        // })),

        // transition('* => next', animate('400ms 400ms ease-in-out',style({
        //     transform: 'translateX(' + (x = x - 270) + 'px)',
        // }))),
        // transition('* => prev', animate('400ms ease-in-out')),
        // transition('* => void',  animate('400ms ease-in-out')),
    ]);