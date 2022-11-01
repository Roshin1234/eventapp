import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms'
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  Event:any

  constructor( private http:HttpClient, private route:Router,private data:DatabaseService) { }

  ngOnInit(): void {
    this.getEvent()
    

  }
  getEvent(){
    this.data.geteventList().subscribe((data:any)=>{
       this.Event=data
      console.log("Events data",Event)
    })
  }
  deleteEvent(id:any){
    if(confirm('Are you sure you want to delete this employee'))
     this.http.delete('http://localhost:3000/api/'+id).subscribe(data=>{
        console.log("delete datasss",data)
        this.http.post('http://localhost:3000/api/deleteadd',data).subscribe(data=>{
          if(data){
            console.log("hi",data)
          }
        })
    },err=>{
      console.log("error",err)
    })
    
  }
  

}

