import { Component } from '@angular/core';

@Component({
  selector: 'app-agamotto',
  templateUrl: './agamotto.page.html',
  styleUrls: ['./agamotto.page.scss'],
})
export class AgamottoPage {
  cars = [
    {
      name: 'Car 1',
      model: 'Model X',
      image: 'assets/images/car1.jpg', // Replace with your car image path
      description: 'Description for Car 1',
    },
    {
      name: 'Car 2',
      model: 'Model Y',
      image: 'assets/images/car2.jpg', // Replace with your car image path
      description: 'Description for Car 2',
    },
    {
      name: 'Car 3',
      model: 'Model Z',
      image: 'assets/images/car3.jpg', // Replace with your car image path
      description: 'Description for Car 3',
    },
  ];

  constructor() {}
}
