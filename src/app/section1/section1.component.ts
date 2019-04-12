import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';


@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.css']
})
export class Section1Component implements OnInit {
 datas: "";
 
  constructor( public ser : ServicesService) { }

  ngOnInit() {
  this.ser.getdata().subscribe(res=> {
    this.datas =res.data;
   
  });
  }

}
