import { Component, OnInit } from '@angular/core';
import {data} from "../category";
import {Router, ActivatedRoute, Params} from '@angular/router';
import {pdata} from '../product'


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
 

  constructor(private route: ActivatedRoute) { }
saman=[];
  ngOnInit() {
    console.log('id is:',this.route.snapshot.params["id"])
    this.saman=pdata[this.route.snapshot.params["id"]].products;
    console.log('gingalala '+this.saman)
  }

}
