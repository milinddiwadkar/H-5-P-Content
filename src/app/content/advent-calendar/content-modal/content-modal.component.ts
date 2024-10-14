import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-content-modal',
  templateUrl: './content-modal.component.html',
  styleUrls: ['./content-modal.component.scss'],
})
export class ContentModalComponent {
  @Input()
  content!: { type: string; value: string; };

  constructor(private modalCtrl: ModalController) {}

  isVideo() {
    return this.content.type === 'video';
  }

  isAudio() {
    return this.content.type === 'audio';
  }

  isImage() {
    return this.content.type === 'image';
  }

  isText() {
    return this.content.type === 'text';
  }

  isLink() {
    return this.content.type === 'link';
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }
}
