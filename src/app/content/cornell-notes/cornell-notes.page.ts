import { Component } from '@angular/core';

@Component({
  selector: 'app-cornell-notes',
  templateUrl: './cornell-notes.page.html',
  styleUrls: ['./cornell-notes.page.scss'],
})
export class CornellNotesPage {
searchVideos() {
throw new Error('Method not implemented.');
}
videos: any;
selectedVideoId: any;
searchQuery: any;
playVideo(arg0: any) {
throw new Error('Method not implemented.');
}
  cuesVisible: boolean = true;
  notesVisible: boolean = true;
  summaryVisible: boolean = true;

  constructor() {}

  toggleCues() {
    this.cuesVisible = !this.cuesVisible;
  }

  toggleNotes() {
    this.notesVisible = !this.notesVisible;
  }

  toggleSummary() {
    this.summaryVisible = !this.summaryVisible;
  }
}
