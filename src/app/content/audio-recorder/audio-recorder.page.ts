import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-audio-recorder',
  templateUrl: './audio-recorder.page.html',
  styleUrls: ['./audio-recorder.page.scss'],
})
export class AudioRecorderPage {
  @ViewChild('audioPlayer', { static: false }) audioPlayer: any;

  isRecording = false;
  mediaRecorder: any;
  audioChunks: any[] = [];
  audioBlob!: Blob;
  audioBlobUrl: string = '';
  
  constructor() { }

  // Start recording
  startRecording() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
        this.mediaRecorder = new MediaRecorder(stream);
        this.mediaRecorder.start();
        this.isRecording = true;
        this.audioChunks = [];

        this.mediaRecorder.addEventListener('dataavailable', (event: { data: any; }) => {
          this.audioChunks.push(event.data);
        });

        this.mediaRecorder.addEventListener('stop', () => {
          this.audioBlob = new Blob(this.audioChunks, { type: 'audio/wav' });
          this.audioBlobUrl = URL.createObjectURL(this.audioBlob);
        });
      }).catch(error => {
        console.error('Error accessing audio devices.', error);
      });
    }
  }

  // Stop recording
  stopRecording() {
    if (this.mediaRecorder && this.isRecording) {
      this.mediaRecorder.stop();
      this.isRecording = false;
    }
  }

  // Play the recorded audio
  playAudio() {
    if (this.audioPlayer && this.audioBlobUrl) {
      this.audioPlayer.nativeElement.play();
    }
  }

  // Download the recorded audio
  downloadAudio() {
    const a = document.createElement('a');
    a.href = this.audioBlobUrl;
    a.download = 'recording.wav';
    a.click();
  }
}
