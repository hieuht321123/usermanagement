import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Countries } from 'src/app/model/country';
import { User } from 'src/app/model/users';
import { CoutryService } from 'src/app/service/coutry.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  addUser !: FormGroup;
  countries : Countries[] =[];
  states :any;
  citys: any;
  constructor(private fb: FormBuilder,
    private router: Router,
    private countriesService: CoutryService
    ) {
  }

  ngOnInit() {
    this.countriesService.getAllCountry().subscribe(data =>{
      this.countries= data;
      console.log(   this.countries);
     });
   
    this.addUser = this.fb.group({
      userName: ['', [Validators.required]],
      phone: ['',  [Validators.required, Validators.pattern('^[0-9]*$')]],
      email: ['',[Validators.required, Validators.pattern('^[a-zA-Z0-9._-]+@fpt.com.vn')]],
      address: ['', [Validators.required]],
      country: ['', [Validators.required]],
      state: ['', [Validators.required]],
      city: ['', [Validators.required]]
    });
   
}
get f() { return this.addUser.controls; }


  addUserLocalStorage(){
    
      
  const data = this.createDto();

  localStorage.setItem('user', JSON.stringify(data));
   
  console.log(localStorage.getItem('user'));
  
}
createDto() {
  const userDto = {
    // name: this.f.names.value,
    // country: this.f.country.value
    name: this.f.userName.value,
    phone: this.f.phone.value,
    email: this.f.email.value,
    address: this.f.address.value,
    countryId: this.f.country.value,
    statesId: this.f.state.value,
    citesId: this.f.city.value
  }
  return userDto;
}
onChangeCountry(event: any) {
  const countryId= event.target.value;
  console.log(countryId)
  if (countryId) {
    this.countriesService.getStates(countryId).subscribe((data:any) => {
     this.states= data
     
      console.log(data);
       
      }
    );
  } else {
    this.states == null;
    
  }
}

onChangeStates(event: any){

  const statesId= event.target.value;
    console.log(statesId)
    if (statesId) {
      this.countriesService.getAllCity(statesId).subscribe((data:any) => {
       this.citys= data
       
        console.log(data);
         
        }
      );
    } else {
      this.citys == null;
      
  }
}
  onSubmit(){
       this.addUserLocalStorage();
  }
  backToList(){
        this.router.navigate(['product']);
  }
}
