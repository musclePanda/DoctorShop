import { Component ,OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'main',
  templateUrl: './main.html',
  styleUrls: ['./main.css']
})
export class Main implements OnInit{
  admin:boolean = false
  doctor:boolean = false
  constructor( private route: ActivatedRoute,private router: Router,) {
  }
  username:string
 ngOnInit() {
  this.route.params
       // (+) converts string 'id' to a number
      //  .switchMap((params: Params) => console.log(params))
      .subscribe((params: Params) => {this.username = params.username
      });
      if( this.username == "zby"){
        this.doctor = true;
        this.admin = false;
      } else{
        this.admin = true
        this.doctor = false;
      }
     }

  quit(){
    this.router.navigate(['/login']);
  }
}
