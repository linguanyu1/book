import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sexReform'
})
export class SexReformPipe implements PipeTransform {
  transform(value: string, args?: any): string {
      switch(value){
          case 'male': return '男';
          case 'female': return '女';
          default: return '雌雄同体';
      }
  }
}
