import { trigger, style, state, transition, animate } from "@angular/core";
// import {trigger, state, style, transition, animate,keyframes} from '@angular/animations';
let x = 0;
export const myAnimation =
    trigger('myAnimation', [

        transition('void => *', [
            style({transform: 'translateX(-270px)'}),
            animate('1000ms ease-in-out')
          ]),
          transition('* => void', [
            animate('1000ms ease-in-out', style({transform: 'translateX(270px)'}))
          ])
        
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