import { SharedService } from './../../services/shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  shared : SharedService;
  
  constructor(){
    this.shared = SharedService.getInstance();
  }

  ngOnInit(){
  }

}