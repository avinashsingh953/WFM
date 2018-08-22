import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { ComponentsModule } from "../components/components.module";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports:[LayoutComponent],
  declarations: [LayoutComponent, HeaderComponent, FooterComponent]
})
export class PagesModule { }