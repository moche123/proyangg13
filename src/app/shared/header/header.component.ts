import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public userName = '';
  constructor( private router:Router ){}

  ngOnInit(){
    this.userName = localStorage.getItem('name') || '';
  }

  closeSession(){
    localStorage.clear();
    this.router.navigateByUrl('/auth');
  }
}
