import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaravillaComponent } from './maravilla.component';
import { MaravillaDetailComponent } from './maravilla-detail/maravilla-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MaravillaComponent,MaravillaDetailComponent],
  exports:[MaravillaComponent]
})
export class MaravillaModule { }
