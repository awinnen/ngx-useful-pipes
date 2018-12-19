import { Pipe, PipeTransform } from '@angular/core';

/**
 * This pipe limits an array's content.
 * @example <span *ngFor="let num of ([1, 2, 3, 4, 5, 6, 7, 8, 9] | awlibArraySlice:0:5)">{{num}}</span>
 */
@Pipe({
  name: 'awlibArraySlice'
})
export class AwlibArraySlicePipe implements PipeTransform {

  public transform(array: any[], start: number = 0, end?: number): any[] {
    if(!Array.isArray(array)){
      throw new Error("awlib:  ArrayLimitPipe Input is not an array.");
    }

    return array.slice(start, end);
  }

}
