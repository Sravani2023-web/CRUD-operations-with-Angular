
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Item } from '../item';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

  export class HomeComponent implements OnInit {
  
      items: Item[] = [];
      newItem: Item = { id: 0, name: '', price: 0, quantity: 0 };
      editItem: Item | null = null;
      showAddForm: boolean = false; // Add this line
    
      constructor(private itemService: ProductService) {}
    
      ngOnInit(): void {
        this.loadItems();
      }
    
      loadItems(): void {
        this.itemService.getItems().subscribe((data) => {
          this.items = data;
        });
      }
    
      addItem(): void {
        if (this.newItem.name && this.newItem.price && this.newItem.quantity) {
          this.itemService.addItem(this.newItem);
          this.newItem = { id: 0, name: '', price: 0, quantity: 0 };
          this.loadItems();
        }
      }
    
      startEdit(item: Item): void {
        this.editItem = { ...item };
      }
    
      updateItem(): void {
        if (this.editItem) {
          this.itemService.updateItem(this.editItem);
          this.editItem = null;
          this.loadItems();
        }
      }
    
      deleteItem(id: number): void {
        this.itemService.deleteItem(id);
        this.loadItems();
      }
    
      cancelEdit(): void {
        this.editItem = null;
      }
    
    
    
  }
  

