import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { routerTransition } from './route.animation';


@Component({
    animations: [ routerTransition ],
  template: `<div   [@routerTransition]="state" 
  class="" style='position: fixed;
  top: 135px; margin-left:1%'>
  <router-outlet ></router-outlet>
</div>
<div class="row" style='position: fixed;
top: 357px;'>
    <a class='btn' (click)= "navigate('page1')">Page1</a>
    <a class='btn' (click)= "navigate('page2')">Page2</a>
    <a class='btn' (click)= "navigate('page3')">Page3</a>
</div>
`,
})
export class PageComponent {
    private state = false;
    constructor(private router: Router){
    }
    navigate(path){
        console.log(this.state)
        this.state = (this.state)?false: true;
        this.router.navigate(['cube', path])
    }
    getState(outlet) {
        console.log(outlet.activatedRouteData.state)
        return outlet.activatedRouteData.state;
      }  
}