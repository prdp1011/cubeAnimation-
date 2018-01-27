import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PageComponent } from './cube-Animation/page.component';
import { PageComponent3 } from './cube-Animation/page3.component';
import { PageComponent2 } from './cube-Animation/page2.component';
import { PageComponent1 } from './cube-Animation/page1.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent, 
    PageComponent,
    PageComponent1,
    PageComponent2,
    PageComponent3,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
