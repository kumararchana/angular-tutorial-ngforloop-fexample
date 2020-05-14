import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http-client-post',
  templateUrl: './http-client-post.component.html',
  styleUrls: ['./http-client-post.component.css']
})
export class HttpClientPostComponent{
 name: string
  
  constructor(private http:HttpClient) {}
  
  postData(){
    console.log(this.name);
    let url = 'https://httpbin.org/post'
    this.http.post(url,{
      name:this.name
    }).toPromise().then((data:any)=>{
      console.log(data);
      console.log(JSON.stringify(data.json));
    })
  }

}