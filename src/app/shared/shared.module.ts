import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedService } from './services/shared.service';
import { FormatUrlImgPipe } from './pipes/format-url-img.pipe';
import { ManageStepperDirective } from './derictives/manage-stepper.directive';



@NgModule({
  declarations: [

  ],
  imports: [
   CommonModule,
    RouterModule,
    AsyncPipe, 
    JsonPipe,
    CommonModule,
    FormsModule,
    HttpClientModule,
    FormatUrlImgPipe,
    ManageStepperDirective
  ],
  exports:[
    CommonModule,
    RouterModule,
    AsyncPipe, 
    JsonPipe,
    CommonModule,
    FormsModule,
    HttpClientModule,
    FormatUrlImgPipe,
    ManageStepperDirective
  ],
  providers:[
    SharedService
  ]
})
export class SharedModule { }
