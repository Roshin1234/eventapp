import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { Route, Router } from '@angular/router';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerform:any = this.formbuilder.group({
    userid:[''],
    email:[''],
    password:[''],
    dob:['']
  })

  constructor(private formbuilder:FormBuilder, private http:HttpClient, private data:DatabaseService,private route:Router) { }

  ngOnInit(): void {
  }
  register(){
    var userId=this.registerform.value.userid
    var email=this.registerform.value.email
    var password=this.registerform.value.password
    var date_of_birth=this.registerform.value.dateOfBirth

    if(this.registerform.valid){
      this.data.register(userId,email,password,date_of_birth).subscribe((data:any)=>{
        if(data){
          console.log("data",data)
        localStorage.setItem('userId',userId)
          alert(data.message)
          this.route.navigateByUrl('/login')
        }
      },(data)=>{
        alert(data.error.message)

      })
    }else{
      alert("failed")
    }
  }


}
