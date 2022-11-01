import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addevent',
  templateUrl: './addevent.component.html',
  styleUrls: ['./addevent.component.css']
})
export class AddeventComponent implements OnInit {
  events: any

  constructor() { }

  ngOnInit(): void {
      //  this.name=this.data.data["name"]
    //   this.getevent()



    // }
  
    // async getevent() {
    //   try {
    //     const data: any = await this.rest.get(`http://localhost:3000/api/main/viewevent/${this.data.user._id}`)
    //     this.events = data.doc
    //     console.log("data to vie event", data.doc);
  
  
  
  
    //   } catch (error) {
  
    //   }
  
    }
  
  
  
    // async delete(id: any) {
    //   console.log("1");
  
    //   try {
    //     const data: any = await this.rest.delete(`http://localhost:3000/api/main/delete/${id}`)
    //     console.log("deleted res", data);
  
    //     this.getevent()
    //     if(data['success']){
    //       console.log("22222");
          
    //       const delData:any=await this.rest.post("http://localhost:3000/api/main/trash",data.delData)
    //       console.log("aaaaaaaaaaaaaaaa",delData);
          
          
    //     }
  
  
  
  
  
    //   } catch (error) {
    //     console.log(error);
  
  
    //   }
  
    // }
  
    // editValue(data:any){
    //   console.log("data",data);
    //   this.data.editValues=data
      
  
    // }
  
  }
  