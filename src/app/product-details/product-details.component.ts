import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(private route: ActivatedRoute, private cart: CartService) {}

  addToCart(product: Product) {
    this.cart.addToCart(product);
    window.alert('Product Added to cart');
  }

  ngOnInit(): void {
    //getting product id in the url (current route)
    const routeParams = this.route.snapshot.paramMap;
    const productIDFromRoute = Number(routeParams.get('productID'));

    this.product = products.find(
      (product) => product.id === productIDFromRoute
    );
  }
}
