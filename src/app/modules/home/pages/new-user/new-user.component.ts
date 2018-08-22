import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { User } from "../../../../core/models/user";
import { CustomValidators } from "../../../../core/utils/custom-validators";

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  newUserForm:FormGroup;
  post:any;
  user :User;
  pattern : RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  constructor(private formBuilder : FormBuilder) {
    this.newUserForm = formBuilder.group({
      'name':[null,Validators.required],
      'email':[null,CustomValidators.pattern(this.pattern)]
    })
   }

  ngOnInit() {
  }

  createUser(post){
    this.user.name = post.name;
    this.user.emailAddress = post.emailAddress;
  }

}
