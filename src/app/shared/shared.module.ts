import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/***************Modules***************/
import { ComponentsModule } from "./components/components.module";
import { PagesModule } from "./pages/pages.module";
/***************Modules***************/

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports:[
    ComponentsModule,
    PagesModule
  ],
  declarations: []
})
export class SharedModule { }
