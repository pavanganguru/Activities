import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.component.html',
  styleUrls: ['./welcomepage.component.css']
})
export class WelcomepageComponent implements OnInit {
  username:string
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
addUser(){
  this.router.navigate(['/user',this.username]);
}
}
