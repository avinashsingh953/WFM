import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from "@angular/forms";

import { ComponentsModule } from "../components/components.module";
import { IndexComponent } from './index/index.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';

import { RouterModule, Routes } from '@angular/router';
import { ModulesComponent } from './modules/modules.component';
import { ProjectsComponent } from './projects/projects.component';
import { ReportsComponent } from './reports/reports.component';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user/user.component';
import { SettingsComponent } from './settings/settings.component';
import { NewModuleComponent } from './new-module/new-module.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { NewUserComponent } from './new-user/new-user.component';



const appRoutes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'modules', component: ModulesComponent },
  { path: 'modules/add', component: NewModuleComponent },
  { path: 'modules/edit/:id', component: NewModuleComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/add', component: NewProjectComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'users', component: UserComponent },
  { path: 'users/add', component: NewUserComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'error', component: ErrorComponent }
];

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes,{enableTracing:true})
  ], exports: [
    IndexComponent,
    RouterModule
  ],
  declarations: [IndexComponent, ErrorComponent, HomeComponent, ModulesComponent, ProjectsComponent, ReportsComponent, ProfileComponent, UserComponent, SettingsComponent, NewModuleComponent, NewProjectComponent, NewUserComponent]
})
export class PagesModule { }
