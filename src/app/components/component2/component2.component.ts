import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";


@Component({
  selector: "app-component2",
  templateUrl: "./component2.component.html",
  styleUrls: ["./component2.component.scss"]
})
export class Component2Component implements OnInit {
  tongSP = 0;
  @Input() product: any = [];
  @Output() valueChange: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  tinhTien() {
    this.valueChange.emit( this.product.price);
    console.log(this.tongSP);
  }


}
