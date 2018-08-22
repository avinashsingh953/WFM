import { Component, OnInit, Input,OnChanges,SimpleChange } from '@angular/core';
import { ActivatedRoute , Router } from "@angular/router";
import { Module } from "../../../../core/models/module";


@Component({
  selector: 'app-module-card',
  templateUrl: './module-card.component.html',
  styleUrls: ['./module-card.component.css']
})
export class ModuleCardComponent implements OnInit,OnChanges {
  @Input() module:Module;
  editLink:string;
  constructor(private route:ActivatedRoute, private router:Router) { 
    
  }

  ngOnInit() {
    this.editLink = 'modules/edit/' + this.module.id;
  }

  ngOnChanges(changes:{[propKey:string]:SimpleChange}){
    console.log(JSON.stringify(changes));
  }

  editModule(){
    this.router.navigate([this.editLink]);
  }

}
