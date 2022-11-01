import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms'
import { Router } from '@angular/router';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = this.formbuilder.group({
    email:[''],
    password:['']
  })

  constructor(private formbuilder: FormBuilder,private http:HttpClient,private data:DatabaseService, private route:Router) { }

  ngOnInit(): void {

  }
  login(){
    var email=this.loginForm.value.email
    var password=this.loginForm.value.password
 
    if(this.loginForm.valid){
     this.data.login(email,password).subscribe((data:any)=>{
       if(data){
         alert(data.message)
         this.route.navigateByUrl('/home')
       }else{
         alert("error password")
       }
     },(data)=>{
       alert(data.error.message)
       
     })
    }else{
     alert("Not Valid")
    }
 
   }
 

}
