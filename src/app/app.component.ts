import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http"; 

interface Products {  
  id: Number;  
  product_name: String;  
  image: String;  
  price: String;  
  stock_count: Number;  
}  


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Isham-ColdBanana';

  public data:any = []
  constructor(private http: HttpClient) {

  }

  ngOnInit(){
    const url ='https://my-json-server.typicode.com/TomSearle/cb-devtest-api/products'
    this.http.get(url).subscribe((res)=>{
      this.data = res
      console.log(this.data)
    })
  }
}
