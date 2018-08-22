import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/***************Modules***************/
import { HomeModule } from "./home/home.module";
/***************Modules***************/

@NgModule({
  imports: [
    CommonModule
  ],exports:[
    HomeModule
  ],
  declarations: []
})
export class ModulesModule { }
