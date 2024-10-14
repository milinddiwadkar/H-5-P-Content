import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ContentModalComponent } from './content-modal/content-modal.component';

interface Content {
  type: string;
  value: string;
}

@Component({
  selector: 'app-advent-calendar',
  templateUrl: './advent-calendar.page.html',
  styleUrls: ['./advent-calendar.page.scss'],
})
export class AdventCalendarPage {
togglePanel(_t13: number) {
throw new Error('Method not implemented.');
}
panels: any;
isPanelExpanded(_t13: number): any {
throw new Error('Method not implemented.');
}
  readonly rows = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
    [17, 18, 19, 20],
    [21, 22, 23, 24]
  ];

  readonly contentData: { [key: number]: Content } = { // Keep the key type as number
    1: { type: 'video', value: 'https://youtu.be/fyNkVu9EifI?si=rTWoSo67gpR7pKrP' },
    2: { type: 'audio', value: 'https://gaana.com/song/kar-kirpa-meri-maa' },
    3: { type: 'image', value: 'https://manofmany.com/wp-content/uploads/2021/04/Top-15-Best-Sports-Cars-Power-Luxury-and-Design-Ford-Mustang.jpeg' },
    4: { type: 'text', value: 'Happy Holidays!' },
    5: { type: 'link', value: 'https://example.com' },
    // Add more content types for each day
  };

  constructor(private modalCtrl: ModalController) {}

  async openDay(day: number) {
    const content = this.contentData[day]; // Use day directly since it's a number

    const modal = await this.modalCtrl.create({
      component: ContentModalComponent,
      componentProps: { content }
    });

    await modal.present();
  }
}
