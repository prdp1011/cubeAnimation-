import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageComponent } from './cube-Animation/page.component';
import { PageComponent3 } from './cube-Animation/page3.component';
import { PageComponent2 } from './cube-Animation/page2.component';
import { PageComponent1 } from './cube-Animation/page1.component';
const appRoutes: Routes = [
  { path: '', redirectTo: '/cube/page1', pathMatch: 'full' },
  { path: 'cube', component: PageComponent, children:[
    {path: 'page1', component: PageComponent1},
    {path: 'page2', component: PageComponent2},
    {path: 'page3', component: PageComponent3}
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
