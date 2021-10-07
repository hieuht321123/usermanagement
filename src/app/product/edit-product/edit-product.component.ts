import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { City } from 'src/app/model/city';
import { Countries } from 'src/app/model/country';
import { States } from 'src/app/model/states';
import { User } from 'src/app/model/users';
import { CoutryService } from 'src/app/service/coutry.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  checkState= true;
  checkCity= true;
  //user: any;
  a='nguyen';
    user: User = {
    id: 0,
    name: '',
    phone: 0,
    email: '',
    address: '',
    countryId: 0,
    statesId: 0,
    citesId: 0
};
  country: Countries={
    id : 0 ,
    nameCountry :''
  }
  
  state: States={
    id : 0,
    countyId : 0,
    nameStates : ''
  }
  city: City ={
  id : 0 ,
  nameCities : '',
  statesId : 0
  }
  countries:Countries[] =[];
  states: States[] =[];
  citys: City[] =[];
  countryID :any;
  stateIDs: any;
  
  cityID: any;
  
    public subcription ?: Subscription;
    public subcriptionParams ?: Subscription;
    constructor(
      private userService:UserService,
      public routerService: Router,
      public activateRouterService: ActivatedRoute,
      private coutryService: CoutryService,
      
  
    ) { }
    
    ngOnInit(): void {  
    
  
    this.getUserById();
       this.getAllCountry();
    
    }
  
  getAllCountry(){
    this.coutryService.getAllCountry().subscribe(data =>{
      this.countries= data;
    console.log('all coutry',data)
     });
  }
  
      getUserById(){
      this.activateRouterService.params.subscribe((data: Params) =>{
       let id= data['id'];
       this.subcription = this.userService.getUserById(id).subscribe((users: User) =>{
        this.user= users;
        
        this.countryID= users.countryId;
        this.coutryService.getCountryById(this.countryID).subscribe(data =>{
          this.country = data;
         
       });
  
       this.stateIDs= users.statesId;
       this.coutryService.getStateById(this.stateIDs).subscribe(datas =>{
        this.state = datas;
       
     }); 
  
     this.cityID= users.citesId;
     this.coutryService.getByIdCity(this.cityID).subscribe(datass =>{
      this.city = datass;
     
   });
       
  
       });
      });
  
      
    }
  
   
   
   
    
  
  
    onChangeCountry(event: any) {
      const countryId= event.target.value;
       this.checkState = !this.checkState;
      console.log(countryId)
      if (countryId) {
        this.coutryService.getStates(countryId).subscribe((data:any) => {
         this.states= data
          }
        );
      } else {
        this.states == null;
        
      }
    }
    onChangeStates(event: any){
  
      const statesId= event.target.value;
        this.checkCity =!this.checkCity;
        if (statesId) {
          this.coutryService.getAllCity(statesId).subscribe((data:any) => {
           this.citys= data
           
             
            }
          );
        } else {
          this.citys == null;
          
        }
      }
  
      updateUser(){
        this.userService.updateUser(this.user).subscribe(data=>{
          this.routerService.navigate(['']);
  
       
        })
       
      }
   
      backToList(){
        this.routerService.navigate(['product']);
      }
  
   
    ngOnDestroy(): void {
      if(this.subcription){
        
      this.subcription?.unsubscribe();
      }
      if(this.subcriptionParams){
        this.subcriptionParams.unsubscribe();
      }
    }
  
  
  }

