import { Component, OnInit } from '@angular/core';
declare var $;
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

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
