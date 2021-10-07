import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { NotfoundComponent } from './component/notfound/notfound.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'/login',
    pathMatch:'full'

  },
   
  {
    path: 'product',
    loadChildren: () => import('./product/product.module').then(m => m.ProductModule),

  },
  {
    path:'login',
    component:LoginComponent
  },  
  {
    path:'**',
    component: NotfoundComponent
  } 
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    
  
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
