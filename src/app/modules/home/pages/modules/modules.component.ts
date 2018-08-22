import { Component, OnInit } from '@angular/core';
import { Module } from "../../../../core/models/module";
declare var $;

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.css']
})
export class ModulesComponent implements OnInit {

  module:Module;
  constructor() {
    this.module = new Module();
    this.module.id = 1;
    this.module.name= 'Some Module';
    this.module.description ='some description of the module';
   }

  ngOnInit() {
    
    $('.show-list').click(function(){
      $('.display-list').show();
      $('.show-list').addClass('active');
      $('.display-card').hide();
      $('.show-card').removeClass('active');
    });
    $('.show-card').click(function(){
      $('.display-card').show();
      $('.show-card').addClass('active');
      $('.display-list').hide();
      $('.show-list').removeClass('active');
    });
  }

}
