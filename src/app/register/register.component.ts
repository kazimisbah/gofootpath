import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EnrollService } from '../enroll.service';
import {User} from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
u:User;
  constructor(private enroll:EnrollService ) { }

  ngOnInit() {
  }
  onSubmit(regForm:NgForm)
  {
    console.log("reg data :",regForm.value)
      this.u=new User();
      this.u.fname=regForm.value.fname;
      this.u.lname=regForm.value.lname;
      this.u.email=regForm.value.email;
      this.u.phone=regForm.value.phone;
      this.u.pass=regForm.value.pass;
      this.u.cpass=regForm.value.cpass;
      this.enroll.enroll(this.u).subscribe(
        (response)=>
        {
      
    
          console.log("response :",response)

    });
  }
}
