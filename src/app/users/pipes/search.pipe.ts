import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../model/model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(user:User[], searchText:string): User[] 
  {
    if (searchText === ""){
      return user;
    }
    return user.filter((data:User) => {return data.firstName.toLowerCase().match(searchText.toLowerCase())
    })
  }
  }
