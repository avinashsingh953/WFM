import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/***************Modules***************/
import { PagesModule } from "./pages/pages.module";
/***************Modules***************/

@NgModule({
  imports: [
    CommonModule,
    PagesModule
  ],
  exports:[   
    PagesModule
  ],
  declarations: []
})
export class HomeModule { }
