import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Route, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  sum: number = 0;
  items = this.cartService.getItems();
  public getJsonValue: any;
  public postJsonValue: any;
  shipping()
  {
    this.http.post<any>('http://localhost:8080/addcart',this.items,).subscribe(result=>{
      console.log(this.items)
      console.log(result)
    });
    this.router.navigate(['shipping'])
  }
  constructor(
    private cartService: CartService,
    private readonly router: Router,
    private http: HttpClient
  ){}
  ngOnInit(): void {
    for(let item of this.items)
    {
      this.sum=this.sum+Number(item.price);
    }
    // this.getCart();
    // this.postCart();
  }
  // public getCart()
  // {
  //   this.http.get('http://localhost:8080/getallcart').subscribe();
  // }
}
