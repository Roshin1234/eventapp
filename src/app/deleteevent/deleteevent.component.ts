import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deleteevent',
  templateUrl: './deleteevent.component.html',
  styleUrls: ['./deleteevent.component.css']
})
export class DeleteeventComponent implements OnInit {
  Trash:any


  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getTrash()
 


  }
  getTrash(){
    this.http.get('http://localhost:3000/api/trash').subscribe(data=>{
      this.Trash=data
    },err=>{
      console.log(err)
    })
  }



}
