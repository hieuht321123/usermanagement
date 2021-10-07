import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/users';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  users=[
    'cam', 'tao','quyet'
  ]
  userList: any[] =[];
  
  sortBy: string='email';
  sortValue: number =1;

  constructor(private userService:UserService,
   private routerService: Router
    ) { }

  ngOnInit(): void {
    this.loadAllUser();
  }


  
  loadAllUser(){
    this.userService.getAllUser().subscribe(data =>{
      this.userList= data;
      console.log("dulieu",  this.userList)
     })
  }
  onDeleteUser(id: number){
    if(window.confirm('Bạn có chắc chắn muốn xóa ?')){
        this.userService.deleteUser(id).subscribe(data=>{
        this.routerService.navigate(['']);
        this.loadAllUser();
      })
    
    }}
    onSort(name: any){
      this.sortBy= name;
      this.sortValue=- this.sortValue;
  
    }


}
