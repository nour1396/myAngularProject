import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
declare var $:any;
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor() {
    
   }
   signUp=new FormGroup({
    firstName:new FormControl(""),
    lastName:new FormControl(""),
    email:new FormControl(""),
    age:new FormControl(""),
    password:new FormControl(""),
   })

   FormData(){
     console.log(this.signUp.value);
     
   }
  ngOnInit(): void {
    
    $('#signUP').particleground();
  }

}
