import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  atualPath:string = this.router.url;
  page!:string
  liStyles = {
    liHome: "",
    liPost: "",
    liList: "",
  }

  ngOnInit():void{
    this.changeListStyle(this.atualPath)

  }
  constructor(private router: Router){}


  changeListStyle(path:string) {
    switch(path){
      case "/":
        console.log("home")
        this.liStyles.liHome = "active"
        this.liStyles.liPost = ""
        this.liStyles.liList = ""
        break
      case "/post":
        console.log("post")
        this.liStyles.liHome = ""
        this.liStyles.liPost = "active"
        this.liStyles.liList = ""
        break
      case "/list":
        console.log("list")
        this.liStyles.liHome = ""
        this.liStyles.liPost = ""
        this.liStyles.liList = "active"
        break
    }
  }


}


