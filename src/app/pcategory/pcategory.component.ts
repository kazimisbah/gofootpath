import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router';
import {CommonModule} from '@angular/common'

@Component({
  selector: 'app-pcategory',
  templateUrl: './pcategory.component.html',
  styleUrls: ['./pcategory.component.css']
})
export class PcategoryComponent implements OnInit {
  public id: string;
  public pcat: string;

  private router: Router;
  constructor( private route: ActivatedRoute) { }

  ngOnInit() {
    this.pcat= this.route.snapshot.params['id'];

  }

}