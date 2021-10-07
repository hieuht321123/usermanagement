import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { RouterModule, Routes } from '@angular/router';
import { EditProductComponent } from './edit-product/edit-product.component';
import { UserService } from '../service/user.service';
import { HttpClientModule } from '@angular/common/http';
import { ListProductComponent } from './list-product/list-product.component';
import { ReactiveFormsModule } from '@angular/forms';
const appRouter: Routes = [

  {
    path:'',
    component: ProductComponent,
   
    children:[
      {
        path:'',
        component:ListProductComponent
        
      },
      {
        path:':id/edit',
        component: EditProductComponent
      },
      {
        path:'add',
        component: AddProductComponent
      }
      

    ]
  }
  


];



@NgModule({
  declarations: [
    ProductComponent,
    AddProductComponent,
    ListProductComponent
   
  ],
  imports: [
    CommonModule,
    
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(appRouter) 
  ]
 

})
export class ProductModule { }
