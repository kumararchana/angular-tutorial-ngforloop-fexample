import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-even-binding',
  templateUrl: './even-binding.component.html',
  styleUrls: ['./even-binding.component.css']
})
export class EvenBindingComponent{
  isClciked = false;
  displayClass(){
    return{
      'd-none':!this.isClciked,
      'd-block': this.isClciked
    }
  }
  showMe(){
    this.isClciked = !this.isClciked;
    console.log(this.isClciked);

  }
}