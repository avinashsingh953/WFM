import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks/tasks.component';
import { ModuleCardComponent } from './module-card/module-card.component';
import { ContactCardComponent } from './contact-card/contact-card.component';
import { ContactListItemComponent } from './contact-list-item/contact-list-item.component';
import { RouterModule } from '@angular/router';
import { UploadUserImageComponent } from './upload-user-image/upload-user-image.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[TasksComponent, ModuleCardComponent, ContactCardComponent, ContactListItemComponent, UploadUserImageComponent],
  declarations: [TasksComponent, ModuleCardComponent, ContactCardComponent, ContactListItemComponent, UploadUserImageComponent]
})
export class ComponentsModule { }
