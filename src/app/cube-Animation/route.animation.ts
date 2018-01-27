import {trigger, stagger, animate, style, group, query, transition} from '@angular/animations';

export const routerTransition = trigger('routerTransition', [
  transition('* <=> *', [
    query(':enter, :leave', style({ position: 'fixed', width:'200px' })
      , { optional: true }),
    group([
      query(':enter', [
        style({ transform: ' rotateY(45Deg) translateX(50%)' }),
        animate('4s ease-in-out', style({ transform: ' rotateY(0) translateX(0%) ' }))
      ], { optional: true }),
      query(':leave', [
        style({ transform: 'translateX(0%) rotateY(0)' }),
        animate('5s ease-in-out', style({ transform: 'translateX(-100%) rotateY(-45Deg)' }))
      ], { optional: true }),
    ])
  ])
])