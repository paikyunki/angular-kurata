import { Component, OnInit } from '@angular/core';

import { IProduct } from './product';
import {ProductService} from "./product.service";

@Component({
    selector: 'pm-products',
    templateUrl: 'app/products/product-list.component.html',
    styleUrls: ['app/products/product-list.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    errorMessage: string;
    products: IProduct[];

    /* In the constructor, angular injector injects the productservice */
    constructor(private _productService: ProductService) {

    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        console.log('In OnInit');
           this._productService.getProducts()
            .subscribe(produts => this.products = produts,
               error => this.errorMessage = <any> error);
        console.log('ProductSerivce invoked to retrieve data')
    }

    onRatingClicked(message: string) {
        this.pageTitle = 'Product List:' + message;
    }


}
