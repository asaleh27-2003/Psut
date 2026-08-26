import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
})
export class ReversePipe implements PipeTransform {// implemtns pointer to the next word that mean we should apply everthing come after (implemnts)

  transform(value: string): string {//unkown means => the value that come to function is anonymous and is value recept any value
    return value.split('').reverse().join('');
  }

}
