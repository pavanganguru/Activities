import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ActivitiesService } from '../activities.service';


@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {
  activities;
  boolean=true
  constructor(private service:ActivitiesService,private router:Router) { }

  ngOnInit(): void {
    this.service.getactivities()
    .subscribe( data => {
      this.activities = data;
      console.log(data)
    });
  }
  interested(){
   this.boolean=false
  }
  
  notInterested(){
    location.reload()
  }
}
