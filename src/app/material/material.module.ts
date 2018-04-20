import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatToolbarModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatToolbarModule,
    NoopAnimationsModule
  ],
  exports: [
    MatInputModule,
    MatToolbarModule,
    NoopAnimationsModule
  ],
  declarations: []
})
export class MaterialModule {}
