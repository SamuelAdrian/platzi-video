import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Product } from '../product.model';

@Component ({
    selector: 'app-product',
    templateUrl: './product.component.html'
}
)
export class ProductComponent {
    @Input() product: Product;
    @Output() productClicked: EventEmitter<any> = new EventEmitter();

    addCart() {
        console.log ('Añadir Al Carrito');
        this.productClicked.emit(this.product.id);
    }
};