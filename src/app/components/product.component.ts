import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  DoCheck,
  OnInit,
  OnDestroy
} from '@angular/core';
import { Product } from '../product.model';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, DoCheck, OnDestroy{
  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  today = new Date();

  constructor(){
    console.log('1. contructor');
  }

  //ngOnChanges( changes: SimpleChanges) {
   //   console.log('ngOnChanges');
    //  console.log(changes);
  //  }

    ngOnInit() {
      console.log('3. ngOnInit');
    }

    ngDoCheck () {
      console.log('4. ngDoCheck');
    }

    ngOnDestroy() {
      console.log('5. ngDoCheck');
    }

  addCart() {
    console.log('añadir al carrito');
    this.productClicked.emit(this.product.id);
  }

}