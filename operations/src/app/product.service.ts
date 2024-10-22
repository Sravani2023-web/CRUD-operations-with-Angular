import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable ,of} from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs';
import { throwError } from 'rxjs';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
 
    private items: Item[] = [
      { id: 1, name: 'Apple', price: 200, quantity: 10 },
      { id: 2, name: 'Mango', price: 300, quantity: 10 },
      { id: 3, name: 'Banana', price: 60, quantity: 12 },
    ];
  
    getItems(): Observable<Item[]> {
      return of(this.items);
    }
  
    addItem(item: Item): void {
      item.id = this.items.length + 1;
      this.items.push(item);
    }
  
    updateItem(updatedItem: Item): void {
      const index = this.items.findIndex(item => item.id === updatedItem.id);
      if (index !== -1) {
        this.items[index] = updatedItem;
      }
    }
  
    deleteItem(id: number): void {
      this.items = this.items.filter(item => item.id !== id);
    }
  }
  
  
  



