// ar-scavenger.page.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-ar-scavenger',
  templateUrl: './ar-scavenger.page.html',
  styleUrls: ['./ar-scavenger.page.scss'],
})
export class ArScavengerPage {
  // Example items in the scavenger hunt
  items = [
    { id: 1, name: 'Red Cube', found: false },
    { id: 2, name: 'Green Sphere', found: false },
    // Add more items as needed
  ];

  constructor() {}

  // Method to mark an item as found
  markItemFound(itemId: number) {
    const item = this.items.find((item) => item.id === itemId);
    if (item) {
      item.found = true;
      console.log(`${item.name} found!`);
    }
  }
}
