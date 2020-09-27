import { Component, OnInit, Output } from "@angular/core";
import * as data from "../../shared-service/data-shared";

@Component({
  selector: "app-component1",
  templateUrl: "./component1.component.html",
  styleUrls: ["./component1.component.scss"]
})

export class Component1Component implements OnInit {
  productInfor = data.filmInfo;
  tongTien = 0;
  constructor() { }

  ngOnInit(): void {
  }
  tinhTien($event){
    this.tongTien += $event;
  }

}
