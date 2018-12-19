import { NgModule } from '@angular/core';
import { NgxUsefulPipesComponent } from './ngx-useful-pipes.component';
import { AwlibArraySlicePipe } from 'projects/ngx-useful-pipes/src/lib/pipes/arrayPipes/slice/awlibArraySlice.pipe';
import { CommonModule } from '@angular/common';
import { AwlibStringSplitPipe } from 'projects/ngx-useful-pipes/src/lib/pipes/stringPipes/split/awlibStringSplit.pipe';
import { AwlibStringTrimPipe } from 'projects/ngx-useful-pipes/src/lib/pipes/stringPipes/trim/awlibStringTrim.pipe';

@NgModule({
  declarations: [
    NgxUsefulPipesComponent,
    AwlibArraySlicePipe,
    AwlibStringSplitPipe,
    AwlibStringTrimPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [NgxUsefulPipesComponent]
})
export class NgxUsefulPipesModule { }
