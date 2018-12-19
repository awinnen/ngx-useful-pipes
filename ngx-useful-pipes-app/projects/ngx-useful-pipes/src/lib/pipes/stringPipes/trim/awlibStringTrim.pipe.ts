import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'awlibStringTrim'
})
export class AwlibStringTrimPipe implements PipeTransform {

  public transform(string: string, option?: "left" | "right"): string {
    if(typeof string !== "string"){
      throw new Error("swlib StringTrimPipe: Invalid Pipe input. Need a String");
    }
    if (!option) {
      return string.trim();
    } else if (option === "left") {
      return string.trimLeft();
    } else if (option === "right") {
      return string.trimRight();
    } else {
      throw new Error("awllib StringTrimPipe: Invalid option. Possible values: undefined, 'left', 'right'");
    }

  }

}
