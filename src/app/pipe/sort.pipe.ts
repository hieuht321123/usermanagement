import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(user: any[],  sortBy: string, sortValue: number): any {
    if(sortBy ==='name'){
      user.sort((a:any ,b:any) =>{
        if(a.name > b.name) return sortValue;
        else if(a.name <b.name) return -sortValue;
        else return 0;
      })
    }
    if(sortBy ==='email'){
      user.sort((a:any ,b:any) =>{
        if(a.email > b.email) return sortValue;
        else if(a.email <b.email) return -sortValue;
        else return 0;
      })
    }
    
    return user;
  }
}
