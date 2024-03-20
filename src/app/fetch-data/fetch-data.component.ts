import { HttpClient } from '@angular/common/http';
import { Component, OnInit, } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-fetch-data',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './fetch-data.component.html',
  styleUrl: './fetch-data.component.css'
})
export class FetchDataComponent implements OnInit {
  product: any[] = [];
  filteredData: any[] = [];
  searchTerm: string = '';

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.fetchData();
  }
  fetchData() {
    this.http.get('https://fakestoreapi.com/products')
      .subscribe((data: any) => {
        this.product = data;
        this.filteredData = data;
        console.log(data);
      });
  }

  applyFilter(): void {
    this.filteredData = this.product.filter(item =>
      item.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

}
