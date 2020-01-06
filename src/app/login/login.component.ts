import { Component, OnInit } from '@angular/core';
import {EnrollService} from '../enroll.service';
import {Router,ActivatedRoute,Params} from '@angular/router';
import {NgForm} from '@angular/forms';
import { from } from 'rxjs';
import { User } from '../User';
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  u:User;
  email:string;
  password:string;
  token:string;

  constructor(private dataservice: EnrollService,private router:Router) { }
  login(logform:NgForm)
  {
    // swal('Yaay!!!','Account Successfully Created','success');
    // this.u=new User();
    this.email=logform.value.email;
    this.password=logform.value.password;
    this.dataservice.login(this.email,this.password).subscribe(
      (response)=>
      {
        if(response.message==1)
        {
         
          
          // this.dataservice.changeUserUpdate(true);
          this.dataservice.getlogin(response.token);
          const toast = swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500
          });
          
          
         this.router.navigate(['/pcategory']);

        }
        
      }
    );

  }



  ngOnInit() {
  }

  

}
