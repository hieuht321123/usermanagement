import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/users';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  users=[
    'cam', 'tao','quyet'
  ]
  userList: User[] =[];
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.loadAllUser();
  }

  loadAllUser(){
    this.userService.getAllUser().subscribe(data =>{
      this.userList= data;
      console.log("dulieu",  this.userList)
     })
  }

}
