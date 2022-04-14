import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { ElipsisPipe } from './elipsis.pipe';
// import { TimePipe } from './time.pipe';
import { CustomDatePipe } from './custom.datepipe';
//import { NumberWithCommasPipe } from './number-with-commas.pipe';
import { FullLanguagePipe } from './full-language.pipe';
import { ElipsisPipe } from './elipsis.pipe';
// import { CharacterWithCommasPipe } from './character-with-commas.pipe';
// import { NumberWithDoubleDigitsPipe } from './number-with-double-digits.pipe';


@NgModule({
  declarations: [
    CustomDatePipe,
    FullLanguagePipe,
    ElipsisPipe
  ],
  exports: [
    CustomDatePipe,
    FullLanguagePipe,
    ElipsisPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipeModule { }
