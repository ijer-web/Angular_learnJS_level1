import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CardComponent implements OnInit {
  @Input() public product: Product;
  @Input() public position: number;
  @Input() public isOdd: boolean;

  public constructor() {
  }

  public ngOnInit(): void {
  }

}
