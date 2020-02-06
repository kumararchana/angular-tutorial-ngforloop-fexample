import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NgForLoopComponent } from './ng-for-loop/ng-for-loop.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, NgForLoopComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
