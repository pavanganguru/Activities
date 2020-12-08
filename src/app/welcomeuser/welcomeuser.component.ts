import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-welcomeuser',
  templateUrl: './welcomeuser.component.html',
  styleUrls: ['./welcomeuser.component.css']
})
export class WelcomeuserComponent implements OnInit {
   username
  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.username= this.route.snapshot.params['username'];
  }
  activities(){
    this.router.navigate(['/activities'])
  }

}
