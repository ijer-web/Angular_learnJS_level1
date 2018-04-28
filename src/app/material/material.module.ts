import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatInputModule, MatToolbarModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatToolbarModule,
    NoopAnimationsModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [
    MatInputModule,
    MatToolbarModule,
    NoopAnimationsModule,
    MatCardModule,
    MatButtonModule
  ],
  declarations: []
})
export class MaterialModule {}
