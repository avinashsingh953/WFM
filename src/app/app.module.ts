import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/***************Modules***************/
import { CoreModule } from "./core/core.module";
import { ModulesModule } from "./modules/modules.module";
import { SharedModule } from "./shared/shared.module";
/***************Modules***************/

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    ModulesModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
