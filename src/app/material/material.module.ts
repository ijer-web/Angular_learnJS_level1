import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatInputModule, MatToolbarModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatToolbarModule,
    NoopAnimationsModule,
    MatCardModule
  ],
  exports: [
    MatInputModule,
    MatToolbarModule,
    NoopAnimationsModule,
    MatCardModule
  ],
  declarations: []
})
export class MaterialModule {}
