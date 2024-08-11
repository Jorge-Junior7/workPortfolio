import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  btnMenu: boolean = false;

  btnMobile(){
    this.btnMenu = !this.btnMenu;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
