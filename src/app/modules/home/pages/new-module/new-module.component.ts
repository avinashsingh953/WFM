import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from "@angular/router";
import { Module } from "../../../../core/models/module";

@Component({
  selector: 'app-new-module',
  templateUrl: './new-module.component.html',
  styleUrls: ['./new-module.component.css']
})
export class NewModuleComponent implements OnInit {
  module : Module;
  heading: string;
  constructor(private route:ActivatedRoute) { 

  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    if(id==null){
      this.heading = 'Add a new module';
    }else{
      this.heading = 'Edit module';
    }
    console.log('Module:'+id);
  }

}
