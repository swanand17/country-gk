import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { DetailsComponent } from './details/details.component';
import { AngularMaterialModules } from './angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MainComponent, DetailsComponent],
  imports: [
    CommonModule,
    AngularMaterialModules,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class MainModule {}
