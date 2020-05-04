import { Component, OnInit } from '@angular/core';
import { HttpClient }    from '@angular/common/http';

@Component({
  selector: 'app-post-services',
  templateUrl: './post-services.component.html',
  styleUrls: ['./post-services.component.css']
})
export class PostServicesComponent {
users : any;
constructor( private http: HttpClient) { 
  let response = this.http.get('https://jsonplaceholder.typicode.com/users');
  //response.subscribe((data)=> console.log(data));
  response.subscribe((data)=> {this.users = data});
}

}