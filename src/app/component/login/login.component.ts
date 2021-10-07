import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error =0;
  messeage='';
  registerForm !: FormGroup;
  a='';
  constructor(private fb: FormBuilder,
    private router: Router
    ) {
  }

  ngOnInit() {

    this.registerForm = this.fb.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
    this.checkLogin();
}
get f() { return this.registerForm.controls; }

checkLogin(){
  if(localStorage.getItem('users')){
     this.router.navigate(['product']);
    console.log("dang nhap thanh cong")
  }
}

onSubmit(){
  if((this.registerForm.value.userName ==='admin') && (this.registerForm.value.password ==='admin') ){

    localStorage.setItem('users', JSON.stringify(this.registerForm.value.usernames));
    this.router.navigate(['product']);
   this.error =0;
   console.log("login thanh cong")
  
  }
  else{
    this.messeage ="Mật khẩu hoặc tên đăng nhập không đúng";
    this.error =1;
      console.log(this.messeage)
  }

}
  reset(){
  this.error = 0;
}
}

