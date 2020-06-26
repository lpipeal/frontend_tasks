import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';


import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSliderModule} from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatNativeDateModule} from '@angular/material/core';




const materialModules= [
MatDatepickerModule, 
MatNativeDateModule,
MatButtonModule,
MatFormFieldModule,
MatInputModule,
BrowserAnimationsModule,
LayoutModule,
MatSliderModule,
];

@NgModule({
  declarations: [
 
  ],
  imports: [materialModules],
  exports: [materialModules],
  providers: [],
  bootstrap: []
})
export class MaterialModule { }
