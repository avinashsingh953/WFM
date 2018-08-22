import { Component, OnInit } from '@angular/core';
declare var $;
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.main_sidebar ul li').on('mouseenter', function () {
      // debugger;
      let sideNav = $(this).attr('data-toggle');
      $('.main_sidebar ul li').removeClass('active');
      $(this).attr('class', 'active');
      $('.sub_sidebar').hide();
      $('#' + sideNav).animate({ width: '300px' }, 200);
      $('#' + sideNav).show();
    });
    $('.menu').on('mouseleave', function () {

      $('.sub_sidebar').animate({ width: '0px' }, {
        duration: 200, complete: function () {
          $('.main_sidebar ul li').removeClass('active');
          $('.sub_sidebar').hide();
        }
      });

    });
  }

}
