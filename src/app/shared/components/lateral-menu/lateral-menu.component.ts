import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lateral-menu',
  templateUrl: './lateral-menu.component.html',
  styleUrls: ['./lateral-menu.component.css'],
})
export class LateralMenuComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    //LOS SIGUIENTES EVENTOS SON PROPIOS DEL TEMPLATE, LOS COLOQUE EN EL COMPONENTE EN EL QUE NECESITA EJECUTARSE
    const select = (el, all = false) => {
      el = el.trim();
      if (all) {
        return [document.querySelectorAll(el)];
      } else {
        return document.querySelector(el);
      }
    };
    var anchoVentana = window.innerWidth;

    var menu = document.getElementById('navbarh');
    menu.addEventListener('click', function (e) {
      /// if (anchoVentana<1440) {
      select('body').classList.toggle('mobile-nav-active');
      this.classList.toggle('bi-list');
      this.classList.toggle('bi-x');
      // }
    });
    let nodeItems = document.getElementsByClassName('nav-link');
    for (let i = 0; i < nodeItems.length; i++) {
      nodeItems[i].addEventListener('click', function () {
        if (anchoVentana < 1440) {
          select('body').classList.toggle('mobile-nav-active');
        }
      });
    }
  }
}
