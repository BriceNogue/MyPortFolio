import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  toggleBtn: any;
  toggleBtnIcon: any;
  dropDownMenu: any;

  constructor() {
  }

  ngOnInit(): void {
    this.toggleBtn = document.querySelector('.toggle_btn');
    this.toggleBtnIcon = document.querySelector('.toggle_btn i');
    this.dropDownMenu = document.querySelector('.dropdown_menu');
  }

  openNav() {
    this.dropDownMenu.classList.toggle('open');
    const isOpen = this.dropDownMenu.classList.contains('open');

    if (isOpen) {
      this.toggleBtnIcon.classList = 'bi bi-x-lg'
    } else {
      this.toggleBtnIcon.classList = 'bi bi-list'
    }
  }

}
