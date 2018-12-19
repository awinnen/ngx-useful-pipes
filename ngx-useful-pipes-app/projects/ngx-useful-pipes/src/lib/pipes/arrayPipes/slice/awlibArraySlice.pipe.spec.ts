/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AwlibArraySlicePipe } from './awlibArraySlice.pipe';

describe('Pipe: AwlibArrayLimite', () => {
  it('create an instance', () => {
    let pipe = new AwlibArraySlicePipe();
    expect(pipe).toBeTruthy();
  });

  it('should limit correctly', () => {
    let pipe = new AwlibArraySlicePipe();
    const testArray = [1,2,3,4,5,6,7,8,9];
    expect(pipe.transform(testArray, 5).length).toEqual(5);
  });
});
