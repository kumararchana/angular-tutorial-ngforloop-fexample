import { Component, OnInit } from '@angular/core';
import { HttpClient }    from '@angular/common/http';

@Component({
  selector: 'app-post-services',
  templateUrl: './httpClient-get.component.html',
  styleUrls: ['./httpClient-get.component.css']
})
export class httpClientGetComponent {
users : any;
constructor( private http: HttpClient) { 
  let response = this.http.get('https://jsonplaceholder.typicode.com/users');
  //response.subscribe((data)=> console.log(data));
  response.subscribe((data)=> {this.users = data});
}

}