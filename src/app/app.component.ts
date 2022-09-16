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
  public data:any = [];
  //public data:any = {locations:[], products:[]}
  public displayData:any = []; 
  

  showMore() {
    let newLength = this.displayData.length + 6;
    if (newLength > this.data.length) {
        newLength = this.data.length
    }
     this.displayData = this.data.slice(0, newLength);
    
  }
  
  constructor(private http: HttpClient) {

  }

  getData(){
    const url ='https://my-json-server.typicode.com/TomSearle/cb-devtest-api/db'
    this.http.get(url).subscribe((res:any)=>{
      this.data = res.products[0]
      console.log(this.data)

      this.showMore();
      console.log(this.displayData)
    })
  }

  ngOnInit(){
    this.getData();
  }
}
