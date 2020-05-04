import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NgForLoopComponent } from './ng-for-loop/ng-for-loop.component';
import { EvenBindingComponent } from './even-binding-ng-class/even-binding.component';
import {TabsNgswitchComponent} from './tabs-ngswitch/tabs-ngswitch.component';
import { ModalPopupComponent } from './modal-popup/modal-popup.component';
import { NavBarComponentComponent } from './nav-bar-component/nav-bar-component.component';
import { PostServicesComponent } from './httpClient-get/post-services.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    NgbModule, 
    HttpClientModule,
    RouterModule.forRoot([
      {path : "tableByNgLoop", component : NgForLoopComponent},
      {path: "tabsByNgswitch", component: TabsNgswitchComponent},
      {path: "modalByNgbootstrap", component: ModalPopupComponent},
      {path: "showHideByNgclass", component: EvenBindingComponent},
      {path: "httpClientMethod", component: PostServicesComponent}
    ]
   ) ],
  declarations: [ AppComponent, HelloComponent, NgForLoopComponent, EvenBindingComponent, TabsNgswitchComponent, ModalPopupComponent, NavBarComponentComponent, PostServicesComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
