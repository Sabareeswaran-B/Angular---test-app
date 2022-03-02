import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeA'
})
export class RemoveAPipe implements PipeTransform {

  transform(value: string): string {
    let temp = value.split('');
    let response = "";
    temp.forEach((a, index)=> {
      if(a != "a"){
        response += a;
      }
    })
    return response;
  }

}
