import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NgForLoopComponent } from './ng-for-loop/ng-for-loop.component';
import { EvenBindingComponent } from './even-binding-ng-class/even-binding.component';
import {TabsNgswitchComponent} from './tabs-ngswitch/tabs-ngswitch.component';
import { ModalPopupComponent } from './modal-popup/modal-popup.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, NgbModule ],
  declarations: [ AppComponent, HelloComponent, NgForLoopComponent, EvenBindingComponent, TabsNgswitchComponent, ModalPopupComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
