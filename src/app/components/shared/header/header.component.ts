import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  liStyles = {
    liHome: 'active',
    liPost: '',
    liList: '',
  };

  activeStyle(page: string) {
    switch (page) {
      case 'home':
        console.log('home');
        this.liStyles.liHome = 'active';
        this.liStyles.liPost = '';
        this.liStyles.liList = '';
        break;
      case 'post':
        console.log('post');
        this.liStyles.liHome = '';
        this.liStyles.liPost = 'active';
        this.liStyles.liList = '';
        break;
      case 'list':
        console.log('list');
        this.liStyles.liHome = '';
        this.liStyles.liPost = '';
        this.liStyles.liList = 'active';
        break;
    }
  }
}
