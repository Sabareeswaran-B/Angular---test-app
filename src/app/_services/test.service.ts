import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../_models/product';
import { Store } from '../_models/store';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private httpClient: HttpClient) { }

  getStores() {
    return this.httpClient.get<Array<Store>>(`${environment.apiUrl}/store`);
  }

  getProductsFromSingleStore(id:string) {
    return this.httpClient.get<Product[]>(`${environment.apiUrl}/fromsinglestore/${id}`);
  }
}
