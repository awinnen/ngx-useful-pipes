import { Pipe, PipeTransform } from '@angular/core';

/**
 * Pipe to split a string into an Array by the provided delimiters
 * @example <span *ngFor="let part of ('Hello I am a string. I want to be splitted' | awlibStringSplit:'.':' ')"> {{part}}</span>
 */
@Pipe({
  name: 'awlibStringSplit'
})
export class AwlibStringSplitPipe implements PipeTransform {

  public transform(string: string, ...separators: string[]): string[] {
    separators = separators.map(s => {
      if([".", "(", ")", "+", "?", "<", ">"].includes(s)){
        return "\\" + s;
      }
      return s;
    });
    return string.split(new RegExp(`${separators.join('|')}`, 'g'));
  }

}
