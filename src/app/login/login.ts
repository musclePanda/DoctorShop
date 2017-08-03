import { Component } from '@angular/core';
 import { Route, Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {

  constructor(private route: ActivatedRoute, private router: Router) {

   }
  name:any
  pass:any
  msg:string
  url:string
  onnameKey(event: any) {
    this.name = event.target.value;
  }
  onpassKey(event: any) {
    this.pass = event.target.value;
  }
  submit(){
    if(this.name == 'zby' || this.pass == 123){
      this.msg = ""
      this.router.navigate(['/main']);
    } else{
      this.msg = "用户名或者密码错误！"
      this.url = ""
    }
  }
}
